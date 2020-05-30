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

var _Decryptor = _interopRequireDefault(require("../helpers/Decryptor"));

var _token = _interopRequireDefault(require("../helpers/token.helper"));

var checkEmailpassword = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var user, status, _status, isverifiedTrue, _status2, token;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _user["default"].findUserByEmail(req.body.email);

          case 2:
            user = _context.sent;

            if (!(user == null)) {
              _context.next = 6;
              break;
            }

            status = 404;
            return _context.abrupt("return", _response["default"].errorMessage(res, 'User is not found', status));

          case 6:
            if ((0, _Decryptor["default"])(req.body.password, user.password)) {
              _context.next = 9;
              break;
            }

            _status = 404;
            return _context.abrupt("return", _response["default"].errorMessage(res, 'Email or password does not match', _status));

          case 9:
            isverifiedTrue = user.isVerified;

            if (isverifiedTrue) {
              _context.next = 13;
              break;
            }

            _status2 = 401;
            return _context.abrupt("return", _response["default"].errorMessage(res, 'User Is Not Verified, Please verify the User First', _status2));

          case 13:
            token = (0, _token["default"])({
              email: req.body.email,
              isVerified: user.isVerified,
              id: user.id,
              role: user.role
            });
            _context.next = 16;
            return _user["default"].updateUser(req.body.email, {
              token: token
            });

          case 16:
            return _context.abrupt("return", _response["default"].successMessage(res, 'user has logged in successfully', 200, token));

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function checkEmailpassword(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = checkEmailpassword;
exports["default"] = _default;