import { useRef } from "react"
import PopupWithForm from "./PopupWithForm"

export default function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
    const avatarRef = useRef();

    function handleSubmit(evt) {
        evt.preventDefault();
        onUpdateAvatar(avatarRef.current.value);
    }

    return (
        <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isOpen} onClose={onClose} buttonText="Сохранить" onSubmitForm={handleSubmit}>
                <label className="popup__formfield">
                    <input ref={avatarRef} id="avatar-input" type="url" name="avatar" placeholder="Ссылка на картинку" className="popup__input" required />
                    <span className="avatar-input-error popup__input-error"></span>
                </label> 
        </PopupWithForm>
    )
}