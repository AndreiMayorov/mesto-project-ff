function addClassPopup (popup) {
  popup.classList.add('popup_is-opened');
};

function removeClassPopup (popup) {
  popup.classList.remove('popup_is-opened');
};

function closePopupOverlayAndButton (evt){
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
    removeClassPopup(evt.currentTarget);
  }
};

function closePopupEscape (evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector('.popup_is-opened');
    if (!(popupOpened == null)) {
      removeClassPopup(popupOpened);
    }
  }
  evt.target.removeEventListener('keydown', closePopupEscape);
};

export {addClassPopup, removeClassPopup, closePopupOverlayAndButton, closePopupEscape};