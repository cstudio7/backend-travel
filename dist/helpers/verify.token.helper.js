"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _response = _interopRequireDefault(require("./response.helper"));

var _user = _interopRequireDefault(require("../services/user.service"));

var verifyAllTokens = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next, token) {
    var decodedToken, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (token) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", _response["default"].errorMessage(res, 'No token provided, Access Denied!', 401));

          case 2:
            _context.prev = 2;
            decodedToken = _jsonwebtoken["default"].verify(token, process.env.JWT_KEY);
            _context.next = 6;
            return _user["default"].findUserByEmail(decodedToken.payload.email);

          case 6:
            user = _context.sent;
            decodedToken.token = token;

            if (!(user === undefined)) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", _response["default"].errorMessage(res, 'You provided the invalid token!', 401));

          case 10:
            if (!(user.token !== token && user.token === null)) {
              _context.next = 12;
              break;
            }

            return _context.abrupt("return", _response["default"].successMessage(res, 'You need to signin first!', 401));

          case 12:
            req.user = user;
            return _context.abrupt("return", next());

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](2);

            _response["default"].errorMessage(res, _context.t0.message, 401);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 16]]);
  }));

  return function verifyAllTokens(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

var _default = verifyAllTokens;
exports["default"] = _default;