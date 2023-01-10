function PopupWithForm(props) {
    return(
        <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button type="button" className="popup__close" onClick={props.onClose}></button>
                <form name={props.name} className={`popup__form popup__form_type_${props.name}`}> 
                    <h2 className="popup__heading">{props.title}</h2>
                    {props.children}                                    
                    <button type="submit" value="Сохранить" className="popup__submit">Сохранить</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;