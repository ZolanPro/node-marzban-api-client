import {objectToQueryString} from "../utils.js";

/**
 * Admin API Wrapper
 * @class Admin
 * @type {Admin}
 * @memberof Marzban
 * @alias admin
 * @instance
 * @constructor
 */

class Admin {
  constructor(axiosInstance) {
    this.axios = axiosInstance;
  }

  /**
   * @param {String} username
   * @param {String} password
   * @param {{grant_type:string, scope: string, cliend_id: string, client_secret: string}} parameters
   * @returns {Promise<*>}
   */
  token(username, password, parameters= {}) {
    return this.axios.post('/api/admin/token', {username, password, ...parameters}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
  }

  /**
   * Get Current Admin
   * @returns {Promise<*>}
   */
  get() {
    return this.axios.get('/api/admin');
  }

  /**
   * @method create
   * @description Create Admin
   * @param {Object} data
   * @returns {Promise<*>}
   */
  create(data) {
    return this.axios.post('/api/admin', data);
  }

  /**
   * Modify Admin
   * @param {String} username
   * @param {Object} data
   * @returns {Promise<*>}
   */
  edit(username, data) {
    return this.axios.put(`/api/admin/${username}`, data);
  }

  /**
   * Remove Admin
   * @param {String} username
   * @returns {Promise<*>}
   */
  delete(username) {
    return this.axios.delete(`/api/admin/${username}`);
  }

  /**
   * Get Admins
   * @param {{offset: number, limit: number, username: string}} parameters
   * @returns {Promise<*>}
   */
  getAdmins(parameters) {
    return this.axios.get(`/api/admin?${objectToQueryString(parameters)}`);
  }
}
export {Admin};