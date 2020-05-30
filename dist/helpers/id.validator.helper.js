"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var idValidation = function idValidation(id) {
  if (!/[0-9]/g.test(id)) {
    return false;
  }

  return true;
};

var _default = idValidation;
exports["default"] = _default;