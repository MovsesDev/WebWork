import logo1 from "../../assets/img/svg/logo1.svg"
import youtube from '../../assets/img/svg/youtube-icon.svg'
import linkedIn from '../../assets/img/svg/linkedIn-icon.svg'
import twitter from '../../assets/img/svg/twitter-icon.svg'
import social from '../../assets/img/svg/social-icon.svg'
import facebook from '../../assets/img/svg/facebook-icon.svg'
import footerVector from '../../assets/img/svg/footer-vector.svg'
import './Footer.css'

const Footer = (props) => {
    return (
        <footer class="footer">
                <div class="footer__top">
                    <div class="footer__main _container">
                        <div class="footer__row">
                            <div class="footer__column">
                                <div class="footer__title">Time Tracking Software</div>
                                <nav class="footer__menu">
                                    <ul class="footer__menu_list">
                                        <li class="footer__menu_item"><a href='' class='footer__menu_link'>Features</a>
                                        </li>
                                        <li class="footer__menu_item"><a href='' class='footer__menu_link'>Pricing</a>
                                        </li>
                                        <li class="footer__menu_item"><a href='' class='footer__menu_link'>Start free
                                                trial</a></li>
                                        <li class="footer__menu_item"><a href='' class='footer__menu_link'>Time with
                                                screenshots</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="footer__column">
                                <div class="footer__title">Integration</div>
                                <nav class="footer__menu">
                                    <ul class="footer__menu_list">
                                        <li class="footer__menu_item"><a href='' class='footer__menu_link'>Asana</a>
                                        </li>
                                        <li class="footer__menu_item"><a href='' class='footer__menu_link'>Jira</a></li>
                                        <li class="footer__menu_item"><a href='' class='footer__menu_link'>Bitbucket</a>
                                        </li>
                                        <li class="footer__menu_item"><a href='' class='footer__menu_link'>See all</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="footer__column">
                                <div class="footer__title">Powerful Yet Simple</div>
                                <nav class="footer__menu">
                                    <ul class="footer__menu_list">
                                        <li class="footer__menu_item"><a href='' class='footer__menu_link'>Monitor
                                                Employees</a></li>
                                        <li class="footer__menu_item"><a href='' class='footer__menu_link'>Boost
                                                Productivity</a></li>
                                        <li class="footer__menu_item"><a href='' class='footer__menu_link'>How to save
                                                time</a></li>
                                        <li class="footer__menu_item"><a href='' class='footer__menu_link'>Download
                                                tracker</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="footer__column">
                                <div class="footer__title">Resources</div>
                                <nav class="footer__menu">
                                    <ul class="footer__menu_list">
                                        <li class="footer__menu_item"><a href='' class='footer__menu_link'>Sitemap</a>
                                        </li>
                                        <li class="footer__menu_item"><a href='' class='footer__menu_link'>Privacy
                                                Policy</a></li>
                                        <li class="footer__menu_item"><a href='' class='footer__menu_link'>Terms of
                                                service</a></li>
                                        <li class="footer__menu_item"><a href='' class='footer__menu_link'>Contact Us
                                            </a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer__bottom">
                    <div class="footer__bottom_container _container">
                        <div class="footer__body">
                            <div class="footer__combined">
                                <div class="footer__logo">
                                    <img src={logo1} alt="logo1"/>
                                </div>
                                <div class="footer__vector">
                                    <img src={footerVector} alt="vector"/>
                                </div>
                                <div class="footer__text">
                                    2021
                                </div>
                            </div>
                            <div class="footer__icons">
                                <div class="footer__social">
                                    <a href="" class="social__icon">
                                        <img src={youtube} alt="social"/>
                                    </a>
                                    <a href="" class="social__icon">
                                        <img src={social} alt="social"/>
                                    </a>
                                    <a href="" class="social__icon">
                                        <img src={facebook} alt="social"/>
                                    </a>
                                    <a href="" class="social__icon">
                                        <img src={twitter} alt="social"/>
                                    </a>
                                    <a href="" class="social__icon">
                                        <img src={linkedIn} alt="social"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    )
}

export default Footer