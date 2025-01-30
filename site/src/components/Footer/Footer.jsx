import "./style.scss"

import telegram from "../../img/telegram.svg"
import insta from "../../img/insta.svg"

const Footer = () => {
    return ( 
        <div class="footer">
            <div class="footer__container">
                <div class="footer-blocks">
                    <div class="footer-blocks__block">
                        <span class="footer-blocks__block-logo">Technoskins</span>
                        <span class="footer-blocks__block-info">
                        ООО «Техноскинс» УНП 1234567890 Юридический адрес - 220020, Республика Беларусь, г. Минск, пр-т Победителей, д. 84, помещение 2
                        </span>
                    </div>
                    <div class="footer-blocks__block">
                        <span class="footer-blocks__block-text">Гарантия</span>
                        <span class="footer-blocks__block-text">Прайс-лист</span>
                        <span class="footer-blocks__block-text">Политика конфиденциальности</span>
                        <span class="footer-blocks__block-text">Договор публичной оферты</span>
                    </div>
                    <div class="footer-blocks__block">
                        <span class="footer-blocks__block-text">Про бронепленку</span>
                        <span class="footer-blocks__block-text">Преимущества пленки</span>
                        <span class="footer-blocks__block-text">Частые вопросы</span>
                        <span class="footer-blocks__block-text">Почему стоит выбрать нас</span>
                    </div>
                    <div class="footer-blocks__block">
                        <span class="footer-blocks__block-text">+375 25 520 20 02</span>
                        <span class="footer-blocks__block-text">info@technoskins.by</span>
                        <div  class="socials">
                            <img src={telegram} alt="" />
                            <img src={insta} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;