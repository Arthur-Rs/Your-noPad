class createUser {
  constructor() {
    this._user = document.querySelector("#user");
    this._password = document.querySelector("#password");
    this._button = document.querySelector("#btnLogin");

    this._button.addEventListener("click", () => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this._user.value, this._user._password)
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(`ERRO: ${errorCode}. ${errorMessage}`);
        });
    });
  }
}

const admin = new createUser();
