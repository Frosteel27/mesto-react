import { useState, useEffect, useContext } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
    const currentUser = useContext(CurrentUserContext)
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if(currentUser.hasOwnProperty('name')) {
            setName(currentUser.name);
            setDescription(currentUser.about);
        }        
    }, [currentUser])

    function handleNameChange(evt) {
        setName(evt.target.value)
    }

    function handleDescriptionChange(evt) {
        setDescription(evt.target.value)
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        onUpdateUser({name, about: description})
    }

    return (<PopupWithForm name="profile" title="Редактировать профиль" isOpen={isOpen} onClose={onClose} buttonText="Сохранить" onSubmitForm={handleSubmit}>
    <label className="popup__formfield">
        <input value={name} id="name-input" type="text" name="name" placeholder="Имя" required minLength="2" maxLength="40" className="popup__input" onChange={handleNameChange} /> 
    <span className="name-input-error popup__input-error"></span>
    </label>
    <label className="popup__formfield">
        <input value={description} id="job-input"type="text" name="job" placeholder="Чем занимаетесь?" required minLength="2" maxLength="200" className="popup__input" onChange={handleDescriptionChange} />
    <span className="job-input-error popup__input-error"></span>
    </label>    
</PopupWithForm>)
}