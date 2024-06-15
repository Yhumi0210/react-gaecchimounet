//import { useState } from 'react'
import logo from '../../assets/img/logos/logomainseul60px.webp' // Assurez-vous que le chemin d'accès est correct
// import './js/menuburger.js' // Si vous avez converti votre script en module compatible avec React

function Header() {
    // // Création de l'état pour contrôler l'ouverture du menu
    // const [isMenuOpen, setIsMenuOpen] = useState(false)
    //
    // // Fonction pour ouvrir le menu
    // const openMenuMobile = () => {
    //     setIsMenuOpen(true)
    // }
    //
    // // Fonction pour fermer le menu
    // const closeMenuMobile = () => {
    //     setIsMenuOpen(false)
    // }

    return (
        <div>
            {/*<div className={`overlay-menu-mobile ${isMenuOpen ? 'open' : ''}`} onClick={closeMenuMobile}>
            </div>*/}
            <header className="navBar">
                <div className="logo">
                    <a href="https://gaecchimounet.fr" className="backgroundleft">
                        <img className="logo__img" src={logo} alt="logo gaec chimounet" />
                    </a>
                    <a href="https://gaecchimounet.fr" className="logo__typo">Gaec Chimounet</a>
                </div>
                <nav>
                    {/*<div className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                             stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>*/}
                    <ul className="navBar__link">
                        <li><a href="https://gaecchimounet.fr">Accueil</a></li>
                        <li><a href="https://gaecchimounet.fr/galerie.html">Galerie</a></li>
                        <li><a href="https://gaecchimounet.fr/recettes.html">Recettes</a></li>
                        <li><a href="https://gaecchimounet.fr/apropos.html">À Propos</a></li>
                        <li><a href="https://gaecchimounet.fr/contact.html">Contactez-nous</a></li>
                    </ul>
                </nav>
                {/*<div className="header-burger" onClick={openMenuMobile}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                </div>*/}
            </header>
        </div>
    )
}

export default Header