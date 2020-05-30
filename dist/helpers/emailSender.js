"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mail = _interopRequireDefault(require("@sendgrid/mail"));

var _dotenv = require("dotenv");

(0, _dotenv.config)();
/**
 * Send email when passed with the receiver email
 * html as the html content to be sent as the mail content
 * @param {String} userEmail The reciver's email
 * @param {String} emailSubject The subject of the email
 * @param {String} html The email's content in html format
 * @returns {boolean} return value is a promise
 * returns true if email is successfully sent else it returns false
 */

var sendMail = function sendMail(userEmail, emailSubject, html) {
  _mail["default"].setApiKey(process.env.SENDGRID_API_KEY);

  var message = {
    to: userEmail,
    from: 'no-reply@authorshaven.com',
    subject: emailSubject,
    text: 'Travel App',
    html: "<div>".concat(html, "</div>")
  };
  return _mail["default"].send(message).then(function () {
    var mailSent = {
      status: 200,
      message: 'Email successfully sent'
    };
    return mailSent;
  })["catch"](function () {
    var errorMessage = {
      status: 400,
      error: 'Unable to send email'
    };
    return errorMessage;
  });
};

var _default = sendMail;
exports["default"] = _default;