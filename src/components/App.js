import Header from './Header'
import Main from './Main'
import Footer from './Footer'

function App() {
    return (
        <div className="page">
            <Header />
            <Main />
            <Footer />

            <div className="popup popup_avatarForm">
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
            </div>
            <div className="popup popup_editForm">
                <div className="popup__container">
                    <h2 className="popup__title">Редактировать профиль</h2>
                    <form className="popup__form" name="editForm">
                        <input
                            name="user"
                            id="user"
                            minLength="2"
                            maxLength="40"
                            type="text"
                            className="popup__input popup__input_data_user"
                            placeholder="Имя"
                            required
                        />
                        <span
                            className="popup__error popup__error_visible"
                            id="user-error"
                        ></span>
                        <input
                            name="about"
                            id="about"
                            minLength="2"
                            maxLength="200"
                            type="text"
                            className="popup__input popup__input_data_about"
                            placeholder="О себе"
                            required
                        />
                        <span
                            className="popup__error popup__error_visible"
                            id="about-error"
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
                        className="popup__closeForm"
                        aria-label="Закрыть"
                    ></button>
                </div>
            </div>
            <div className="popup popup_addForm">
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
            </div>
            <div className="popup popup_deleteForm">
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
            </div>

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
        </div>
    )
}

export default App
