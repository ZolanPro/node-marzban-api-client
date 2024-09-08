import {objectToQueryString} from "../utils.js";

/**
 * Node API Wrapper
 * @class Node
 * @type {Node}
 * @memberof Marzban
 * @alias node
 * @instance
 * @constructor
 */

class Node {
  constructor(axiosInstance) {
    this.axios = axiosInstance;
  }

  /**
   * Get Node Settings
   * @returns {Promise<*>}
   */
  getSettings() {
    return this.axios.get('/api/node/settings');
  }

  /**
   * Add Node
   * @param {Object} data
   * @returns {Promise<*>}
   */
  add(data) {
    return this.axios.post('/api/node', data);
  }

  /**
   * Get Node
   * @param {Number} node_id
   * @returns {Promise<*>}
   */
  get(node_id) {
    return this.axios.get(`/api/node/${node_id}`);
  }

  /**
   * Modify Node
   * @param {Number} node_id
   * @param {Object} data
   * @returns {Promise<*>}
   */
  edit(node_id, data) {
    return this.axios.put(`/api/node/${node_id}`, data);
  }

  /**
   * Remove Node
   * @param {Number} node_id
   * @returns {Promise<*>}
   */
  delete(node_id) {
    return this.axios.delete(`/api/node/${node_id}`);
  }

  /**
   * Reconnect Node
   * @param {Number} node_id
   * @returns {Promise<*>}
   */
  reconnect(node_id) {
    return this.axios.post(`/api/node/${node_id}/reconnect`);
  }

  /**
   * Get Nodes
   * @returns {Promise<*>}
   */
  getNodes() {
    return this.axios.get('/api/nodes');
  }

  /**
   * Get Usage
   * @param {{start: string, end: string}} parameters
   * @returns {Promise<*>}
   */
  getUsage(parameters) {
    return this.axios.get(`/api/nodes/usage?${objectToQueryString(parameters)}`);
  }
}

export {Node};