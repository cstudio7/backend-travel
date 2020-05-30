"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _accomodation = _interopRequireDefault(require("../controllers/accomodation.controller"));

var _verifyUser = _interopRequireDefault(require("../middlewares/verify.user.middleware"));

var _verifyToken = _interopRequireDefault(require("../middlewares/verify.token.middleware"));

var _validate = _interopRequireDefault(require("../helpers/validate.helper"));

var _validate2 = _interopRequireDefault(require("../middlewares/validate.middleware"));

var _accomodation2 = _interopRequireDefault(require("../middlewares/accomodation.middleware"));

var _commentValidation = _interopRequireDefault(require("../middlewares/comment.validation.middleware"));

var router = _express["default"].Router();
/**
 * @swagger
 *
 * /accomodation:
 *    post:
 *      summary: Trip-administration can create an accomodation
 *      tags: [Accommodations]
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
 *              $ref: '#/components/schemas/tripRequest'
 *      responses:
 *        "201":
 *          description: accomodation schema
 *
 * components:
 *    schemas:
 *      tripRequest:
 *        type: object
 *        required:
 *          - name
 *          - description
 *          - locationId
 *          - owner
 *          - category
 *          - images
 *          - rooms
 *        properties:
 *          name:
 *            type: string
 *          description:
 *            type: string
 *          locationId:
 *            type: integer
 *          owner:
 *            type: string
 *          category:
 *            type: string
 *          images:
 *            type: array
 *            items:
 *              type: object
 *              properties:
 *                imageUrl:
 *                   type: string
 *          rooms:
 *            type: array
 *            items:
 *              type: object
 *              properties:
 *                nameRoom:
 *                   type: string
 *                typeId:
 *                   type: integer
 *                price:
 *                   type: integer
 *                currency:
 *                   type: string
 *                status:
 *                   type: string
 */


router.post('/', _verifyToken["default"].headerToken, _verifyUser["default"], _accomodation2["default"].verifyTravelAdminAndSupplier, _validate["default"].accomodationValidation(), _validate2["default"], _accomodation["default"].createAccomodation);
router.get('/:accomodationId', _verifyToken["default"].headerToken, _verifyUser["default"], _accomodation["default"].getAccomodation);
router.get('/', _verifyToken["default"].headerToken, _verifyUser["default"], _accomodation2["default"].checkIfRequesterIsAdmin, _accomodation["default"].getAllAccomodation);
router.get('/:accomodationId/rooms', _verifyToken["default"].headerToken, _verifyUser["default"], _accomodation2["default"].checkIfRequesterIsAdmin, _accomodation["default"].getAllRooms);
/**
 * @swagger
 *
 * /booking:
 *    patch:
 *      summary: Book an accommodation
 *      tags: [Accommodation]
 *      parameters:
 *       - name: token
 *         in: header
 *         description: Check authentication
 *         required: true
 *         type: string
 *      responses:
 *        "201":
 *          description: Booking was successfully processed.
 *
 * components:
 *    schemas:
 *      booking:
 *        type: object
 *        required:
 *          - accommodationId
 *          - roomTypeId
 *          - departureDate
 *          - checkoutDate
 *        properties:
 *          userId:
 *            type: integer
 *          accommodationId:
 *            type: integer
 *          roomTypeId:
 *            type: integer
 *          departureDate:
 *            type: string
 *          checkoutDate:
 *            type: string
 */

router.post('/booking', _validate["default"].bookingValidation(), _validate2["default"], _verifyToken["default"].headerToken, _accomodation2["default"].validateDates, _accomodation2["default"].checkBookingFacilitiesAvailability, _accomodation["default"].bookAccommodation);
/**
 * @swagger
 * tags:
 *   name: comment
 *   description: Accommodation activities
 */

/**
 * @swagger
 *
 * /accommodations/{subjectID}/comments:
 *    post:
 *      summary: All users can comment to an Accommodation
 *      tags: [comment]
 *      parameters:
 *       - name: token
 *         in: header
 *         description: Check token authentication
 *         required: true
 *         type: string
 *       - name: subjectID
 *         in: path
 *         description: Accommodation ID
 *         required: true
 *         type: string
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Accommodationcomment'
 *      responses:
 *        "201":
 *          description: Accommodation comment schema
 *
 * components:
 *    schemas:
 *      Accommodationcomment:
 *        type: object
 *        required:
 *          - comment
 *        properties:
 *          comment:
 *            type: string
 */

router.post('/:subjectID/comments', _verifyToken["default"].headerToken, _validate["default"].CommentValidation(), _validate2["default"], _commentValidation["default"].validateSubjectId, _commentValidation["default"].validateSubjectAvailability, _accomodation2["default"].checkIfUserBookedThatAccomodation, _accomodation["default"].createAccomodationComment);
/**
 * @swagger
 * tags:
 *   name: comment
 *   description: Accommodation activities
 */

/**
 * @swagger
 *
 * /accommodations/{subjectID}/comments:
 *    get:
 *      summary: All users can view Accommodation comments of
 *      tags: [comment]
 *      parameters:
 *       - name: token
 *         in: header
 *         description: Check token authentication
 *         required: true
 *         type: string
 *       - name: subjectID
 *         in: path
 *         description: Accommodation ID
 *         required: true
 *         type: string
 *       - name: page
 *         in: query
 *         schema:
 *           type: integer
 *         description: page number
 *       - name: limit
 *         in: query
 *         schema:
 *           type: integer
 *         description: limit number
 *         required: true
 *      responses:
 *        "200":
 *          description: Accommodation comment schema
 */

