import React from 'react'
import PopupWithForm from './PopupWithForm'

function PopupDelete() {
    return (
        <PopupWithForm
            name={'deleteForm'}
            title={'Вы уверены?'}
            // isOpen={isOpen}
            // onClose={onClose}
            // onSubmit={handleSubmit}
        >
          ????
        </PopupWithForm>
    )
}
export default PopupDelete

{
    /* <div className="popup popup_deleteForm">
                <div className="popup__container">
                    <h2 className="popup__title">Вы уверены?</h2>
                    <form className="popup__form" name="deleteForm" noValidate>
                        <button
                            type="submit"
                            className="popup__save"
                            aria-label="Сохранить"
                        >
                            Да
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
