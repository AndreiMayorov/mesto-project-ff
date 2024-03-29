const cardsContainer = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

function createCard(card, onDelete, onLike, onShow) {

  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');
  const cardImage = cardElement.querySelector('.card__image');
  const cardName = cardElement.querySelector('.card__title');
  
  cardImage.src = card.link;
  cardImage.alt = "Фотография места. " + card.name;
  cardName.textContent = card.name;

  cardDeleteButton.addEventListener('click', function() {
    onDelete(cardElement);
  });

  cardElement.querySelector('.card__like-button').addEventListener('click', onLike);

  cardImage.addEventListener('click', function() {
    onShow(cardImage.src, cardName.textContent)
  });

  return cardElement;
};

function deleteCard(card) {
  card.remove();
};

function likeCard(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
};

export {cardsContainer, createCard, deleteCard, likeCard};