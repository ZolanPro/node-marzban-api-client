/**
 * Core API Wrapper
 * @class Core
 * @type {Core}
 * @memberof Marzban
 * @alias core
 * @instance
 * @constructor
 */

class Core {
  constructor(axiosInstance) {
    this.axios = axiosInstance;
  }

  /**
   * Get Core Stats
   * @returns {Promise<*>}
   */
  get() {
    return this.axios.get('/api/core');
  }

  /**
   * Restart Core
   * @returns {Promise<*>}
   */
  restart() {
    return this.axios.post('/api/core/restart');
  }

  /**
   * Get Core Config
   * @returns {Promise<*>}
   */
  getConfig() {
    return this.axios.get('/api/core/config');
  }

  /**
   * Modify Core Config
   * @param {Object} data
   * @returns {Promise<*>}
   */
  editConfig(data) {
    return this.axios.put(`/api/core/config`, data);
  }
}

export {Core};