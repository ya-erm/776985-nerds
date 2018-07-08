var modal = document.querySelector("#modal-write-us");
var closeButton = document.querySelector("#button-close");
var openButton = document.querySelector("#button-open");

closeButton.addEventListener("click", function () {
  modal.classList.toggle("closed");
});

openButton.addEventListener("click", function () {
  modal.classList.toggle("closed");

  var name = document.querySelector("#user-name");
  var email = document.querySelector("#user-email");
  var text = document.querySelector("#message-text");
  var buttonSend = document.querySelector("#button-send");

  buttonSend.addEventListener("click", function () {
    name.classList.add("validator");
    email.classList.add("validator");
    text.classList.add("validator");
  });
});
