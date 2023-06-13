import React from 'react'

function Card({ card, onClick }) {
    function handleClick() {
        onClick(card)
    }
    return (
        <article className="element" key={card._id}>
            <div className="element__container">
                <img
                    className="element__photo"
                    alt="#"
                    onClick={handleClick}
                    src={card.link}
                />
                <button
                    type="button"
                    className="element__trash"
                    aria-label="Удалить фото"
                ></button>
            </div>
            <div className="element__info">
                <h2 className="element__text">{card.name}</h2>
                <div className="element__like-area">
                    <button
                        type="button"
                        className="element__like"
                        aria-label="Лайкнуть фото"
                    ></button>
                    <p className="element__like-counter">{card.likes.length}</p>
                </div>
            </div>
        </article>
    )
}

export default Card
