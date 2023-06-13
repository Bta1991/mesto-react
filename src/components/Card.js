import React from 'react'

function Card({ card, onClick }) {
    function handleClick() {
      onClick(card)
    }
    return (
        // <template id="card">
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
                        <p className="element__like-counter">
                            {card.likes.length}
                        </p>
                    </div>
                </div>
            </article>
        // </template>
    )
}

export default Card

// cards={cards.map((item) => (
//   <article className="element" key={item._id}>
//       <div className="element__container">
//           <img
//               className="element__photo"
//               alt="#"
//               src={item.link}
//           />
//           <button
//               type="button"
//               className="element__trash"
//               aria-label="Удалить фото"
//           />
//       </div>
//       <div className="element__info">
//           <h2 className="element__text">{item.name}</h2>
//           <div className="element__like-area">
//               <button
//                   type="button"
//                   className="element__like"
//                   aria-label="Лайкнуть фото"
//               />
//               <p className="element__like-counter">
//                   {item.likes.length}
//               </p>
//           </div>
//       </div>
//   </article>
// ))}
