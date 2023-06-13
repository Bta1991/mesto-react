import React from 'react'
import PopupWithForm from './PopupWithForm'

function PopupDelete({ isOpen, onClose }) {
    return (
        <PopupWithForm
            name={'deleteForm'}
            title={'Вы уверены?'}
            isOpen={isOpen}
            onClose={onClose}
        ></PopupWithForm>
    )
}
export default PopupDelete
