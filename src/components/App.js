import React, { useState, useEffect } from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupAvatar from './PopupAvatar'
import PopupProfile from './PopupProfile'
import PopupAdd from './PopupAdd'
import ImagePopup from './ImagePopup'
import CurrentUserContext from '../contexts/CurrentUserContext'
import api from '../utils/Api'
function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
    const [currentUser, setCurrentUser] = useState({})
    const [cards, setCards] = useState([])
    const [selectedCard, setSelectedCard] = useState(null)

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true)
    }
    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true)
    }
    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true)
    }
    const handleCardClick = (card) => {
        setSelectedCard(card)
    }
    const closeAllPopups = () => {
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setSelectedCard(null)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [userData, cardsData] = await Promise.all([
                    api.getUserInfo(),
                    api.getInitialsCards(),
                ])
                setCurrentUser(userData)
                setCards(cardsData)
            } catch (err) {
                console.error(err)
            }
        }
        fetchData()
    }, [])

    function handleCardLike(card) {
        // Снова проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some((i) => i._id === currentUser._id)

        // Отправляем запрос в API и получаем обновлённые данные карточки
        api.changeLikeCardStatus(card._id, isLiked)
            .then((newCard) => {
                setCards((state) =>
                    state.map((c) => (c._id === card._id ? newCard : c))
                )
            })
            .catch((err) => {
                console.error(err)
            })
    }
    function handleCardDelete(card) {
        api.deleteCard(card._id)
            .then(() => {
                const newCards = cards.filter((c) => c._id !== card._id)
                setCards(newCards)
            })
            .catch((err) => console.error(err))
    }
    function handleUpdateUser(info) {
        api.setUserInfo(info)
            .then((userData) => {
                setCurrentUser(userData)
                closeAllPopups()
            })
            .catch((err) => console.error(err))
    }

    function handleUpdateAvatar(link) {
        api.setAvatar(link)
            .then((userData) => {
                setCurrentUser(userData)
                closeAllPopups()
            })
            .catch((err) => console.error(err))
    }

    function handleAddPlace(card) {
        api.addCard(card)
            .then((newCard) => {
                setCards([newCard, ...cards])
                closeAllPopups()
            })
            .catch((err) => console.error(err))
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Header />
                <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    cards={cards}
                    onCardClick={handleCardClick}
                    onCardLike={handleCardLike}
                    onCardDelete={handleCardDelete}
                />
                <Footer />

                <PopupAvatar
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                    onUpdateAvatar={handleUpdateAvatar}
                />
                <PopupProfile
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    onUpdateUser={handleUpdateUser}
                />
                <PopupAdd
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                    onAddPopup={handleAddPlace}
                />

                <ImagePopup card={selectedCard} onClose={closeAllPopups} />
            </div>
        </CurrentUserContext.Provider>
    )
}
export default App
