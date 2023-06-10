import CurrentUserContext from '../contexts/CurrentUserContext'
import React from 'react'

function Main({ onEditAvatar, onEditProfile, onAddPlace, cards }) {
    const currentUser = React.useContext(CurrentUserContext)

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-area">
                    <img
                        className="profile__avatar"
                        src={currentUser.avatar}
                        alt="Фото пользователя"
                    />
                    <button
                        type="button"
                        className="profile__avatar-edit"
                        aria-label="Редактировать аватар профиля"
                        onClick={onEditAvatar}
                    ></button>
                </div>
                <div className="profile__info">
                    <div className="profile__title">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button
                            type="button"
                            className="profile__edit"
                            aria-label="Редактировать профиль"
                            onClick={onEditProfile}
                        ></button>
                    </div>

                    <p className="profile__subtitle">{currentUser.about}</p>
                </div>

                <button
                    type="button"
                    className="profile__add-button"
                    aria-label="Добавить фото"
                    onClick={onAddPlace}
                ></button>
            </section>
            <section className="elements">
            <template id="card">
              {cards}
            </template>
                {/* <template id="card">
                    <article className="element">
                        <div className="element__container">
                            <img className="element__photo" alt="#" />
                            <button
                                type="button"
                                className="element__trash"
                                aria-label="Удалить фото"
                            ></button>
                        </div>
                        <div className="element__info">
                            <h2 className="element__text"></h2>
                            <div className="element__like-area">
                                <button
                                    type="button"
                                    className="element__like"
                                    aria-label="Лайкнуть фото"
                                ></button>
                                <p className="element__like-counter">0</p>
                            </div>
                        </div>
                    </article>
                </template> */}
            </section>
        </main>
    )
}

export default Main
