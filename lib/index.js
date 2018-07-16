'use strict';

/**
 * ellipsisify
 * @param {string} str The string you need to cut off
 * @param {number} cutoff The position on which you want to cut off
 * @param {number} remain The amount of characters that should remain after the ellipsis
 * @param {string} [ellipsis='...'] The string to add to the end
 * @returns {string} ellipsisified string
 */
function ellipsisify(str, cutoff, remain, ellipsis = '...') {
  if (str.length <= cutoff) return str;
  if (!cutoff || cutoff + remain >= str.length) return str;
  if (!remain) return `${str.substr(0, cutoff)}${ellipsis}`;

  return (
    `${str.substr(0, cutoff)}${ellipsis}${str.substr(str.length - remain)}`
  );
}

module.exports = ellipsisify;
