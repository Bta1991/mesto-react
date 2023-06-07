function PopupWithForm({ name, title, children, buttonText }) {
    return (
        <div className={`popup popup_${name}`}>
            <div className="popup__container">
                <h2 className="popup__title">{title}</h2>
                <form className="popup__form" name={name} noValidate>
                    {children}
                    <button
                        type="submit"
                        className="popup__save popup__save_disabled"
                        aria-label="Сохранить"
                    >
                       { buttonText || 'Сохранить' }
                    </button>
                </form>
                <button
                    type="button"
                    className="popup__close"
                    aria-label="Закрыть"
                ></button>
            </div>
        </div>
    )
}
export default PopupWithForm
