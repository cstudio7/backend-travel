"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _response = _interopRequireDefault(require("../helpers/response.helper"));

var _user = _interopRequireDefault(require("../services/user.service"));

/**
 *
 * @param {Object} req req
 * @param {Object} res res
 * @param {Object} next ment
 * @returns {Object} hghfgjh
 */
var verifyAdmin = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var user, role;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _user["default"].findUserByEmail(req.user.email);

          case 2:
            user = _context.sent;
            role = user.role.toLowerCase();

            if (!(role !== 'admin')) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", _response["default"].errorMessage(res, 'You can not perform this Action', 401, 'error'));

          case 6:
            return _context.abrupt("return", next());

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function verifyAdmin(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

var _default = verifyAdmin;
exports["default"] = _default;