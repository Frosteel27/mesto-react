import React from "react";
import logo from "../images/logo.svg";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);   
  }
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="root-container">
      <div className="content">
        <Header logo={logo} />
        <Main onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick}/>
        <Footer />

        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

        <PopupWithForm name="profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                <label className="popup__formfield">
                    <input id="name-input" type="text" name="name" placeholder="Имя" required minLength="2" maxLength="40" className="popup__input" />
                <span className="name-input-error popup__input-error"></span>
                </label>
                <label className="popup__formfield">
                    <input id="job-input"type="text" name="job" placeholder="Чем занимаетесь?" required minLength="2" maxLength="200" className="popup__input" />
                <span className="job-input-error popup__input-error"></span>
                </label>    
        </PopupWithForm>

        <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                <label className="popup__formfield">
                    <input id="avatar-input" type="url" name="avatar" placeholder="Ссылка на картинку" className="popup__input" required />
                    <span className="avatar-input-error popup__input-error"></span>
                </label> 
        </PopupWithForm>

        <PopupWithForm name="upload" title="Новое место" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <label className="popup__formfield">
                    <input id="name-input" type="text" name="name" placeholder="Имя" required minLength="2" maxLength="40" className="popup__input" />
                <span className="name-input-error popup__input-error"></span>
                </label>
                <label className="popup__formfield">
                    <input id="job-input" type="text" name="job" placeholder="Чем занимаетесь?" required minLength="2" maxLength="200" className="popup__input" />
                <span className="job-input-error popup__input-error"></span>
                </label>
        </PopupWithForm>
      </div>
      
    </div>
    
  );
}



export default App;
