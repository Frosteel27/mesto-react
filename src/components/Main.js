import { useContext } from "react";

import imgAdd from "../images/add.svg";
import imgEdit from "../images/change.svg";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({cards, onEditProfile, onEditAvatar, onAddPlace, onCardClick, onCardLike, onCardDelete}) {
    
    const currentUser = useContext(CurrentUserContext);

    return(
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-container">
                    <img src={currentUser.avatar} alt="Кусто Жак-Ив" className="profile__avatar" />
                    <div className="profile__avatar-overlay" onClick={onEditAvatar}></div>
                </div>                
                <div className="profile__title">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button aria-label="edit" className="profile__edit" onClick={onEditProfile}><img src={imgEdit} alt="Редактировать" className="profile__edit-ico" /></button>
                    <p className="profile__job">{currentUser.about}</p>
                </div>
                <button aria-label="add" className="profile__add"  onClick={onAddPlace}><img src={imgAdd} alt="Добавить"/></button>
            </section>
            <section className="gallery">
                <ul className="gallery__grid" >
                    {cards.map((card) => {
                         return <Card cards={cards} card={card} key={card._id} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete}/>
                    })}
                </ul>
            </section>
        </main>
    )
}



export default Main;