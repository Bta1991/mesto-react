import React from 'react'

function PopupImage() {
    return (
        <div className="popup popup_view">
            <div className="popup__photo">
                <figure className="popup__figure">
                    <img src="#" className="popup__image" alt="#" />
                    <figcaption className="popup__photo-title"></figcaption>
                </figure>
                <button
                    type="button"
                    className="popup__close"
                    aria-label="Закрыть"
                ></button>
            </div>
        </div>
    )
}
export default PopupImage

{
    /* <div className="popup popup_view">
                <div className="popup__photo">
                    <figure className="popup__figure">
                        <img src="#" className="popup__image" alt="#" />
                        <figcaption className="popup__photo-title"></figcaption>
                    </figure>
                    <button
                        type="button"
                        className="popup__close"
                        aria-label="Закрыть"
                    ></button>
                </div>
            </div> */
}
