var popup = document.querySelector("#modal-write-us");
var container = document.querySelector("#modal-container");
var closeButton = document.querySelector("#button-close");
var openButton = document.querySelector("#button-open");

function closeEventHandler(evt) {
  evt.preventDefault();
  container.classList.remove("modal-container-opacity");
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
}

closeButton.addEventListener("click", closeEventHandler);

openButton.addEventListener("click", function (evt) {
  container.classList.add("modal-container-opacity");
  popup.classList.add("modal-show");

  var name = document.querySelector("#user-name");
  var email = document.querySelector("#user-email");
  var text = document.querySelector("#message-text");

  var buttonSend = document.querySelector("#button-send");
  buttonSend.addEventListener("click", function () {
    name.classList.add("validator");
    email.classList.add("validator");
    text.classList.add("validator");
    if (!name.value || !email.value || !text.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    }
  });
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
    if (container.classList.contains("modal-container-opacity")) {
      container.classList.remove("modal-container-opacity");
    }
  }
});