router.get('/:subjectID/comments', _verifyToken["default"].headerToken, _commentValidation["default"].validateSubjectId, _commentValidation["default"].validateSubjectAvailability, _accomodation["default"].getAccommodationComments);
/**
 * @swagger
 *
 * /accommodations/{subjectID}/comments/{commentID}:
 *    delete:
 *      summary: All users can delete an Accommodation comment
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
 *          description: Accommodation comment schema
 */

router["delete"]('/:subjectID/comments/:commentID', _verifyToken["default"].headerToken, _commentValidation["default"].validateSubjectId, _commentValidation["default"].validateSubjectAvailability, _commentValidation["default"].deleteCommentValidation, _accomodation["default"].deleteAccommodationComment);
/**
 * @swagger
 *
 * /accommodations/{accommodationId}/ratings:
 *    post:
 *      summary: user should be to rate an accommodation
 *      tags: [Accommodations]
 *      parameters:
 *       - name: accomodationId
 *         in: path
 *         description: rate that specific accomodation
 *         required: true
 *         type: string
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
 *              $ref: '#/components/schemas/rate'
 *      responses:
 *        "201":
 *           description: rate create successfully
 *
 * components:
 *    schemas:
 *      rate:
 *        type: object
 *        required:
 *          - rate
 *        properties:
 *          rate:
 *            type: integer
 */

router.post('/:accommodationId/ratings', _verifyToken["default"].headerToken, _verifyUser["default"], _accomodation2["default"].checkValidAccomodationRates, _accomodation2["default"].checkIfUserBookedThatAccomodation, _accomodation["default"].rateAccomodation);
/**
 * @swagger
 *
 * /accommodations/{accommodationId}/ratings:
 *    patch:
 *      summary: user should be to update accommodation rate
 *      tags: [Accommodations]
 *      parameters:
 *       - name: accomodationId
 *         in: path
 *         description: rate that specific accomodation
 *         required: true
 *         type: string
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
 *              $ref: '#/components/schemas/rate'
 *      responses:
 *        "200":
 *           description: rate updated successfully
 *
 * components:
 *    schemas:
 *      rate:
 *        type: object
 *        required:
 *          - rate
 *        properties:
 *          rate:
 *            type: integer
 */

router.patch('/:subjectID/ratings', _verifyToken["default"].headerToken, _verifyUser["default"], _accomodation2["default"].checkValidAccomodationRates, _accomodation2["default"].checkIfUserBookedThatAccomodation, _accomodation["default"].updateAccomodationRate);
/**
 * @swagger
 *
 * /accommodations/{subjectID}/ratings:
 *    get:
 *      summary: user should get rate of an accommodation
 *      tags: [Accommodations]
 *      parameters:
 *       - name: accomodationId
 *         in: path
 *         description: id of the accommodation
 *         required: true
 *         type: string
 *       - name: token
 *         in: header
 *         description: Check token authentication
 *         required: true
 *         type: string
 *      responses:
 *        "200":
 *           description: get rate successfully
 */

router.get('/:accommodationId/ratings', _verifyToken["default"].headerToken, _verifyUser["default"], _accomodation["default"].getAccommodationRate);
/**
 * @swagger
 *
 * /accommodations/{accommodationId}/average-ratings:
 *    get:
 *      summary: user should get average rate of an accommodation
 *      tags: [Accommodations]
 *      parameters:
 *       - name: accomodationId
 *         in: path
 *         description: id of the accommodation
 *         required: true
 *         type: string
 *       - name: token
 *         in: header
 *         description: Check token authentication
 *         required: true
 *         type: string
 *      responses:
 *        "200":
 *           description: get average rate successfully
 */

router.get('/:accommodationId/average-ratings', _verifyToken["default"].headerToken, _verifyUser["default"], _accomodation2["default"].checkIfAccommodationIdExist, _accomodation["default"].getAverageRatings);
/**
 * @swagger
 *
 * /accommodation/accommodationID:
 *    patch:
 *      summary: Like or unlike an accommodation
 *      tags: [Accommodation]
 *      parameters:
 *       - name: token
 *         in: header
 *         description: Check authentication
 *         required: true
 *         type: string
 *      responses:
 *        "200":
 *          description: Like was successfully processed.
 */

router.patch('/:accommodationId', _validate["default"].likeOrUnlikeValidation(), _validate2["default"], _verifyToken["default"].headerToken, _accomodation["default"].likeOrUnlike);
/**
 * @swagger
 *
 * /accommodation/accommodationID/like-status:
 *    get:
 *      summary: Check if user has already like or unlike an accommodation
 *      tags: [Accommodation]
 *      parameters:
 *       - name: token
 *         in: header
 *         description: Check authentication
 *         required: true
 *         type: string
 *      responses:
 *        "200":
 *          description: Check if user has already like or unlike an accommodation.
 */

router.get('/:accommodationId/like-status', _validate2["default"], _verifyToken["default"].headerToken, _accomodation["default"].checkIfUserLikedOrUnlikedAccommodation);
router.get('/located/:userDestination', _verifyToken["default"].headerToken, _accomodation["default"].getAccomodationsByDestination);
var _default = router;
exports["default"] = _default;