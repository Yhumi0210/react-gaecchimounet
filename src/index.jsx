import ReactDOM from 'react-dom/client'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/scss/index.scss'
import HomePage from './components/page/HomePage.jsx'
import Header from './components/common/Header.jsx'
import Footer from './components/common/Footer.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />

            </Routes>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
)
