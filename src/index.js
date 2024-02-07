import './pages/index.css';
import {cardsContainer, createCard, deleteCard, likeCard} from './components/card.js';
import {initialCards} from './components/cards.js';
import {openPopup, closePopup, closePopupOverlayAndButton} from './components/modal.js';

const buttonOpenPopupProfile = document.querySelector('.profile__edit-button');
const buttonOpenPopupCard = document.querySelector('.profile__add-button');

const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__description');

const popupProfile = document.querySelector('.popup_type_edit');
const popupCard = document.querySelector('.popup_type_new-card');
const popupPhoto = document.querySelector('.popup_type_image');

const formProfile = popupProfile.querySelector('.popup__form');
const nameFormProfile = formProfile.querySelector('.popup__input_type_name');
const jobFormProfile = formProfile.querySelector('.popup__input_type_description');

const formCard = popupCard.querySelector('.popup__form');
const nameFormCard = formCard.querySelector('.popup__input_type_card-name');
const linkFormCard = formCard.querySelector('.popup__input_type_url');

const popupImage = popupPhoto.querySelector('.popup__image');
const popupName = popupPhoto.querySelector('.popup__caption');

initialCards.forEach(function (item) {
  const card = createCard(item, deleteCard, likeCard, showCard);
  cardsContainer.append(card);
});

function showCard(link, name) {
  popupImage.src = link;
  popupImage.alt = "Фотография места. " + name;
  popupName.textContent = name;
  openPopup(popupPhoto);
};

buttonOpenPopupProfile.addEventListener('click', function () {
  nameFormProfile.value = nameProfile.textContent;
  jobFormProfile.value = jobProfile.textContent;
  openPopup(popupProfile);
});

buttonOpenPopupCard.addEventListener('click', function () {
  openPopup(popupCard);
});

popupProfile.addEventListener('click', closePopupOverlayAndButton);
popupCard.addEventListener('click', closePopupOverlayAndButton);
popupPhoto.addEventListener('click', closePopupOverlayAndButton);

function handleFormSubmitEdit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameFormProfile.value;
  jobProfile.textContent = jobFormProfile.value;
  closePopup(popupProfile);
};

formProfile.addEventListener('submit', handleFormSubmitEdit);

function handleFormSubmitCard(evt) {
  evt.preventDefault();
  const newCard = {};
  newCard.name = nameFormCard.value;
  newCard.link = linkFormCard.value;
  const card = createCard(newCard, deleteCard, likeCard, showCard);
  cardsContainer.prepend(card);
  formCard.reset();
  closePopup(popupCard);
};

formCard.addEventListener('submit', handleFormSubmitCard);