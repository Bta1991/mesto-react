import React from 'react'
import PopupWithForm from './PopupWithForm'

function PopupProfile() {
    return (
        <PopupWithForm
            name={'editForm'}
            title={'Редактировать профиль'}
            // isOpen={isOpen}
            // onClose={onClose}
            // onSubmit={handleSubmit}
        >
            <input
                name="user"
                id="user"
                minLength="2"
                maxLength="40"
                type="text"
                className="popup__input popup__input_data_user"
                placeholder="Имя"
                required
            />
            <span
                className="popup__error popup__error_visible"
                id="user-error"
            ></span>
            <input
                name="about"
                id="about"
                minLength="2"
                maxLength="200"
                type="text"
                className="popup__input popup__input_data_about"
                placeholder="О себе"
                required
            />
            <span
                className="popup__error popup__error_visible"
                id="about-error"
            ></span>
        </PopupWithForm>
    )
}
export default PopupProfile

{
    /* <div className="popup popup_editForm">
                <div className="popup__container">
                    <h2 className="popup__title">Редактировать профиль</h2>
                    <form className="popup__form" name="editForm">
                        <input
                            name="user"
                            id="user"
                            minLength="2"
                            maxLength="40"
                            type="text"
                            className="popup__input popup__input_data_user"
                            placeholder="Имя"
                            required
                        />
                        <span
                            className="popup__error popup__error_visible"
                            id="user-error"
                        ></span>
                        <input
                            name="about"
                            id="about"
                            minLength="2"
                            maxLength="200"
                            type="text"
                            className="popup__input popup__input_data_about"
                            placeholder="О себе"
                            required
                        />
                        <span
                            className="popup__error popup__error_visible"
                            id="about-error"
                        ></span>
                        <button
                            type="submit"
                            className="popup__save popup__save_disabled"
                            aria-label="Сохранить"
                        >
                            Сохранить
                        </button>
                    </form>
                    <button
                        type="button"
                        className="popup__close"
                        aria-label="Закрыть"
                    ></button>
                </div>
            </div> */
}
