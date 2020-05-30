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

var _models = _interopRequireDefault(require("../database/models"));

var _Queries = _interopRequireDefault(require("./Queries"));

var _response = _interopRequireDefault(require("../helpers/response.helper"));

var _paginate = _interopRequireDefault(require("../helpers/paginate.helper"));

/**
 * This class will provide all service ralated
 * with comment
 */
var CommentServices = /*#__PURE__*/function () {
  function CommentServices() {
    (0, _classCallCheck2["default"])(this, CommentServices);
  }

  (0, _createClass2["default"])(CommentServices, null, [{
    key: "createComment",

    /**
      * This method will help to create
      * a comment
      * @param { Object } req request data
      * @param { Object } res response
      * @param {String} subjectType subjectId
      * @returns {array} data that was created
      */
    value: function () {
      var _createComment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, subjectType) {
        var body, data;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                body = {
                  subjectId: req.params.subjectID,
                  subjectType: subjectType,
                  commentorId: req.user.id,
                  comment: req.body.comment
                };
                _context.next = 3;
                return _Queries["default"].create(_models["default"].comment, body);

              case 3:
                data = _context.sent;

                if (!(subjectType === 'trip request')) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return", data);

              case 6:
                return _context.abrupt("return", _response["default"].successMessage(res, 'comment created successfuly', 201, data));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createComment(_x, _x2, _x3) {
        return _createComment.apply(this, arguments);
      }

      return createComment;
    }()
    /**
     * This method will help to search all comments
     * @param {object} req request
     * @param { Object } res response
     * @param { Object } subjectType response
     * @returns { Object } all information needed
     */

  }, {
    key: "getAllCommets",
    value: function () {
      var _getAllCommets = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, subjectType) {
        var subjectId, _req$query, page, limit, limitNumber, offset, results;

        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                subjectId = req.params.subjectID;
                _req$query = req.query, page = _req$query.page, limit = _req$query.limit;
                limitNumber = /[0-9]/g.test(limit) ? limit : 10;
                offset = (0, _paginate["default"])(page, limitNumber);
                _context2.next = 6;
                return _Queries["default"].commentsPaginationSearch(_models["default"].comment, {
                  subjectId: subjectId,
                  subjectType: subjectType
                }, limitNumber, offset);

              case 6:
                results = _context2.sent;

                if (!(results.rows.length > 0)) {
                  _context2.next = 9;
                  break;
                }

                return _context2.abrupt("return", _response["default"].successMessage(res, 'success', 200, results));

              case 9:
                return _context2.abrupt("return", _response["default"].errorMessage(res, 'No comment yet', 204));

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getAllCommets(_x4, _x5, _x6) {
        return _getAllCommets.apply(this, arguments);
      }

      return getAllCommets;
    }()
    /**
      * This servise delete a comment
      * @param {Object} req request
      * @param {Object} res response
      * @returns { Object } user response as object
      */

  }, {
    key: "deleteComment",
    value: function () {
      var _deleteComment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
        var id, subjectId;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = parseInt(req.params.commentID, 10);
                subjectId = req.params.subjectID;
                _context3.next = 4;
                return _Queries["default"].deleteComment(_models["default"].comment, {
                  subjectId: subjectId,
                  id: id
                });

              case 4:
                return _context3.abrupt("return", _response["default"].successMessage(res, 'Comment has been successfuly deleted', 200));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function deleteComment(_x7, _x8) {
        return _deleteComment.apply(this, arguments);
      }

      return deleteComment;
    }()
  }]);
  return CommentServices;
}();

var _default = CommentServices;
exports["default"] = _default;