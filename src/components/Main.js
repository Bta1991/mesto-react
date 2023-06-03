function Main() {
    const handleEditAvatarClick = () => {
        const avatarEditPopup = document.querySelector('.popup_avatarForm')
        avatarEditPopup.classList.add('popup_opened')
    }

    const handleEditProfileClick = () => {
        const profileEditPopup = document.querySelector('.popup_editForm')
        profileEditPopup.classList.add('popup_opened')
    }

    const handleAddPlaceClick = () => {
        const addPlacePopup = document.querySelector('.popup_addForm')
        addPlacePopup.classList.add('popup_opened')
    }

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-area">
                    <img
                        className="profile__avatar"
                        src="#"
                        alt="Фото пользователя"
                    />
                    <button
                        type="button"
                        className="profile__avatar-edit"
                        aria-label="Редактировать аватар профиля"
                        onClick={handleEditAvatarClick}
                    ></button>
                </div>
                <div className="profile__info">
                    <div className="profile__title">
                        <h1 className="profile__name"></h1>
                        <button
                            type="button"
                            className="profile__edit"
                            aria-label="Редактировать профиль"
                            onClick={handleEditProfileClick}
                        ></button>
                    </div>

                    <p className="profile__subtitle"></p>
                </div>

                <button
                    type="button"
                    className="profile__add-button"
                    aria-label="Добавить фото"
                    onClick={handleAddPlaceClick}
                ></button>
            </section>
            <section className="elements">
                <template id="card">
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
                </template>
            </section>
        </main>
    )
}

export default Main
