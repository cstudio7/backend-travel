"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
*  this will  help to separate and display data in discrete pages when are many
* @param {Object} page which includes
* @param {Object} limit number of results returned in a SQL statement
* @returns {Object} return offset
*/
var Paginate = function Paginate(page, limit) {
  var verifiedPage = !Number(page) || page <= 1 ? 1 : page;
  var offset = limit * (verifiedPage - 1);
  return offset;
};

var _default = Paginate;
exports["default"] = _default;