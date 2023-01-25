function PopupWithForm({name, title, isOpen, onClose, children, buttonText, onSubmitForm}) {
    return(
        <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button type="button" className="popup__close" onClick={onClose}></button>
                <form name={name} className={`popup__form popup__form_type_${name}`} onSubmit={onSubmitForm}> 
                    <h2 className="popup__heading">{title}</h2>
                    {children}                                    
                    <button type="submit" value="Сохранить" className="popup__submit">{buttonText}</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;