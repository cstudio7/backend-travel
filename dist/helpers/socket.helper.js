"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clients = exports.socketio = void 0;

var _socket = _interopRequireDefault(require("socket.io"));

var _chat = _interopRequireDefault(require("../services/chat.service"));

var clients = new Map();
exports.clients = clients;

var socketio = function socketio(server) {
  var io = (0, _socket["default"])(server);
  io.on('connection', function (socket) {
    socket.on('connect_user', function (userKey) {
      clients.set(userKey, socket);
    });
    socket.on('send_message', function (data) {
      _chat["default"].saveMessage(data);

      if (!data.receiverId) {
        socket.broadcast.emit('receive_message', data);
      }

      var client = clients.get(data.receiverId);
      if (client) client.emit('receive_message', data);
    });
  });
  return io;
};

exports.socketio = socketio;