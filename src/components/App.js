import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import PopupAvatar from './PopupAvatar'
import PopupProfile from './PopupProfile'
import PopupAdd from './PopupAdd'

import CurrentUserContext from '../contexts/CurrentUserContext'
import api from '../utils/Api'

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
        React.useState(false)
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false)
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
        React.useState(false)
    const [currentUser, setCurrentUser] = React.useState({})
    const [cards, setCards] = React.useState([])
    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true)
    }
    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true)
    }
    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true)
    }

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialsCards()])
            .then(([data, item]) => {
                setCurrentUser(data)
                setCards(item)
                // userID = data._id
                // userInfo.setUserInfo(data.name, data.about)
                // userInfo.setUserAvatar(data.avatar)
                // section.renderItems(item)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    function closeAllPopups() {
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setIsEditAvatarPopupOpen(false)
        // setSelectedCard(null)
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Header />

                <Main
                    onEditProfile={handleEditProfileClick}
                    onAddPlace={handleAddPlaceClick}
                    onEditAvatar={handleEditAvatarClick}
                    cards={cards.map((item) => (
                        <article className="element" key={item._id}>
                            <div className="element__container">
                                <img
                                    className="element__photo"
                                    alt="#"
                                    src={item.link}
                                    // style={{
                                    //     backgroundImage: `url(${item.link})`,
                                    // }}
                                />
                                <button
                                    type="button"
                                    className="element__trash"
                                    aria-label="Удалить фото"
                                />
                            </div>
                            <div className="element__info">
                                <h2 className="element__text">{item.name}</h2>
                                <div className="element__like-area">
                                    <button
                                        type="button"
                                        className="element__like"
                                        aria-label="Лайкнуть фото"
                                    />
                                    <p className="element__like-counter">
                                        {item.likes.length}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
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
            </div>
        </CurrentUserContext.Provider>
    )
}

export default App
