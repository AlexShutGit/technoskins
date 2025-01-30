import "./style.scss"

import coupon from "../../../img/coupon.png"

const BannerCoupon = () => {
    return ( 
        <div class="banner__coupon">
            <img src={coupon} alt="" class="banner__image"/>
            <div class="banner__texts">
                <h1 class="banner__texts__name">Мы предлагаем<br/>скидку 15%</h1>
                <span class="banner__texts__text">На повторную услугу для ранее обсуживаемого<br/>устройства.</span>
            </div>
        </div>
    );
}

export default BannerCoupon;