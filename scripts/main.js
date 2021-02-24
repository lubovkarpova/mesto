let popup = document.querySelector(".popup"); //переменная для попапа//
let editButton = document.querySelector(".profile__edit-button"); //переменная для кнопки Редактировать//
let closeButton = document.querySelector(".popup__close"); //переменная для кнопки закрыть//
let editForm = document.querySelector(".popup__form"); //переменная для формы//
let textName = document.querySelector(".profile__title"); //переменные куда вставляем текст
let textJob = document.querySelector(".profile__subtitle"); //переменные куда вставляем текст
let nameInput = popup.querySelector(".popup__input_type_name"); //переменные для инпутов в форме//
let jobInput = popup.querySelector(".popup__input_type_job"); //переменные для инпутов в форме//

//открытие попапа//
function editFormOpen () {
  popup.classList.add("popup_opened");
  nameInput.value = textName.textContent;
  jobInput.value = textJob.textContent;
};

//закрытие попап//
function editFormClose() {
  popup.classList.remove("popup_opened");
};


//забор текста из инпутов и вставка его в профиль//
function submitForm (e) {
  e.preventDefault();
  textName.textContent = nameInput.value;
  textJob.textContent = jobInput.value;
  editFormClose();
};

editButton.addEventListener("click", editFormOpen); //клик по кнопке edit и открытие попапа//
closeButton.addEventListener("click", editFormClose); //клик по кнопке close и закрытие попапа//
editForm.addEventListener("submit", submitForm); //сабмит формы и изменение текста в профиле//

