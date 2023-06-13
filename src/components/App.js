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
        if (card !== selectedCard) {
            setSelectedCard(card)
        }
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
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [])
    const closeAllPopups = () => {
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        setSelectedCard(null)
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
                />
                <Footer />

                <PopupAvatar
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                />
                <PopupProfile
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                />
                <PopupAdd
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                />

                {selectedCard && (
                    <ImagePopup card={selectedCard} onClose={closeAllPopups} />
                )}
            </div>
        </CurrentUserContext.Provider>
    )
}
export default App
