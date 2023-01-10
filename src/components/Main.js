import React from "react";
import api from "../utils/Api";
import imgAdd from "../images/add.svg";
import imgEdit from "../images/change.svg";
import Card from "./Card";

function Main(props) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserInfo()
            .then((userInfo) => {
                setUserName(userInfo.name);
                setUserDescription(userInfo.about);
                setUserAvatar(userInfo.avatar);
            })
        
            api.getInintialCards()
            .then((cardList) => {
                setCards(cardList);
            })
    }, [])

    return(
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-container">
                    <img src={userAvatar} alt="Кусто Жак-Ив" className="profile__avatar" />
                    <div className="profile__avatar-overlay" onClick={props.onEditAvatar}></div>
                </div>                
                <div className="profile__title">
                    <h1 className="profile__name">{userName}</h1>
                    <button aria-label="edit" className="profile__edit" onClick={props.onEditProfile}><img src={imgEdit} alt="Редактировать" className="profile__edit-ico" /></button>
                    <p className="profile__job">{userDescription}</p>
                </div>
                <button aria-label="add" className="profile__add"  onClick={props.onAddPlace}><img src={imgAdd} alt="Добавить"/></button>
            </section>
            <section className="gallery">
                <ul className="gallery__grid" >
                    {cards.map((card) => {
                         return <Card card={card} key={card._id} onCardClick={props.onCardClick}/>
                    })}
                </ul>
            </section>
        </main>
    )
}



export default Main;