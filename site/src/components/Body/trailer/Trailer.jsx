import "./style.scss"

import background from "../../../img/background.jpg"
import backgroundPhone from "../../../img/backgroundPhone.png"

const Trailer = () => {
    return ( 
        <div class="trailer">
            <div class="trailer-wrapper">
                <img class="trailer-wrapper__image" src={background} alt="" />
                <img class="trailer-wrapper__image__phone" src={backgroundPhone} alt=""  />
                <h1 class="trailer-wrapper__name">Оклейка ваших<br/>устройств в поли-<br/>уретановую броне-<br/>пленку</h1>
                <div class="trailer-wrapper__bottom">
                    <div class="trailer-wrapper__bottom-button">Записаться сейчас</div>
                            <span>Защити экран своего гаджета<br/>от царапин и повреждений</span>
                    </div>
            </div>
        </div>
    );
}

export default Trailer;