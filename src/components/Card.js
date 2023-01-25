import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import imgDelete from "../images/delete.svg"

function Card({card, onCardClick, onCardLike, onCardDelete }) {
    const currentUser = useContext(CurrentUserContext);

    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some(user => user._id === currentUser._id)

    function handleClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        onCardLike(card)        
    }

    function handleDeleteClick() {
        onCardDelete(card)
    }

    return(<li className="card" >
                <img src={card.link} alt={card.name} className="card__image" onClick={handleClick}/>
                <h2 className="card__caption">{card.name}</h2>
                <div className="card__like">
                     <button onClick={handleLikeClick} type="button" aria-label="like" className={`card__like-button ${isLiked && 'card__like-button_active'}`}></button>
                    <h3 className="card__like-counter">{card.likes.length}</h3>
                </div>            
                {isOwn && <button className="card__delete" onClick={handleDeleteClick}><img src={imgDelete} alt="Удалить" /></button>}
            </li>)
}

export default Card;