// Mediator pattern
// A interface for communicating with other objects
// Used for stuff like socket.io and chatrooms etcetera

const User = function (name) {
  this.name = name;
  this.chatroom = null;
};
User.prototype = {
  send: function (message, to) {
    this.chatroom.send(message, this, to);
  },
  receive: function (message, from) {
    console.log(`Received message from ${from.name} to ${this.name}: ${message} `);
  },
};

const Chatroom = function () {
  let users = {}; // List of users

  return {
    register: function (user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function (message, from, to) {
      if (to) {
        //Single receipent
        to.receive(message, from);
      } else {
        // Multiple receipents
        for (key in users) {
          if (users[key] !== from) {
            users[key].receive(message, from);
          }
        }
      }
    },
  };
};

const brad = new User('brad');
const jeff = new User('jef');
const mike = new User('mike');

const chatroom = new Chatroom();

chatroom.register(brad);
chatroom.register(jeff);
chatroom.register(mike);

brad.send('hello jeff', jeff);
mike.send('hey brad', brad);
jeff.send('Hi All');
