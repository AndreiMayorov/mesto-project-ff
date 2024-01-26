import '../pages/index.css';
import {cardsContainer, createCard, deleteCard, likeCard} from './components/card.js';
import {initialCards} from './components/cards.js';
import {addClassPopup, removeClassPopup, closePopupOverlayAndButton, closePopupEscape} from './components/modal.js';

const buttonOpenPopupEdit = document.querySelector('.profile__edit-button');
const buttonOpenPopupCard = document.querySelector('.profile__add-button');

const popupEdit = document.querySelector('.popup_type_edit');
const popupCard = document.querySelector('.popup_type_new-card');
const popupPhoto = document.querySelector('.popup_type_image');

const formElementEdit = popupEdit.querySelector('.popup__form');
const nameInputEdit = formElementEdit.querySelector('.popup__input_type_name');
const jobInputEdit = formElementEdit.querySelector('.popup__input_type_description');

const formElementCard = popupCard.querySelector('.popup__form');
const nameInputCard = formElementCard.querySelector('.popup__input_type_card-name');
const linkInputCard = formElementCard.querySelector('.popup__input_type_url');

initialCards.forEach(function (item) {
  const card = createCard(item, deleteCard, likeCard, showCard);
  cardsContainer.append(card);
});

function showCard(link, name) {
  const popupImage = popupPhoto.querySelector('.popup__image');
  const popupName = popupPhoto.querySelector('.popup__caption');
  popupImage.src = link;
  popupImage.alt = "Фотография места. " + name;
  popupName.textContent = name;
  addClassPopup(popupPhoto);
};

buttonOpenPopupEdit.addEventListener('click', function () {
  nameInputEdit.value = document.querySelector('.profile__title').textContent;
  jobInputEdit.value = document.querySelector('.profile__description').textContent;
  addClassPopup(popupEdit);
});

buttonOpenPopupCard.addEventListener('click', function () {
  nameInputCard.value = '';
  linkInputCard.value = '';
  addClassPopup(popupCard);
});

popupEdit.addEventListener('click', closePopupOverlayAndButton);
popupCard.addEventListener('click', closePopupOverlayAndButton);
popupPhoto.addEventListener('click', closePopupOverlayAndButton);

document.addEventListener('keydown', closePopupEscape);

function handleFormSubmitEdit(evt) {
  evt.preventDefault();
  document.querySelector('.profile__title').textContent = nameInputEdit.value;
  document.querySelector('.profile__description').textContent = jobInputEdit.value;
  removeClassPopup(popupEdit);
};

formElementEdit.addEventListener('submit', handleFormSubmitEdit);

function handleFormSubmitCard(evt) {
  evt.preventDefault();
  const cardData = {};
  cardData.name = nameInputCard.value;
  cardData.link = linkInputCard.value;
  const card = createCard(cardData, deleteCard, likeCard, showCard);
  cardsContainer.prepend(card);
  formElementCard.reset();
  removeClassPopup(popupCard);
};

formElementCard.addEventListener('submit', handleFormSubmitCard);