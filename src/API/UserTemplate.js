import {objectToQueryString} from "../../utils.js";

/**
 * User Template API Wrapper
 * @class UserTemplate
 * @type {UserTemplate}
 * @memberof Marzban
 * @alias userTemplate
 * @constructor
 * @instance
 */

class UserTemplate {
  constructor(axiosInstance) {
    this.axios = axiosInstance;
  }

  /**
   * Get User Templates
   * @param {{offset: number, limit: number}} parameters
   * @returns {Promise<*>}
   */
  list(parameters) {
    return this.axios.get(`/api/user_template?${objectToQueryString(parameters)}`);
  }

  /**
   * Get User Template
   * @param {Number} id
   * @returns {Promise<*>}
   */
  get(id) {
    return this.axios.get(`/api/user_template/${id}`);
  }

  /**
   * Add User Template
   * @param {Object} data
   * @returns {Promise<*>}
   */
  add(data) {
    return this.axios.post('/api/user_template', data);
  }

  /**
   * Modify User Template
   * @param {Number} id
   * @param {Object} data
   * @returns {Promise<*>}
   */
  edit(id, data) {
    return this.axios.put(`/api/user_template/${id}`, data);
  }

  /**
   * Remove User Template
   * @param {Number} id
   * @returns {Promise<*>}
   */
  delete(id) {
    return this.axios.delete(`/api/user_template/${id}`);
  }
}

export {UserTemplate};