"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _passport = _interopRequireDefault(require("passport"));

var _user = _interopRequireDefault(require("../controllers/user.controller"));

var _validate = _interopRequireDefault(require("../helpers/validate.helper"));

var _auth = _interopRequireDefault(require("../middlewares/auth.middleware"));

var _validate2 = _interopRequireDefault(require("../middlewares/validate.middleware"));

var _verifyToken = _interopRequireDefault(require("../middlewares/verify.token.middleware"));

var _verifyUser = _interopRequireDefault(require("../middlewares/verify.user.middleware"));

require("../config/passport.config");

var router = _express["default"].Router();
/**
 * @swagger
 *
 * /auth/signin:
 *   post:
 *     security: []
 *     summary: User SignIn
 *     description: Logs in an existing User
 *     tags:
 *       - Users
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
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
 *                   firstName:
 *                     type: string
 *                   lastName:
 *                     type: string
 *                   token:
 *                     type: string
 *     responses:
 *       200:
 *         description: success
 */


router.post('/signin', _validate["default"].signin(), _validate2["default"], _user["default"].signIn);
/**
 * @swagger
 *
 * /auth/signup:
 *    post:
 *      summary: User can signup
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/user'
 *      responses:
 *        "201":
 *          description: A user schema
 *
 * components:
 *    schemas:
 *      user:
 *        type: object
 *        required:
 *          - firstName
 *          - lastName
 *          - email
 *          - gender
 *          - country
 *          - birthday
 *          - phoneNumber
 *          - password
 *        properties:
 *          firstName:
 *            type: string
 *          lastName:
 *            type: string
 *          email:
 *            type: string
 *            format: email
 *          gender:
 *            type: string
 *          country:
 *            type: string
 *          birthday:
 *            type: string
 *          phoneNumber:
 *            type: string
 *          password:
 *            type: string
 *
 */

router.post('/signup', _validate["default"].signup(), _validate2["default"], _auth["default"], _user["default"].signup);
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User activities
 */

/**
 * @swagger
 *
 * /auth/activate/{authorizations}:
 *   get:
 *     tags:
 *       - Users
 *     name: Activate user
 *     summary: Activate a user
 *     description: Activet user account
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: authorizations
 *         in: path
 *         description: Check token authentication
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: "Successful operation"
 *       400:
 *         description: "Bad request"
 *       401:
 *         description: "Unauthorized"
 *       409:
 *         description: "Conflict"
 *
 */

router.get('/google', _passport["default"].authenticate('google', {
  scope: ['profile', 'email']
}));
router.get('/google/redirect', _passport["default"].authenticate('google', {
  failureRedirect: '/google',
  session: false
}), _user["default"].authGoogleAndFacebook);
router.get('/facebook', _passport["default"].authenticate('facebook', {
  scope: ['email']
}));
router.get('/facebook/redirect', _passport["default"].authenticate('facebook', {
  failureRedirect: '/facebook',
  session: false
}), _user["default"].authGoogleAndFacebook);
router.get('/confirmation/:token', _user["default"].updatedUser);
/**
 * @swagger
 *
 * /auth/logout:
 *    get:
 *      summary: User can reset password
 *      tags: [Users]
 *      parameters:
 *       - name: token
 *         in: header
 *         description: Check token authentication
 *         required: true
 *         type: string
 *      responses:
 *        "201":
 *          description: Reset password schema
 *
 */

router.patch('/logout', _verifyToken["default"].headerToken, _user["default"].logout);
/**
 * @swagger
 *
 * /auth/resetpassword:
 *    patch:
 *      summary: User can reset password
 *      tags: [Users]
 *      parameters:
 *       - name: token
 *         in: header
 *         description: Check token authentication
 *         required: true
 *         type: string
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/reset password'
 *      responses:
 *        "201":
 *          description: Reset password schema
 *
 * components:
 *    schemas:
 *      reset password:
 *        type: object
 *        required:
 *          - password
 *          - confirmPassword
 *        properties:
 *          password:
 *            type: string
 *          confirmPassword:
 *            type: string
 *
 */

router.patch('/resetpassword', _validate["default"].resetPassword(), _validate2["default"], _verifyToken["default"].headerToken, _user["default"].resetPassword);
/**
 * @swagger
 *
 * /auth/forgetpassword:
 *    post:
 *      summary: User can receive an email
 *      tags: [Users]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/forget password'
 *      responses:
 *        "201":
 *          description: A user schema
 *
 * components:
 *    schemas:
 *      forget password:
 *        type: object
 *        required:
 *          - email
 *        properties:
 *          email:
 *            type: string
 *            format: email
 *
 */

router.post('/forgetpassword', _validate["default"].sendResetPasswordLink(), _validate2["default"], _user["default"].sendResetPasswordLink);
router.get('/confirmation:token', _verifyToken["default"], _user["default"].updatedUser);
/**
 * @swagger
 *
 * /auth/profile:
 *  get:
 *    tags:
 *      - Users
 *    summary: Users profile settings
 *    description: Barefoot Nomad User is able to access their Barefoot Nomad profile
 *    operationId: GetUserProfile
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: userEmail
 *        in: token
 *        description: ID of user to return a profile
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

router.get('/profile', _verifyToken["default"].headerToken, _verifyUser["default"], _user["default"].viewProfile);
/**
 * @swagger
 *
 * /auth/profile:
 *  patch:
 *    tags:
 *      - Users
 *    summary: Users profile settings
 *    description: User gets a user profile upon successful registration to Barefoot Nomad
 *      and is able to update/edit
 *    operationId: CreateUserProfile
 *    requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: john
 *               lastName:
 *                 type: string
 *                 example: doe
 *               password:
 *                 type: string
 *                 example: password
 *               gender:
 *                 type: string
 *                 example: male
 *               preferredCurrency:
 *                 type: string
 *                 example: "$"
 *               preferredLanguage:
 *                 type: string
 *                 example: English
 *               department:
 *                 type: string
 *                 example: IT
 *               birthDate:
 *                 type: string
 *                 example: 14/10/1990
 *               address:
 *                 type: string
 *                 example: 14, Jeremiah Ugwu, Lekki, Lagos
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: header
 *        name: token
 *        description: Returning User To Update users role
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

router.patch('/profile', _verifyToken["default"].headerToken, _verifyUser["default"], _user["default"].editProfile);
var _default = router;
exports["default"] = _default;