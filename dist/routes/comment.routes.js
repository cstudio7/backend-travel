"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _trip = _interopRequireDefault(require("../controllers/trip.controller"));

var _commentValidation = _interopRequireDefault(require("../middlewares/comment.validation.middleware"));

var _verifyToken = _interopRequireDefault(require("../middlewares/verify.token.middleware"));

var _validate = _interopRequireDefault(require("../helpers/validate.helper"));

var _validate2 = _interopRequireDefault(require("../middlewares/validate.middleware"));

var router = _express["default"].Router();
/**
 * @swagger
 * tags:
 *   name: comment
 *   description: Trips activities
 */

/**
 * @swagger
 *
 * /trip-requests/{subjectID}/comments:
 *    post:
 *      summary: user and manager can comment to the trip request
 *      tags: [comment]
 *      parameters:
 *       - name: token
 *         in: header
 *         description: Check token authentication
 *         required: true
 *         type: string
 *       - name: subjectID
 *         in: path
 *         description: trip request ID
 *         required: true
 *         type: string
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/tripRequestcomment'
 *      responses:
 *        "201":
 *          description: trip request comment schema
 *
 * components:
 *    schemas:
 *      tripRequestcomment:
 *        type: object
 *        required:
 *          - comment
 *        properties:
 *          comment:
 *            type: string
 */


router.post('/:subjectID/comments', _verifyToken["default"].headerToken, _validate["default"].CommentValidation(), _validate2["default"], _commentValidation["default"].validateUserAndSubjectRelationships, _trip["default"].createComment);
/**
 * @swagger
 * tags:
 *   name: comment
 *   description: Trips activities
 */

/**
 * @swagger
 *
 * /trip-requests/{subjectID}/comments:
 *    get:
 *      summary: user and manager can view the trip request comment of
 *      tags: [comment]
 *      parameters:
 *       - name: token
 *         in: header
 *         description: Check token authentication
 *         required: true
 *         type: string
 *       - name: subjectID
 *         in: path
 *         description: trip request ID
 *         required: true
 *         type: string
 *       - name: page
 *         in: query
 *         schema:
 *           type: integer
 *         description: page
 *       - name: limit
 *         in: query
 *         schema:
 *           type: integer
 *         description: limit number
 *         required: true
 *      responses:
 *        "200":
 *          description: trip request comment schema
 */

router.get('/:subjectID/comments', _verifyToken["default"].headerToken, _commentValidation["default"].validateUserAndSubjectRelationships, _trip["default"].getAllComments);
/**
 * @swagger
 *
 * /trip-requests/{subjectID}/comments/{commentID}:
 *    delete:
 *      summary: user and manager can delete the trip request comment
 *      tags: [comment]
 *      parameters:
 *       - name: token
 *         in: header
 *         description: Check token authentication
 *         required: true
 *         type: string
 *       - name: subjectID
 *         in: path
 *         description: subject ID
 *         required: true
 *         type: string
 *       - name: commentID
 *         in: path
 *         description: comment ID
 *         required: true
 *         type: integer
 *      responses:
 *        "200":
 *          description: trip request comment schema
 */

router["delete"]('/:subjectID/comments/:commentID', _verifyToken["default"].headerToken, _commentValidation["default"].deleteCommentValidation, _trip["default"].deleteComment);
var _default = router;
exports["default"] = _default;