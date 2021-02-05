let popup = document.querySelector(".popup"); //переменная для попапа//
let editButton = document.querySelector(".profile__edit-button"); //переменная для кнопки Редактировать//
let closeButton = document.querySelector(".popup__close"); //переменная для кнопки закрыть//
let editForm = document.querySelector(".popup__form"); //переменная для формы//
let textName = document.querySelector(".profile__title"); //переменные куда вставляем текст
let textJob = document.querySelector(".profile__subtitle"); //переменные куда вставляем текст
let nameInput = popup.querySelector(".popup__input_name"); //переменные для инпутов в форме//
let jobInput = popup.querySelector(".popup__input_job"); //переменные для инпутов в форме//

//открываем и закрываем попап//
editButton.addEventListener("click", function () {
  popup.classList.add("popup_opened");
  let initialNameTextContent = textName.textContent;
  let initialTextContent = textJob.textContent;
  nameInput.value = initialNameTextContent;
  jobInput.value = initialTextContent;
});

closeButton.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
});

//забираем текст из инпутов и вставляем его в профиль//
editForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let nameValue = nameInput.value;
  let jobValue = jobInput.value;
  textName.textContent = nameValue;
  textJob.textContent = jobValue;
  popup.classList.remove("popup_opened");
});

popup.addEventListener("click", function (event) {
  if (event.target.className === "popup_opened") {
    popup.classList.remove("popup_opened");
  }
});
