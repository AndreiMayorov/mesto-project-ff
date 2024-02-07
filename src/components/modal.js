function openPopup (popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closePopupEscape);
};

function closePopup (popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closePopupEscape);
};

function closePopupOverlayAndButton (evt){
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
    closePopup(evt.currentTarget);
  }
};

function closePopupEscape (evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector('.popup_is-opened');
    closePopup(popupOpened);
  }
};

export {openPopup, closePopup, closePopupOverlayAndButton, closePopupEscape};