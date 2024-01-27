function addClassPopup (popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closePopupEscape);
};

function removeClassPopup (popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closePopupEscape);
};

function closePopupOverlayAndButton (evt){
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
    removeClassPopup(evt.currentTarget);
  }
};

function closePopupEscape (evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector('.popup_is-opened');
    removeClassPopup(popupOpened);
  }
};

export {addClassPopup, removeClassPopup, closePopupOverlayAndButton, closePopupEscape};