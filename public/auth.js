"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var createUser = function createUser() {
  var _this = this;

  _classCallCheck(this, createUser);

  this._user = document.querySelector("#user");
  this._password = document.querySelector("#password");
  this._button = document.querySelector("#btnLogin");

  this._button.addEventListener("click", function () {
    firebase.auth().createUserWithEmailAndPassword(_this._user.value, _this._user._password)["catch"](function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("ERRO: ".concat(errorCode, ". ").concat(errorMessage));
    });
  });
};

var admin = new createUser();