import axios from "axios";
import {Admin} from "./API/Admin.js";
import {Core} from "./API/Core.js";
import {Node} from "./API/Node.js";
import {Sub} from "./API/Sub.js";
import {System} from "./API/System.js";
import {User} from "./API/User.js";
import {UserTemplate} from "./API/UserTemplate.js";

const OPTIONS = {
  errorHandler: null,
  reAuth: false,
  reAuthAttempts: 3
}

/**
 * Marzban API Wrapper
 * @class Marzban
 * @param {String} url - Marzban API URL
 * @param {{errorHandler: function, reAuth: boolean, reAuthAttemps: number}} - Options
 * @constructor
 */
class Marzban {
  constructor(url, options = OPTIONS) {
    this.axios = axios.create({
      baseURL: url,
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
    })
    this._reAuthAttemptsCounter = 0;

    this.errorHandler = options.errorHandler || null;
    this.reAuth = options.reAuth || false;
    this.reAuthAttempts = options.reAuthAttempts || 3;

    this.axios.interceptors.response.use(
      response => response.data,
      error => this._errorHandler(error)
    );

    /**
     * @alias Admin
     * @type {Admin}
     */
    this.admin = new Admin(this.axios);
    /**
     * @alias Core
     * @type {Core}
     */
    this.core = new Core(this.axios);
    /**
     * @alias Node
     * @type {Node}
     */
    this.node = new Node(this.axios);
    /**
     * @alias Sub
     * @type {Sub}
     */
    this.sub = new Sub(this.axios);
    /**
     * @alias System
     * @type {System}
     */
    this.system = new System(this.axios);
    /**
     * @alias User
     * @type {User}
     */
    this.user = new User(this.axios);
    /**
     * @alias UserTemplate
     * @type {UserTemplate}
     */
    this.userTemplate = new UserTemplate(this.axios);
  }

  /**
   * Authenticate to the Marzban API
   * @param {String} username
   * @param {String} password
   * @returns {Promise<boolean>}
   */
  async auth(username, password) {
    if (!username || !password) {
      throw new Error('Username and password are required');
    }

    const { access_token } = await this.admin.token(username, password);

    if (access_token) {
      this.axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;

      if (this.reAuth) {
        this._reAuthAttemptsCounter = 0;
        this._authUsername = username;
        this._authPassword = password;
      }

      return true;
    }

    return false;
  }

  /**
   * Re-authenticate and update token
   * @returns {Promise<boolean>}
   * @private
   */
  async _reAuthenticate() {
    if (this._authUsername && this._authPassword) {
      try {
        return await this.auth(this._authUsername, this._authPassword);
      } catch (authError) {
        console.error('Re-authentication failed', authError);
        throw authError;
      }
    } else {
      throw new Error('No stored credentials for re-authentication');
    }
  }

  /**
   * Error handler
   * @param {object} error
   * @returns {boolean|Promise<*>}
   * @private
   */
  async _errorHandler(error) {
    const originalRequest = error.config;

    if (error.response?.status === 401 && this.reAuth && this._reAuthAttemptsCounter < this.reAuthAttempts) {
      this._reAuthAttemptsCounter++;
      console.log(`Token expired, attempting re-authentication (${this._reAuthAttemptsCounter}/${this.reAuthAttempts})`);

      try {
        const isAuthenticated = await this._reAuthenticate();

        if (isAuthenticated) {
          originalRequest.headers['Authorization'] = this.axios.defaults.headers.common['Authorization'];
          return this.axios.request(originalRequest);
        }
      } catch (authError) {
        console.error('Re-authentication failed', authError);
        throw authError;
      }
    }

    if (this.errorHandler) {
      this.errorHandler(error);
    } else {
      console.error(error.response?.status, error.response?.data);
    }

    throw error;
  }
}

export default Marzban;