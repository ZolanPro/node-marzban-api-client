/**
 * System API Wrapper
 * @class System
 * @type {System}
 * @memberof Marzban
 * @alias system
 * @instance
 * @constructor
 */

class System {
  constructor(axiosInstance) {
    this.axios = axiosInstance;
  }

  /**
   * Get System Stats
   * @returns {Promise<*>}
   */
  get() {
    return this.axios.get('/api/system');
  }

  /**
   * Get Inbounds
   * @returns {Promise<*>}
   */
  getInbounds() {
    return this.axios.get('/api/inbounds');
  }

  /**
   * Get Hosts
   * @returns {Promise<*>}
   */
  getHosts() {
    return this.axios.get('/api/hosts');
  }

  /**
   * Modify Hosts
   * @param data
   * @returns {Promise<*>}
   */
  editHost(data) {
    return this.axios.put('/api/hosts', data);
  }
}

export {System};