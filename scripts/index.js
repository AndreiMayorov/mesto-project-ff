// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const cardsContainer = document.querySelector('.places__list');


initialCards.forEach(function (item) {
  const card = createCard(item);
  cardsContainer.append(card);
});

function createCard(element) {

  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardDeleteButton = cardElement.querySelector('.card__delete-button');
  
  cardElement.querySelector('.card__image').src = element.link;
  cardElement.querySelector('.card__image').alt = element.description;
  cardElement.querySelector('.card__title').textContent = element.name;

  cardDeleteButton.addEventListener('click', function() {
    deleteCard(cardElement);
  });

  return cardElement;
}

function deleteCard(card) {
  card.remove();
}