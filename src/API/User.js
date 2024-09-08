import {objectToQueryString} from "../../utils.js";

/**
 * User API Wrapper
 * @class User
 * @type {User}
 * @memberof Marzban
 * @alias user
 * @instance
 * @constructor
 */

class User {
  constructor(axiosInstance) {
    this.axios = axiosInstance;
  }

  /**
   * Add User
   * @param {Object} data
   * @returns {Promise<*>}
   */
  add(data) {
    return this.axios.post('/api/user', data);
  }

  /**
   * Get User
   * @param {String} username
   * @returns {Promise<*>}
   */
  get(username) {
    return this.axios.get(`/api/user/${username}`);
  }

  /**
   * Modify User
   * @param {String} username
   * @param {Object} data
   * @returns {Promise<*>}
   */
  edit(username, data) {
    return this.axios.put(`/api/user/${username}`, data);
  }

  /**
   * Remove User
   * @param {String} username
   * @returns {Promise<*>}
   */
  delete(username) {
    return this.axios.delete(`/api/user/${username}`);
  }

  /**
   * Renew User Data Usage
   * @param {String} username
   * @returns {Promise<*>}
   */
  resetDataUsage(username){
    return this.axios.post(`/api/user/${username}/reset`);
  }

  /**
   * Revoke users subscription (Subscription link and proxies)
   * @param {String} username
   * @returns {Promise<*>}
   */
  revokeSub(username) {
    return this.axios.post(`/api/user/${username}/revoke_sub`);
  }

  /**
   * Get User Usage
   * @param {String} username
   * @param {{start: string, end: string}} parameters
   * @returns {Promise<*>}
   */
  getUsage(username, parameters) {
    return this.axios.get(`/api/user/${username}/usage?${objectToQueryString(parameters)}`);
  }

  /**
   * Set Owner
   * @param {String} username
   * @param {String} admin_username
   * @returns {Promise<*>}
   */
  setOwner(username, admin_username) {
    return this.axios.post(`/api/user/${username}/?admin_username=${admin_username}`);
  }

  /**
   * Get all users
   * @param {{offset: number, limit: number, username: array, search: string, admin: array, status: string, sort: string}} parameters
   * @returns {Promise<*>}
   */
  list(parameters) {
    return this.axios.get(`/api/users?${objectToQueryString(parameters)}`);
  }

  /**
   * Reset all users data usage
   * @returns {Promise<*>}
   */
  resetUsersUsage() {
    return this.axios.post('/api/users/reset');
  }

  /**
   * Get users who has expired
   * @param {{expired_before: string, expired_after: string}} parameters
   * @returns {Promise<*>}
   */
  getExpired(parameters) {
    return this.axios.get(`/api/users/expired?${objectToQueryString(parameters)}`);
  }

  /**
   * Delete users who has expired
   * @param {{expired_before: string, expired_after: string}} parameters
   * @returns {Promise<*>}
   */
  deleteExpired(parameters) {
    return this.axios.delete(`/api/users/expired?${objectToQueryString(parameters)}`);
  }
}

export {User};