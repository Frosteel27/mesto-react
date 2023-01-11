import {useState, useEffect} from "react";
import api from "../utils/Api";
import imgAdd from "../images/add.svg";
import imgEdit from "../images/change.svg";
import Card from "./Card";

function Main({onEditProfile, onEditAvatar, onAddPlace, onCardClick}) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getUserInfo()
            .then((userInfo) => {
                setUserName(userInfo.name);
                setUserDescription(userInfo.about);
                setUserAvatar(userInfo.avatar);
            })
            .catch((err) => {console.log(err)})
        
            api.getInintialCards()
            .then((cardList) => {
                setCards(cardList);
            })
            .catch((err) => {console.log(err)})
    }, [])

    return(
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-container">
                    <img src={userAvatar} alt="Кусто Жак-Ив" className="profile__avatar" />
                    <div className="profile__avatar-overlay" onClick={onEditAvatar}></div>
                </div>                
                <div className="profile__title">
                    <h1 className="profile__name">{userName}</h1>
                    <button aria-label="edit" className="profile__edit" onClick={onEditProfile}><img src={imgEdit} alt="Редактировать" className="profile__edit-ico" /></button>
                    <p className="profile__job">{userDescription}</p>
                </div>
                <button aria-label="add" className="profile__add"  onClick={onAddPlace}><img src={imgAdd} alt="Добавить"/></button>
            </section>
            <section className="gallery">
                <ul className="gallery__grid" >
                    {cards.map((card) => {
                         return <Card card={card} key={card._id} onCardClick={onCardClick}/>
                    })}
                </ul>
            </section>
        </main>
    )
}



export default Main;