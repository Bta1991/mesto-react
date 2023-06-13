import React from 'react'
import PopupWithForm from './PopupWithForm'

function PopupAdd({ isOpen, onClose }) {
    return (
        <PopupWithForm
            name={'addForm'}
            title={'Новое место'}
            buttonText={'Создать'}
            isOpen={isOpen}
            onClose={onClose}
        >
            <input
                name="name"
                id="name"
                minLength="2"
                maxLength="30"
                type="text"
                className="popup__input popup__input_data_title"
                placeholder="Название места"
                required
            />
            <span
                className="popup__error popup__error_visible"
                id="name-error"
            ></span>
            <input
                name="link"
                id="link"
                type="url"
                className="popup__input popup__input_data_url"
                placeholder="Ссылка на картинку"
                required
            />
            <span
                className="popup__error popup__error_visible"
                id="link-error"
            ></span>
        </PopupWithForm>
    )
}
export default PopupAdd
