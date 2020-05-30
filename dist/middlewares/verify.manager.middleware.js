"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _response = _interopRequireDefault(require("../helpers/response.helper"));

var _user = _interopRequireDefault(require("../services/user.service"));

/**
 * class for verifying if the signerd user is manager
 */
var verifyIfIsManager = /*#__PURE__*/function () {
  function verifyIfIsManager() {
    (0, _classCallCheck2["default"])(this, verifyIfIsManager);
  }

  (0, _createClass2["default"])(verifyIfIsManager, null, [{
    key: "verifyManager",

    /**
    *
    * @param {Object} req req
    * @param {Object} res res
    * @param {Object} next ment
    * @returns {Object} object
    */
    value: function () {
      var _verifyManager = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
        var user;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _user["default"].findUserByEmail(req.user.email);

              case 2:
                user = _context.sent;

                if (!(user.role === 'requester' || user.role === null)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", _response["default"].errorMessage(res, 'You are not authorised to perform this task', 401, 'error'));

              case 5:
                req.manager = user;
                return _context.abrupt("return", next());

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function verifyManager(_x, _x2, _x3) {
        return _verifyManager.apply(this, arguments);
      }

      return verifyManager;
    }()
  }]);
  return verifyIfIsManager;
}();

var _default = verifyIfIsManager;
exports["default"] = _default;