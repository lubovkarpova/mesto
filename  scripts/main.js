let popup = document.querySelector(".popup"); //переменная для попапа//
console.log({ popup });
let editButton = document.querySelector(".profile__edit-button"); //переменная для кнопки Редактировать//
console.log({ editButton });
let closeButton = document.querySelector(".popup__close"); //переменная для кнопки закрыть//
console.log({ closeButton });
let editForm = document.querySelector(".popup__form"); //переменная для формы//
console.log({ editForm });
let textName = document.querySelector(".profile__title"); //переменные куда вставляем текст
console.log({ textName });
let textJob = document.querySelector(".profile__subtitle"); //переменные куда вставляем текст
console.log({ textJob });
let nameInput = popup.querySelector(".popup__input_name"); //переменные для инпутов в форме//
let jobInput = popup.querySelector(".popup__input_job"); //переменные для инпутов в форме//
console.log({ nameInput });
console.log({ jobInput });

//открываем и закрываем попап//
editButton.addEventListener("click", function () {
  popup.classList.add("popup_opened");
  let initialNameTextContent = textName.textContent;
  let initialTextContent = textJob.textContent;
  console.log({ initialNameTextContent });
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
  console.log({ nameValue });
  console.log({ jobValue });
  textName.textContent = nameValue;
  textJob.textContent = jobValue;
  popup.classList.remove("popup_opened");
});

popup.addEventListener("click", function (event) {
  if (event.target.className === "popup") {
    popup.classList.remove("popup_opened");
  }
});
