import "./style.scss"

import defenceYourPhone from "../../../img/defence-your-phone.png"

const BannerDefence = () => {
    return ( 
        <div class="banner-defence-your-phone">
            <img src={defenceYourPhone} alt="" class="banner-defence-your-phone__image"/>
            <div class="banner-defence-your-phone__texts">
                <h1 class="banner-defence-your-phone__texts__name">Защити экран своего гаджета<br/>от царапин и повреждений</h1>
                <div class="button-white">Записаться сейчас</div>
            </div>
        </div>
    );
}

export default BannerDefence;