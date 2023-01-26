import {useState, useEffect} from "react";
import logo from "../images/logo.svg";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import AddPlacePopup from "./AddPlacePopup";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then((userInfo) => {
        setCurrentUser(userInfo);
      })
      .catch(err => console.log(err));
    api.getInintialCards()
      .then((cardList) => {
          setCards(cardList);
      })
      .catch((err) => {console.log(err)})
  }, [])

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

  function handleLikeClick(card) {
    const isLiked = card.likes.some(user => user._id === currentUser._id);
    let likeRespond;

    if(!isLiked) {
      likeRespond = api.putLike(card);      
        
    } else {
      likeRespond = api.deleteLike(card)
    }
    likeRespond
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c))
      })
      .catch(err => console.log(err))
  }

  function handleDeleteClick(card) {
    api.deleteCard(card)
      .then(setCards(cards.filter(item => item._id !== card._id)))
      .catch(err => console.log(err))
  }

  function handleUpdateUser(userInfo) {
    api.setUserInfo(userInfo)
      .then(res => setCurrentUser(res))
      .then(closeAllPopups)
      .catch(err => console.log(err))
  }

  function handleUpdateAvatar(avatar) {
    api.setUserAvatar(avatar)
      .then(res => setCurrentUser(res))
      .then(closeAllPopups)
      .catch(err => console.log(err))
  }

  function handleAddPlaceSubmit(newCard) {
    api.uploadCard(newCard)
      .then(res => setCards([res, ...cards]))
      .then(closeAllPopups)
      .catch(err => console.log(err))
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="root-container">
      <div className="content">
        <Header logo={logo} />
        <Main cards={cards} onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} onCardLike={handleLikeClick} onCardDelete={handleDeleteClick} />
        <Footer />

        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>

        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
      </div>
      
    </div>
    </CurrentUserContext.Provider>    
  );
}



export default App;
