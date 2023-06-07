import React from 'react'
import PopupWithForm from './PopupWithForm'

function PopupAdd() {
    return (
        <PopupWithForm
            name={'addForm'}
            title={'Новое место'}
            buttonText={'Создать'}
            // isOpen={isOpen}
            // onClose={onClose}
            // onSubmit={handleSubmit}
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

{
    /* <div className="popup popup_addForm">
                <div className="popup__container">
                    <h2 className="popup__title">Новое место</h2>
                    <form className="popup__form" name="addForm" noValidate>
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
                        <button
                            type="submit"
                            className="popup__save popup__save_disabled"
                            aria-label="Создать"
                        >
                            Создать
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
