import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({isOpen, onClose, onAddPlace }) {
    const [newCard, setNewCard] = useState({name: '', link: ''})

    function handleSubmit(evt) {
        evt.preventDefault();
        onAddPlace(newCard)
    }

    function handlePostnameChange(evt) {
        setNewCard({...newCard, name: evt.target.value});
    }

    function handlePostsrcChange(evt) {
        setNewCard({...newCard, link: evt.target.value});
    }

    return (
        <PopupWithForm name="upload" title="Новое место" isOpen={isOpen} onClose={onClose} buttonText="Создать" onSubmitForm={handleSubmit}>
                <label className="popup__formfield">
                    <input id="postname-input" type="text" name="name" placeholder="Название" className="popup__input" required minLength="2" maxLength="30" onChange={handlePostnameChange} />
                    <span className="postname-input-error popup__input-error"></span>
                </label>
                <label className="popup__formfield">
                    <input id="postsrc-input" type="url" name="link" placeholder="Ссылка на картинку" className="popup__input" required onChange={handlePostsrcChange} />
                    <span className="postsrc-input-error popup__input-error"></span>
                </label>                
        </PopupWithForm>
    )
}