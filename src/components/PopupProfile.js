import React from 'react'
import PopupWithForm from './PopupWithForm'

function PopupProfile({isOpen, onClose}) {
    return (
        <PopupWithForm
            name={'editForm'}
            title={'Редактировать профиль'}
            isOpen={isOpen}
            onClose={onClose}
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
