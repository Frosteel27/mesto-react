import imgDelete from "../images/delete.svg"

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }

    return(<li className="card" onClick={handleClick}>
                <img src={props.card.link} alt="" className="card__image" />
                <h2 className="card__caption">{props.card.name}</h2>
                <div className="card__like">
                     <button type="button" aria-label="like" className="card__like-button"></button>
                    <h3 className="card__like-counter">{props.card.likes.length}</h3>
                </div>            
                <button className="card__delete"><img src={imgDelete} alt="Удалить" /></button>
            </li>)
}

export default Card;