"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("../controllers/user.controller"));

var _verifyToken = _interopRequireDefault(require("../middlewares/verify.token.middleware"));

var _adminVerify = _interopRequireDefault(require("../middlewares/admin.verify.middleware"));

var _verifyUser = _interopRequireDefault(require("../middlewares/verify.user.middleware"));

var _chat = _interopRequireDefault(require("../controllers/chat.controller"));

var router = _express["default"].Router();
/**
 * @swagger
 *
 * /users/:userId/settings:
 *  patch:
 *    tags:
 *      - Users
 *    summary: Admin Can Update User Role And Permission
 *    description: Admin Update User Role by his Email to Barefoot Nomad
 *      and send data after updating
 *    operationId: UpdateUserRole
 *    requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               role:
 *                 type: string
 *               email:
 *                 type: string
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: header
 *        name: token
 *        description: Returning User To Update users role
 *        required: true
 *        type: string
 *        format: int64
 *      - in: path
 *        name: userId
 *        description: User Id that will update role
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


router.patch('/:userId/settings', _verifyToken["default"].headerToken, _verifyUser["default"], _adminVerify["default"], _user["default"].updateRole);
router.get('/', _verifyToken["default"].headerToken, _verifyUser["default"], _adminVerify["default"], _user["default"].getUsers);
/**
 * @swagger
 *
 * /users/messages:
 *  get:
 *    tags:
 *      - Users
 *    summary: user can get list of all users and their online status
 *    description: User check
 *    operationId: Get All Messages From All Users
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: header
 *        name: token
 *        description: Returning User Who what to get All Chat messages
 *        required: true
 *        type: string
 *        format: int64
 *    responses:
 *      '200':
 *        description: successful operation
 *      '404':
 *        description: Unsuccessful User not found
 *      '500':
 *        description: Internal Server error
 * */

router.get('/messages', _verifyToken["default"].headerToken, _verifyUser["default"], _chat["default"].getAllUsers);
var _default = router;
exports["default"] = _default;