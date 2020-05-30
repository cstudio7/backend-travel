"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _verifyToken = _interopRequireDefault(require("../middlewares/verify.token.middleware"));

var _chat = _interopRequireDefault(require("../controllers/chat.controller"));

var _verifyUser = _interopRequireDefault(require("../middlewares/verify.user.middleware"));

var router = _express["default"].Router();
/**
 * @swagger
 *
 * /messages:
 *  get:
 *    tags:
 *      - Chat
 *    summary: Get Public and Private Messages
 *    description: User check
 *    operationId: Get All Messages From All Users
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: header
 *        name: token
 *        description: Returning User To Who what to get messages
 *        required: true
 *        type: string
 *        format: int64
 *      - in: path
 *        name: userId
 *        description: User Id
 *        required: true
 *        type: integer
 *    responses:
 *      '200':
 *        description: successful operation
 *      '404':
 *        description: Unsuccessful User not found
 *      '500':
 *        description: Internal Server error
 * */


router.get('/:userId', _verifyToken["default"].headerToken, _verifyUser["default"], _chat["default"].getMessages);
router.get('/', _verifyToken["default"].headerToken, _verifyUser["default"], _chat["default"].getMessages);
var _default = router;
exports["default"] = _default;