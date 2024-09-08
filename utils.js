/**
 * Convert object to query string
 * @param params
 * @returns {string}
 * @private
 */
function objectToQueryString(params = {}) {
  return Object.keys(params)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
    .join('&');
}

export {objectToQueryString};