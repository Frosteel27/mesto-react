import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({isOpen, onClose, onAddPlace }) {
    const [newCard, setNewCard] = useState({name: '', link: ''})

    function handleSubmit(evt) {
        evt.preventDefault();
        onAddPlace(newCard)
    }

    function handleInputChange(evt) {
        setNewCard({...newCard, [evt.target.name]: evt.target.value});
    }

    return (
        <PopupWithForm name="upload" title="Новое место" isOpen={isOpen} onClose={onClose} buttonText="Создать" onSubmitForm={handleSubmit}>
                <label className="popup__formfield">
                    <input value={newCard.name} id="postname-input" type="text" name="name" placeholder="Название" className="popup__input" required minLength="2" maxLength="30" onChange={handleInputChange} />
                    <span className="postname-input-error popup__input-error"></span>
                </label>
                <label className="popup__formfield">
                    <input value={newCard.link} id="postsrc-input" type="url" name="link" placeholder="Ссылка на картинку" className="popup__input" required onChange={handleInputChange} />
                    <span className="postsrc-input-error popup__input-error"></span>
                </label>                
        </PopupWithForm>
    )
}