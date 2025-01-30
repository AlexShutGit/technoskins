import "./style.scss"

import defence from "../../../img/defence.png"
import invisibility from "../../../img/invisibility.png"
import versatility from "../../../img/versatility.png"
import durability from "../../../img/durability.png"
import advatagesPhone from "../../../img/advatagesPhone.png"

const Advantages = () => {
    return ( 
        <div class="advantages">
            <h1 class="advantages__name">Преимущества бронепленки</h1>
            <div class="advantages__wrapper">
                <div class="advantages__first__half">
                    <div class="advantages__block">
                        <img src={defence} alt="" class="advantages__img"/>
                        <div class="advantages__texts">
                            <span class="advantages__texts__name">Защита от ударов</span>
                            <span class="advantages__texts__text">Амортизирует удары благодаря<br/>прорезиненной основе</span>
                        </div>
                    </div>
                    <div class="advantages__block">
                        <img src={invisibility} alt="" class="advantages__img"/>
                        <div class="advantages__texts">
                            <span class="advantages__texts__name">Невидимость</span>
                            <span class="advantages__texts__text">Бронепленка не искажает цвета<br/>и сохраняет отклик сенсора</span>
                        </div>
                    </div>
                </div>

                <img src={advatagesPhone} alt="" class="advatages__image"/>

                <div class="advantages__second__half">
                    <div class="advantages__block">
                        <img src={versatility} alt="" class="advantages__img"/>
                        <div class="advantages__texts">
                            <span class="advantages__texts__name">Универсальность</span>
                            <span class="advantages__texts__text">Бронепленка подходит для<br/>защиты экрана и корпуса</span>
                        </div>
                    </div>
                    <div class="advantages__block">
                        <img src={durability} alt="" class="advantages__img"/>
                        <div class="advantages__texts">
                            <span class="advantages__texts__name">Долговечность</span>
                            <span class="advantages__texts__text">Не трескается и служит<br/>дольше защитного стекла</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Advantages;