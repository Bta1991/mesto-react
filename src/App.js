import logoPic from './images/logo.svg';

function App() {
  return (
    <div className="App">
    <body class="page">
        <header class="header">
            <img
                class="header__logo"
                src={logoPic}
                alt="Место"
            />
        </header>

        <main class="main">
            <section class="profile">
                <div class="profile__avatar-area">
                    <img
                        class="profile__avatar"
                        src="#"
                        alt="Фото пользователя"
                    />
                    <button
                        type="button"
                        class="profile__avatar-edit"
                        aria-label="Редактировать аватар профиля"
                    ></button>
                </div>
                <div class="profile__info">
                    <div class="profile__title">
                        <h1 class="profile__name"></h1>
                        <button
                            type="button"
                            class="profile__edit"
                            aria-label="Редактировать профиль"
                        ></button>
                    </div>

                    <p class="profile__subtitle"></p>
                </div>

                <button
                    type="button"
                    class="profile__add-button"
                    aria-label="Добавить фото"
                ></button>
            </section>
            <section class="elements">
                <template id="card">
                    <article class="element">
                        <div class="element__container">
                            <img class="element__photo" alt="#" />
                            <button
                                type="button"
                                class="element__trash"
                                aria-label="Удалить фото"
                            ></button>
                        </div>
                        <div class="element__info">
                            <h2 class="element__text"></h2>
                            <div class="element__like-area">
                                <button
                                    type="button"
                                    class="element__like"
                                    aria-label="Лайкнуть фото"
                                ></button>
                                <p class="element__like-counter">0</p>
                            </div>
                        </div>
                    </article>
                </template>
            </section>
        </main>
        <footer class="footer">
            <p class="footer__copyright">&copy;2023 Tanya B. проект Mesto</p>
        </footer>
        <div class="popup popup_avatar">
            <div class="popup__container">
                <h2 class="popup__title">Обновить аватар</h2>
                <form class="popup__form" name="avatarForm" novalidate>
                    <input
                        name="avatar"
                        id="avatar"
                        minlength="2"
                        maxlength="200"
                        type="url"
                        class="popup__input popup__input_data_name"
                        placeholder="Введите ссылку на аватар"
                        required
                    />
                    <span
                        class="popup__error popup__error_visible"
                        id="avatar-error"
                    ></span>
                    <button
                        type="submit"
                        class="popup__save popup__save_disabled"
                        aria-label="Сохранить"
                    >
                        Сохранить
                    </button>
                </form>
                <button
                    type="button"
                    class="popup__close"
                    aria-label="Закрыть"
                ></button>
            </div>
        </div>
        <div class="popup popup_edit">
            <div class="popup__container">
                <h2 class="popup__title">Редактировать профиль</h2>
                <form class="popup__form" name="editForm">
                    <input
                        name="user"
                        id="user"
                        minlength="2"
                        maxlength="40"
                        type="text"
                        class="popup__input popup__input_data_user"
                        placeholder="Имя"
                        required
                    />
                    <span
                        class="popup__error popup__error_visible"
                        id="user-error"
                    ></span>
                    <input
                        name="about"
                        id="about"
                        minlength="2"
                        maxlength="200"
                        type="text"
                        class="popup__input popup__input_data_about"
                        placeholder="О себе"
                        required
                    />
                    <span
                        class="popup__error popup__error_visible"
                        id="about-error"
                    ></span>
                    <button
                        type="submit"
                        class="popup__save popup__save_disabled"
                        aria-label="Сохранить"
                    >
                        Сохранить
                    </button>
                </form>
                <button
                    type="button"
                    class="popup__close"
                    aria-label="Закрыть"
                ></button>
            </div>
        </div>
        <div class="popup popup_add">
            <div class="popup__container">
                <h2 class="popup__title">Новое место</h2>
                <form class="popup__form" name="addForm" novalidate>
                    <input
                        name="name"
                        id="name"
                        minlength="2"
                        maxlength="30"
                        type="text"
                        class="popup__input popup__input_data_title"
                        placeholder="Название места"
                        required
                    />
                    <span
                        class="popup__error popup__error_visible"
                        id="name-error"
                    ></span>
                    <input
                        name="link"
                        id="link"
                        type="url"
                        class="popup__input popup__input_data_url"
                        placeholder="Ссылка на картинку"
                        required
                    />
                    <span
                        class="popup__error popup__error_visible"
                        id="link-error"
                    ></span>
                    <button
                        type="submit"
                        class="popup__save popup__save_disabled"
                        aria-label="Создать"
                    >
                        Создать
                    </button>
                </form>
                <button
                    type="button"
                    class="popup__close"
                    aria-label="Закрыть"
                ></button>
            </div>
        </div>
        <div class="popup popup_delete">
            <div class="popup__container">
                <h2 class="popup__title">Вы уверены?</h2>
                <form class="popup__form" name="deleteForm" novalidate>
                    <button
                        type="submit"
                        class="popup__save"
                        aria-label="Сохранить"
                    >
                        Да
                    </button>
                </form>
                <button
                    type="button"
                    class="popup__close"
                    aria-label="Закрыть"
                ></button>
            </div>
        </div>

        <div class="popup popup_view">
            <div class="popup__photo">
                <figure class="popup__figure">
                    <img src="#" class="popup__image" alt="#" />
                    <figcaption class="popup__photo-title"></figcaption>
                </figure>
                <button
                    type="button"
                    class="popup__close"
                    aria-label="Закрыть"
                ></button>
            </div>
        </div>
    </body>
    </div>
  );
}

export default App;
