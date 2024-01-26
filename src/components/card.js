const cardsContainer = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

function createCard(element, onDelete, onLike, onShow) {

  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');
  const cardImage = cardElement.querySelector('.card__image');
  const cardName = cardElement.querySelector('.card__title');
  
  cardImage.src = element.link;
  cardImage.alt = "Фотография места. " + element.name;
  cardName.textContent = element.name;

  cardDeleteButton.addEventListener('click', function() {
    onDelete(cardElement);
  });

  cardsContainer.addEventListener('click', onLike);

  cardImage.addEventListener('click', function() {
    onShow(cardImage.src, cardName.textContent)
  });

  return cardElement;
};

function deleteCard(card) {
  card.remove();
};

function likeCard(evt) {
  if (evt.target.classList.contains('card__like-button')) {
    evt.target.classList.toggle('card__like-button_is-active');
  }
};

export {cardsContainer, createCard, deleteCard, likeCard};