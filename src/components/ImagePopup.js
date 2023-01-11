function ImagePopup({card, onClose}) {
    return(
        <div className={`popup popup_type_enlarge ${card.hasOwnProperty('name') ? 'popup_opened' : ''}`}>
        <div className="popup__enlarge-container">
            <button type="button" className="popup__close" onClick={onClose}></button>
            <img src={card.link} alt={card.name} className="popup__enlarge-image" />
            <h2 className="popup__enlarge-caption">{card.name}</h2>
        </div>
    </div>
    )
}

export default ImagePopup;