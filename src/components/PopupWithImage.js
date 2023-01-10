function PopupWithImage(props) {
    return(
        <div className={`popup popup_type_enlarge ${Object.keys(props.card).length === 0 ? '' : 'popup_opened'}`}>
        <div className="popup__enlarge-container">
            <button type="button" className="popup__close" onClick={props.onClose}></button>
            <img src={props.card.link} alt="" className="popup__enlarge-image" />
            <h2 className="popup__enlarge-caption">{props.card.name}</h2>
        </div>
    </div>
    )
}

export default PopupWithImage;