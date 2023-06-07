import React from 'react'
import PopupWithForm from './PopupWithForm'

function PopupAvatar() {
    return (
        <PopupWithForm
            name={'avatarForm'}
            title={'Обновить аватар'}
            // isOpen={isOpen}
            // onClose={onClose}
            // onSubmit={handleSubmit}
        >
            <input
                name="avatar"
                id="avatar"
                type="url"
                className="popup__input popup__input_data_name"
                placeholder="Введите ссылку на аватар"
                required
                // ref={ref}
            />
            <span
                className="popup__error popup__error_visible"
                id="avatar-error"
            ></span>
        </PopupWithForm>
    )
}
export default PopupAvatar

            {/* <div className="popup popup_avatarForm">
                <div className="popup__container">
                    <h2 className="popup__title">Обновить аватар</h2>
                    <form className="popup__form" name="avatarForm" noValidate>
                        <input
                            name="avatar"
                            id="avatar"
                            minLength="2"
                            maxLength="200"
                            type="url"
                            className="popup__input popup__input_data_name"
                            placeholder="Введите ссылку на аватар"
                            required
                        />
                        <span
                            className="popup__error popup__error_visible"
                            id="avatar-error"
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
            </div> */}
