import React from 'react'
import PopupWithForm from './PopupWithForm'

function PopupAvatar({ isOpen, onClose }) {
    return (
        <PopupWithForm
            name={'avatarForm'}
            title={'Обновить аватар'}
            isOpen={isOpen}
            onClose={onClose}
        >
            <input
                name="avatar"
                id="avatar"
                type="url"
                className="popup__input popup__input_data_name"
                placeholder="Введите ссылку на аватар"
                required
            />
            <span
                className="popup__error popup__error_visible"
                id="avatar-error"
            ></span>
        </PopupWithForm>
    )
}
export default PopupAvatar
