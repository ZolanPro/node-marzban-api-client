import axios from "axios";
import {Admin} from "./API/Admin.js";
import {Core} from "./API/Core.js";
import {Node} from "./API/Node.js";
import {Sub} from "./API/Sub.js";
import {System} from "./API/System.js";
import {User} from "./API/User.js";
import {UserTemplate} from "./API/UserTemplate.js";

/**
 * Marzban API Wrapper
 * @class Marzban
 * @param {String} url - Marzban API URL
 * @constructor
 */
export default class Marzban {
  constructor(url) {
    this.axios = axios.create({
      baseURL: url,
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
    });

    this.axios.interceptors.response.use(response => response.data, error => this._errorHandler(error));

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
    const { access_token } = await this.admin.token(username, password);

    if (access_token) {
      this.axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
      return true;
    }

    return false;
  }

  /**
   * Error handler
   * @param {object} error
   * @returns {boolean}
   * @private
   */
  _errorHandler(error) {
    console.error(error.response.status, error.response.data);

    return false;
  }
}