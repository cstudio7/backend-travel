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

var _trip = _interopRequireDefault(require("../services/trip.services"));

var _response = _interopRequireDefault(require("../helpers/response.helper"));

var _Queries = _interopRequireDefault(require("../services/Queries"));

var _models = _interopRequireDefault(require("../database/models"));

var _idValidator = _interopRequireDefault(require("../helpers/id.validator.helper"));

/**
 * This class manage all comment
 * validation
 */
var CommentValidation = /*#__PURE__*/function () {
  function CommentValidation() {
    (0, _classCallCheck2["default"])(this, CommentValidation);
  }

  (0, _createClass2["default"])(CommentValidation, null, [{
    key: "validateUserAndSubjectRelationships",

    /**
       * This method validate userID and subjectID
       * @param { Object } req request data
       * @param { Object } res response data
       * @param { Object } next redirect to the next activity
       * @returns { Object } return error message validateRelationships
       */
    value: function () {
      var _validateUserAndSubjectRelationships = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
        var userId, tripID, tripRequestInfo;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                userId = req.user.id;
                tripID = req.params.subjectID;
                _context.next = 4;
                return _trip["default"].searchTripRequestByTripId(tripID);

              case 4:
                tripRequestInfo = _context.sent;

                if (tripRequestInfo) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", _response["default"].errorMessage(res, 'Trip not found', 404));

              case 7:
                if (!(tripRequestInfo.userId === userId || tripRequestInfo.managerId === userId)) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", next());

              case 9:
                return _context.abrupt("return", _response["default"].errorMessage(res, 'You are not authorized for this kind of request', 401));

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function validateUserAndSubjectRelationships(_x, _x2, _x3) {
        return _validateUserAndSubjectRelationships.apply(this, arguments);
      }

      return validateUserAndSubjectRelationships;
    }()
    /**
     * This method validate the availability
     * of accommodation
     * @param {Object} req request
     * @param {Object} res responce
     * @param {Object} next next steps
     * @returns {Object} message
     */

  }, {
    key: "validateSubjectAvailability",
    value: function () {
      var _validateSubjectAvailability = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
        var subjectID, result;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                subjectID = req.params.subjectID;
                _context2.next = 3;
                return _Queries["default"].findOneRecord(_models["default"].accomodation, {
                  id: subjectID
                });

              case 3:
                result = _context2.sent;

                if (result) {
                  _context2.next = 6;
                  break;
                }

                return _context2.abrupt("return", _response["default"].errorMessage(res, 'Accommodation not found', 404));

              case 6:
                return _context2.abrupt("return", next());

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function validateSubjectAvailability(_x4, _x5, _x6) {
        return _validateSubjectAvailability.apply(this, arguments);
      }

      return validateSubjectAvailability;
    }()
    /**
     * This method validate the accommodation id
     * @param {Object} req request
     * @param {Object} res responce
     * @param {Object} next next steps
     * @returns {Object} message
     */

  }, {
    key: "validateSubjectId",
    value: function () {
      var _validateSubjectId = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
        var subjectID;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                subjectID = req.params.subjectID;

                if ((0, _idValidator["default"])(subjectID)) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return", _response["default"].errorMessage(res, 'Accommodation id must be a number', 400));

              case 3:
                return _context3.abrupt("return", next());

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function validateSubjectId(_x7, _x8, _x9) {
        return _validateSubjectId.apply(this, arguments);
      }

      return validateSubjectId;
    }()
    /**
      * This servise validate comment id and the ownership of a comment
      * which is going to be deleted
      * @param {Object} req request
      * @param {Object} res response
       * @param {Object} next next
      * @returns { Object } user response as object
      */

  }, {
    key: "deleteCommentValidation",
    value: function () {
      var _deleteCommentValidation = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
        var id, subjectId, comment;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = parseInt(req.params.commentID, 10);
                subjectId = req.params.subjectID;

                if ((0, _idValidator["default"])(id)) {
                  _context4.next = 4;
                  break;
                }

                return _context4.abrupt("return", _response["default"].errorMessage(res, 'Comment id must be a number', 400));

              case 4:
                _context4.next = 6;
                return _Queries["default"].findOneRecord(_models["default"].comment, {
                  subjectId: subjectId,
                  id: id
                });

              case 6:
                comment = _context4.sent;

                if (comment) {
                  _context4.next = 9;
                  break;
                }

                return _context4.abrupt("return", _response["default"].successMessage(res, 'Comment not found', 204));

              case 9:
                if (!(comment && comment.dataValues.commentorId !== req.user.id)) {
                  _context4.next = 11;
                  break;
                }

                return _context4.abrupt("return", _response["default"].errorMessage(res, 'You are not authorized to delete this comment', 401));

              case 11:
                return _context4.abrupt("return", next());

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function deleteCommentValidation(_x10, _x11, _x12) {
        return _deleteCommentValidation.apply(this, arguments);
      }

      return deleteCommentValidation;
    }()
  }]);
  return CommentValidation;
}();

var _default = CommentValidation;
exports["default"] = _default;