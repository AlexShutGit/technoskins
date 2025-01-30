import "./style.scss"

import yourChoice from "../../../img/your-choice.png"

const OnlyYourChoice = () => {
    return ( 
        <div class="only-your-choice">
            <h1 class="only-your-choice__name">Выбор пленки только за вами!</h1>
            <div class="only-your-choice__container">
                <div class="only-your-choice__blocks">
                    <div class="only-your-choice__block">
                        <h2 class="choice__block__name">Матовая</h2>
                        <span class="choice__block_text">+ Антибликовый эффект</span>
                        <span class="choice__block_text">+ Отсутствуют отпечатки пальцев</span>
                        <span class="choice__block_text">+ Защита от царапин</span>
                        <span class="choice__block_text">+ Снижение усталости глаз</span>
                        <span class="choice__block_text">+ Сохранение чувствительности экрана</span>
                    </div>
                    <div class="only-your-choice__block">
                        <h2 class="choice__block__name">Глянцевая</h2>
                        <span class="choice__block_text">+ Яркость и контрастность</span>
                        <span class="choice__block_text">+ Защита от царапин и повреждение</span>
                        <span class="choice__block_text">+ Легкость очистки</span>
                        <span class="choice__block_text">+ Высокая чувствительность</span>
                        <span class="choice__block_text">+ Сохранение оригинального вида</span>
                    </div>
                </div>
                    <img class="choice__img" src={yourChoice} alt=""/>
            </div>
        </div>
    );
}

export default OnlyYourChoice;