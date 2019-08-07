'use strict';
/**
 * ellipsisify
 * @param {string} str The string you need to cut off
 * @param {number} cutoff The position on which you want to cut off
 * @param {number} remain The amount of characters that should remain after the ellipsis
 * @param {string} [ellipsis='...'] The string to add to the end
 * @returns {string} ellipsisified string
 */

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ellipsisify(str, cutoff, remain) {
  var ellipsis = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '...';

  var inputType = _typeof(str);

  if (inputType !== 'string') {
    throw new TypeError("Expected type of input to be `string` but received `".concat(inputType, "`"));
  }

  if (str.length <= cutoff) return str;
  if (!cutoff || cutoff + remain >= str.length) return str;
  if (!remain) return "".concat(str.substr(0, cutoff)).concat(ellipsis);
  return "".concat(str.substr(0, cutoff)).concat(ellipsis).concat(str.substr(str.length - remain));
}

module.exports = ellipsisify;
