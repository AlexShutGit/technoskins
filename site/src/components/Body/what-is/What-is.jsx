import "./style.scss"

import WhatIsImg from "../../../img/what-is.png"

const WhatIs = () => {
    return ( 
        <div class="what-is">
            <img src={WhatIsImg} alt="" class="what-is__image"/>
            <div class="what-is__texts">
                <h1 class="what-is__texts__name">
                    Что такое<br/>
                    полиуретановая<br/>
                    пленка?<br/>
                </h1>
                <span class="what-is__texts__text">
                    Полиуретан — это высококачественный материал,<br/>
                    используемый для защиты экранов мультимедиа<br/>
                    от царапин, пыли и повреждений. Он сохраняет<br/>
                    прозрачность и долговечен, что делает его<br/>
                    идеальным выбором для защиты экранов<br/>
                    различных гаджетов.
                    <br/><br/>
                    Мы оклеили более 1000 экранов устройств, и<br/>
                    каждый наш клиент остался доволен!
                </span>
            </div>
        </div>
    );
}

export default WhatIs;