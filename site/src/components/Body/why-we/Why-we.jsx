import "./style.scss"

import quality from "../../../img/why-we/quality.svg"
import experience from "../../../img/why-we/experience.svg"
import guarantee from "../../../img/why-we/guarantee.svg"
import speed from "../../../img/why-we/speed.svg"

const WhyWe = () => {
    return ( 
        <div class="why-we">
            <span class="why-we__name">Почему стоит выбрать нас?</span>
            <div class="why-we__blocks">
                <div class="why-we__block">
                    <img src={quality} class="why-we__image" alt=""/>
                    <div class="why-we__block-texts">
                        <span class="why-we__block__name">Качество</span>
                        <span class="why-we__block__text">Только проверенные<br/>материалы премиум класса</span>
                    </div>
                </div>
                <div class="why-we__block">
                    <img src={experience} class="why-we__image" alt=""/>
                    <div class="why-we__block-texts">
                        <span class="why-we__block__name">Опыт</span>
                        <span class="why-we__block__text">5+ лет профессиональной<br/>установки защитных пленок</span>
                    </div>
                </div>
                <div class="why-we__block">
                    <img src={guarantee} class="why-we__image" alt=""/>
                    <div class="why-we__block-texts">
                        <span class="why-we__block__name">Гарантия</span>
                        <span class="why-we__block__text">Бесплатная замена при браке<br/>или отклеивании пленки</span>
                    </div>
                </div>
                <div class="why-we__block">
                    <img src={speed} class="why-we__image" alt=""/>
                    <div class="why-we__block-texts">
                        <span class="why-we__block__name">Скорость</span>
                        <span class="why-we__block__text">Установка занимает<br/>15-20 минут</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyWe;