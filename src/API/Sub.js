import {objectToQueryString} from "../../utils.js";

/**
 * Subscriptions API Wrapper
 * @class Sub
 * @type {Sub}
 * @memberof Marzban
 * @alias sub
 * @instance
 * @constructor
 */

class Sub {
  constructor(axiosInstance) {
    this.axios = axiosInstance;
  }

  /**
   * User Subscription
   * @param {String} token
   * @returns {Promise<*>}
   */
  get(token, parameters) {
    return this.axios.get(`/api/sub/${username}`);
  }

  /**
   * User Subscription Info
   * @param {String} token
   * @returns {Promise<*>}
   */
  getInfo(token) {
    return this.axios.get(`/api/sub/${username}`);
  }

  /**
   * User get usage
   * @param {String} token
   * @param {{start: string, end: string}} parameters
   * @returns {Promise<*>}
   */
  getUsage(token, parameters) {
    return this.axios.get(`/api/sub/${username}/usage?${objectToQueryString(parameters)}`);
  }

  /**
   * User Subscription With Client Type
   * @param {String} token
   * @param {String} client_type
   * @returns {Promise<*>}
   */
  getByClientType(token, client_type) {
    return this.axios.get(`/api/sub/${username}/${client_type}`);
  }
}

export {Sub};