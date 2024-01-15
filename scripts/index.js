// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const cardsContainer = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;


initialCards.forEach(function (item) {
  const card = createCard(item, deleteCard);
  cardsContainer.append(card);
});

function createCard(element, onDelete) {

  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');
  const cardImage = cardElement.querySelector('.card__image')
  
  cardImage.src = element.link;
  cardImage.alt = element.description;
  cardElement.querySelector('.card__title').textContent = element.name;

  cardDeleteButton.addEventListener('click', function() {
    onDelete(cardElement);
  });

  return cardElement;
}

function deleteCard(card) {
  card.remove();
}