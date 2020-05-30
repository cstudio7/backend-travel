"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _userManager = _interopRequireDefault(require("../middlewares/user-manager.middleware"));

var _user = _interopRequireDefault(require("../controllers/user.controller"));

var _verifyToken = _interopRequireDefault(require("../middlewares/verify.token.middleware"));

var _adminVerify = _interopRequireDefault(require("../middlewares/admin.verify.middleware"));

var _verifyUser = _interopRequireDefault(require("../middlewares/verify.user.middleware"));

var router = _express["default"].Router();
/**
 * @swagger
 *
 * /user-managements:
 *    get:
 *      summary: Get all users with their managers
 *      tags: [User Management]
 *      parameters:
 *       - in: header
 *         name: token
 *         description: token of the admin
 *         required: true
 *         type: string
 *       - in: query
 *         name: page
 *         description: page number
 *         required: true
 *         type: string
 *       - in: query
 *         name: limit
 *         description: limit of rows retrieved
 *         required: true
 *         type: string
 *      responses:
 *       200:
 *         description: "Successful operation"
 *       400:
 *         description: "Bad request"
 *       401:
 *         description: "Unauthorized"
 *       409:
 *         description: "Conflict"
 *
 * */


router.get('/', _verifyToken["default"].headerToken, _verifyUser["default"], _adminVerify["default"], _user["default"].getUsersWithManagers);
/**
 * @swagger
 *
 * /user-managements/managers:
 *    get:
 *      summary: Get all managers
 *      tags: [User Management]
 *      parameters:
 *       - in: header
 *         name: token
 *         description: token of the admin
 *         required: true
 *         type: string
 *      responses:
 *       200:
 *         description: "Successful operation"
 *       400:
 *         description: "Bad request"
 *       401:
 *         description: "Unauthorized"
 *       409:
 *         description: "Conflict"
 *
 * */

router.get('/managers', _verifyToken["default"].headerToken, _verifyUser["default"], _adminVerify["default"], _user["default"].getAllManagers);
/**
 * @swagger
 *
 * /user-managements/users/{userId}:
 *   patch:
 *     summary: User managements
 *     description: Admin assign user to managers
 *     tags:
 *       - User Management
 *     parameters:
 *      - in: header
 *        name: token
 *        description: token of the admin
 *        required: true
 *        type: string
 *      - in: path
 *        name: userId
 *        description: useri d to assign a manager
 *        required: true
 *        type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               managerId:
 *                 type: number
 *     produces:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *               message:
 *                 type: string
 *               data:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   userId:
 *                     type: number
 *                   managerId:
 *                     type: number
 *     responses:
 *       200:
 *         description: success
 *       400:
 *         description: error
 */

router.patch('/users/:userId', _verifyToken["default"].headerToken, _verifyUser["default"], _adminVerify["default"], _userManager["default"].checkIfUserExistAndNotAdmin, _userManager["default"].checkIfManagerExist, _user["default"].assignUserToManager);
var _default = router;
exports["default"] = _default;