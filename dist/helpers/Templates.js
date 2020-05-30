"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * Generate html templates for email notifications
 * @class Templates
 */
var Templates = /*#__PURE__*/function () {
  function Templates() {
    (0, _classCallCheck2["default"])(this, Templates);
  }

  (0, _createClass2["default"])(Templates, null, [{
    key: "forgotPassword",

    /**
     * A method for creating a template for notifying users of request for resetting password
     * @param { string } link - The link to be sent to user email
     * @param { string } user - The name of the user
     * @returns { string } HTML template
     * @memberof Templates
     */
    value: function forgotPassword(link, user) {
      return "\n    <head>\n      <style>\n      body {\n        color: black;\n        width: 100%;\n      }\n      .email {\n        background: #F2F2F2;\n        width: 100%;\n        font-family: sans-serif;\n        height: 100%;\n      }\n      .brand-name {\n        width: 100%;\n      }\n      .brand-name h1{\n        text-align: center;\n        margin: 0;\n        padding: 20px;\n        font-size: 1.5em;\n      }\n      \n      .message {\n        background: white;\n        width: 50%;\n        margin: 0 auto;\n        padding: 50px;\n        border-top: 5px solid #0645F0;\n      }\n      \n      .message-title {\n        text-align: center;\n      }\n      \n      .message-body p{\n        font-size: 18px;\n        color: black;\n      }\n      \n      .message-body a {\n        color: #89CFF0;\n      }\n      \n      .cta {\n        width: 100%;\n        text-align: center;\n        margin: 50px 0 50px 0;\n      }\n      \n      .message .btn {\n        padding: 1rem;\n        background: #0645F0;\n        display: inline-block;\n        min-width: 100px;\n        color: #FFF;\n        outline: none;\n        border: none;\n        font-size: 18px;\n        text-decoration: none;\n      }\n      </style>\n    </head>\n    \n    <div class=\"email\">\n      <div class=\"brand-name\">\n        <h1>Authors' Haven</h1>\n      </div>\n      <div class=\"message\">\n        <div class=\"message-title\">\n          <h1>Reset Your Password</h1>\n        </div>\n        <div class=\"message-body\">\n          <p>Hello ".concat(user, ",</p>\n          <p>Click the button below to reset your password.</p>\n          <p>If you did not request for a new password, you can safely delete this email.</p>\n        <div class=\"cta\">\n          <a class=\"btn\" href=").concat(link, ">Reset Password</a>\n        </div>\n        <p>If the button does not work, copy and paste the link below into your browser.</p>\n        <a href=").concat(link, ">").concat(link, "</a>\n        <p>Authors' Haven Team.</p>\n          </div>\n      </div>\n    </div>\n    ");
    }
    /**
     * A method for creating a template for notifying users after resetting password
     * @param { string } link - The link of the application
     * @param { string } user - The name of the user
     * @returns { string } HTML template
     * @memberof Templates
     */

  }, {
    key: "resetPassword",
    value: function resetPassword(link, user) {
      return "\n    <head>\n    <style>\n    body {\n      color: black;\n    }\n    .email {\n      width: 100%;\n      font-family: sans-serif;\n      height: 100%;\n    }\n    .brand-name {\n      width: 100%;\n    }\n    .brand-name h1{\n      text-align: center;\n      margin: 0;\n      padding: 20px;\n    }\n    .message {\n      background: white;\n      width: 80%;\n      margin: 20px auto;\n      padding: 50px 80px;\n      border-top: 5px solid #0645F0;\n    }\n    .message-body p{\n      font-size: 18px;\n      color: black;\n    }\n    \n    .message-body a {\n      color: #89CFF0;\n    }\n    </style>\n  </head>\n    \n  <div class=\"email\">\n  <div class=\"brand-name\">\n    <h1>Authors' Haven</h1>\n   </div>\n  <div class=\"message\">\n    <div class=\"message-body\">\n      <p>Hello ".concat(user, ",</p>\n      <p>Your password reset was successful. Click this <a href=").concat(link, ">link</a> to login to your account.</p>\n    \n    <p>Authors' Haven Team.</p>\n      </div>\n  </div>\n  </div>\n    ");
    }
    /**
     * this method returns email confirmation
     * template
     * @static
     * @param {string} link
     * @param {srting} email
     * @returns {string} HTML template
     * @memberof Templates
     */

  }, {
    key: "confirmEmail",
    value: function confirmEmail(link, email) {
      var user = email.split('@')[0];
      return "\n    <head>\n      <style>\n      body {\n        color: black;\n        width: 100%;\n      }\n      .email {\n        background: #F2F2F2;\n        width: 100%;\n        font-family: sans-serif;\n        height: 100%;\n      }\n      .brand-name {\n        width: 100%;\n      }\n      .brand-name h1{\n        text-align: center;\n        margin: 0;\n        padding: 20px;\n        font-size: 1.5em;\n      }\n      \n      .message {\n        background: white;\n        width: 50%;\n        margin: 0 auto;\n        padding: 50px;\n        border-top: 5px solid #0645F0;\n      }\n      \n      .message-title {\n        text-align: center;\n      }\n      \n      .message-body p{\n        font-size: 18px;\n        color: black;\n      }\n      \n      .message-body a {\n        color: #89CFF0;\n      }\n      \n      .cta {\n        width: 100%;\n        text-align: center;\n        margin: 50px 0 50px 0;\n      }\n      \n      .message .btn {\n        padding: 1rem;\n        background: #0645F0;\n        display: inline-block;\n        min-width: 100px;\n        color: #FFF;\n        outline: none;\n        border: none;\n        font-size: 18px;\n        text-decoration: none;\n      }\n      </style>\n    </head>\n    \n    <div class=\"email\">\n      <div class=\"brand-name\">\n        <h1>Authors' Haven</h1>\n      </div>\n      <div class=\"message\">\n        <div class=\"message-title\">\n          <h1>Please confirm your email</h1>\n        </div>\n        <div class=\"message-body\">\n          <p>Hello ".concat(user, ",</p>\n          <p>Please click the button bellow to confirm your email</p>\n        <div class=\"cta\">\n          <a class=\"btn\" href=").concat(link, ">Confirm Email</a>\n        </div>\n        <p>If the button does not work, please copy and paste the link below into your browser.</p>\n        <a href=").concat(link, ">").concat(link, "</a>\n        <p>Authors' Haven Team.</p>\n          </div>\n      </div>\n    </div>\n    ");
    }
    /**
     * This method returns template for confirmed email
    * @static
    * @param {string} link
    * @param {string} email
    * @returns {string} html template
    * @memberof Templates
    */

  }, {
    key: "emailConfirmed",
    value: function emailConfirmed(link, email) {
      var user = email.split('@')[0];
      return "\n    <head>\n    <style>\n    body {\n      color: black;\n    }\n    .email {\n      width: 100%;\n      font-family: sans-serif;\n      height: 100%;\n    }\n    .brand-name {\n      width: 100%;\n    }\n    .brand-name h1{\n      text-align: center;\n      margin: 0;\n      padding: 20px;\n    }\n    .message {\n      background: white;\n      width: 80%;\n      margin: 20px auto;\n      padding: 50px 80px;\n      border-top: 5px solid #0645F0;\n    }\n    .message-body p{\n      font-size: 18px;\n      color: black;\n    }\n    \n    .message-body a {\n      color: #89CFF0;\n    }\n    </style>\n  </head>\n    \n  <div class=\"email\">\n  <div class=\"brand-name\">\n    <h1>Authors' Haven</h1>\n   </div>\n  <div class=\"message\">\n    <div class=\"message-body\">\n      <p>Hello ".concat(user, ",</p>\n      <p>You have confirmed your email.Please click on this <a href=").concat(link, ">link</a> to login to your account.</p>\n    \n    <p>Authors' Haven Team.</p>\n      </div>\n  </div>\n  </div>");
    }
    /**
     * A method for creating a template for notifying users after resetting password
     * @param { object } article - The article object to be sent
     * @param { string } url - The url of the created article
     * @param { string } authorName - The name of the author
     * @returns { string } HTML template
     * @memberof Templates
     */

  }, {
    key: "articleNotify",
    value: function articleNotify(article, url, authorName) {
      var title = article.title,
          description = article.description,
          bannerImage = article.bannerImage;
      return "\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n      <meta charset=\"UTF-8\">\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n      <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n      <link href=\"https://fonts.googleapis.com/css?family=Roboto\" rel=\"stylesheet\">\n      <style type=\"text/css\">\n          .email {\n        background: #F2F2F2;\n        width: 100%;\n        font-family: 'Roboto', sans-serif;\n        color: #000000;\n        height: 100%;\n        border : solid\n        }\n      \n        .brand-name h1{\n          text-align: center;\n          margin: 0;\n          padding: 20px;\n        }\n      \n        .message {\n          background: white;\n          width: 50%;\n          margin: 0 auto;\n          padding: 50px;\n          border-top: 5px solid #0645F0;\n        }\n      \n        .message-title {\n          text-align: center;\n        }\n        \n        .message-body p{\n          font-size: 18px;\n        }\n        \n        .message-body a {\n          color: #89CFF0;\n        }\n        \n        .unsubscribe p{\n          font-size: 12px;\n        }\n        \n        .article-snippet {\n          margin-bottom: 10px;\n        }\n        \n        .article-title {\n          margin-bottom: 10px;\n          font-size: 18px;\n          font-weight: bold;\n        }\n      </style>\n    </head>\n    <body>\n      <div class=\"email\">\n    <div class=\"brand-name\">\n      <h1>Authors' Haven</h1>\n     </div>\n    <div class=\"message\">\n      <div class=\"message-title\">\n        <h1>New Article Alert</h1>\n      </div>\n      <div class=\"message-body\">\n        <p>Hello,</p>\n        <p>New Post! ".concat(authorName === null ? 'One of your favorite authors' : authorName, " has just published a new article.</p>\n        <div class=\"article\">\n          <img height=\"200\" width=\"200\" src=").concat(bannerImage, " alt=\"article image\"/>\n          <div class=\"article-title\"><p>").concat(title, "</p></div>\n          <div class=\"article-snippet\"><p>").concat(description, "</p></div>\n          <p>You can view the article by clicking <a href=\"").concat(url, "\">").concat(url, "</a>.</p>\n          <div class=\"unsubscribe\">\n            <p>If you are no longer interested in receiving notifications for new articles, kindly change the settings on your dashboard</p>\n          </div>\n        </div>\n      \n        </div>\n      <p>Authors' Haven Team</p>\n    </div>\n    </div>\n    </body>\n    </html>    \n    ");
    }
  }]);
  return Templates;
}();

var _default = Templates;
exports["default"] = _default;