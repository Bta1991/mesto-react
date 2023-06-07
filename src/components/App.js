import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

import PopupAvatar from './PopupAvatar'
import PopupProfile from './PopupProfile'
import PopupAdd from './PopupAdd'

function App() {
    return (
        <div className="page">
            <Header />
            <Main />
            <Footer />

            <PopupAvatar></PopupAvatar>
            <PopupProfile></PopupProfile>
            <PopupAdd></PopupAdd>
        </div>
    )
}

export default App
