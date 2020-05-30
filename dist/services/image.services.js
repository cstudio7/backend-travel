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

var _Queries = _interopRequireDefault(require("./Queries"));

var _models = _interopRequireDefault(require("../database/models"));

/** */
var Image = /*#__PURE__*/function () {
  function Image() {
    (0, _classCallCheck2["default"])(this, Image);
  }

  (0, _createClass2["default"])(Image, null, [{
    key: "saveImage",

    /**
       * save an image
       * @param { Object } newImage contains imageUrl and recordId
       * @returns {array} data the data to be returned.
       */
    value: function () {
      var _saveImage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(newImage) {
        var condition;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                condition = {
                  imageUrl: newImage.imageUrl,
                  recordId: newImage.recordId,
                  imageType: newImage.imageType
                };
                return _context.abrupt("return", _Queries["default"].findOrCreate(_models["default"].image, newImage, condition));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function saveImage(_x) {
        return _saveImage.apply(this, arguments);
      }

      return saveImage;
    }()
    /**
       * find an accomodation Image
       * @param { Integer } accomodationId image accomodationId
       * @returns {array} data the data to be returned.
       */

  }, {
    key: "findImages",
    value: function () {
      var _findImages = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(accomodationId) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", _Queries["default"].findAllRecord(_models["default"].image, {
                  recordId: accomodationId
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function findImages(_x2) {
        return _findImages.apply(this, arguments);
      }

      return findImages;
    }()
  }]);
  return Image;
}();

var _default = Image;
exports["default"] = _default;