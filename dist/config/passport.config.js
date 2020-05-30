"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _passportGoogleOauth = require("passport-google-oauth20");

var _dotenv = _interopRequireDefault(require("dotenv"));

var _passport = _interopRequireDefault(require("passport"));

var _passportFacebook = _interopRequireDefault(require("passport-facebook"));

var _user = _interopRequireDefault(require("../controllers/user.controller"));

_dotenv["default"].config();

var _process$env = process.env,
    GOOGLE_CLIENT_ID = _process$env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET = _process$env.GOOGLE_CLIENT_SECRET,
    FACEBOOK_CLIENT_ID = _process$env.FACEBOOK_CLIENT_ID,
    FACEBOOK_CLIENT_SECRET = _process$env.FACEBOOK_CLIENT_SECRET,
    BASE_URL = _process$env.BASE_URL;

_passport["default"].use(new _passportGoogleOauth.Strategy({
  callbackURL: "".concat(BASE_URL, "/api/v1/auth/google/redirect"),
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  googleFields: ['emails', 'firstName', 'lastName']
}, _user["default"].googleAndFacebookPlusAuth));

_passport["default"].use(new _passportFacebook["default"]({
  callbackURL: "".concat(BASE_URL, "/api/v1/auth/facebook/redirect"),
  clientID: FACEBOOK_CLIENT_ID,
  clientSecret: FACEBOOK_CLIENT_SECRET,
  profileFields: ['id', 'displayName', 'first_name', 'last_name', 'email', 'photos']
}, _user["default"].googleAndFacebookPlusAuth));