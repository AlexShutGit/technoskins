import "./style.scss";

import Trailer from "./trailer/Trailer";
import Examples from "./examples/Examples";
import WhyWe from "./why-we/Why-we";
import Garanties from "./garanties/Garanties";
import BannerCoupon from "./banner-coupon/Banner-coupon";
import Advantages from "./advantages/Advantages";
import PriceList from "./price-list/Price-list";
import BannerDefence from "./banner-defence/Banner-defence";
import WhatIs from "./what-is/What-is";
import OnlyYourChoice from "./only-your-choice/Only-your-choice";
import Answers from "./answers/Answers";
import Addreses from "./addresses/Adresses";

const Body = () => {
    return ( 
        <div class="container">
            <div class="wrapper-body">
                <Trailer/>
                <Examples/>
                <WhyWe/>
                <Garanties/>
                <BannerCoupon/>
                <Advantages/>
                <PriceList/>
                <BannerDefence/>
                <WhatIs/>
                <OnlyYourChoice/>
                <Answers/>
                <Addreses/>
            </div>
        </div>
    );
}

export default Body;