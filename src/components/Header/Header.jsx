import logo1 from '../../assets/img/svg/logo1.svg'
import './Header.css'

const Header = (props) => {
    return (
        <header class="header">
        <div class="header__container _container">
          <div class="header__logo">
            <img src={logo1} alt="Web Work" class="header__image" />
          </div>
          <nav class="header__menu menu">
            <ul class="menu__list">
              <li class="menu__item">
                <a href="#" class="menu__link">Home</a>
              </li>
              <li class="menu__item">
                <a href="#" class="menu__link">Features</a>
              </li>
              <li class="menu__item">
                <a href="#" class="menu__link">Time Tracking</a>
              </li>
              <li class="menu__item">
                <a href="#" class="menu__link">Price</a>
              </li>
              <li class="menu__item">
                <a href="#" class="menu__link">Download</a>
              </li>
              <li class="menu__item">
                <a href="#" class="menu__link">Log in</a>
              </li>
              <li class="menu__item">
                <a href="#" class="menu__link">
                  Get Started
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
}

export default Header