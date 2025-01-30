import "./style.scss"

const Addreses = () => {
    return ( 
        <div class="addresses">
            <h1 class="addresses__name">Наши филиалы представлены в Минске и Витебске</h1>
            <div class="addresses__container">
                <div class="addresses__blocks">
                    <div class="addresses__block">
                        <div class="addresses__block__title">
                            <h2 class="addresses__block__name">ТЦ «Скала»</h2>
                            <span class="addresses__block__time">с 10 до 22 ежедневно</span>
                        </div>
                        <div class="addresses__block__address">
                            <span class="addresses__block__address">Минск, ул. Петра Глебки, 5<br/>+375 25 520 20 02</span>
                        </div>
                    </div>
                    <div class="addresses__block">
                        <div class="addresses__block__title">
                            <h2 class="addresses__block__name">ТЦ «Аутлет»</h2>
                            <span class="addresses__block__time">с 10 до 22 ежедневно</span>
                        </div>
                        <div class="addresses__block__address">
                            <span class="addresses__block__address">Минск, просп. Жукова, 44<br/>+375 25 520 20 02</span>
                        </div>
                    </div>
                    <div class="addresses__block">
                        <div class="addresses__block__title">
                            <h2 class="addresses__block__name">ТРЦ «Палаццо»</h2>
                            <span class="addresses__block__time">с 10 до 22 ежедневно</span>
                        </div>
                        <div class="addresses__block__address">
                            <span class="addresses__block__address">Минск, ул. Тимирязева, 74А<br/>+375 25 520 20 02</span>
                        </div>
                    </div>
                    <div class="addresses__block">
                        <div class="addresses__block__title">
                            <h2 class="addresses__block__name">ТРЦ «ТРИО»</h2>
                            <span class="addresses__block__time">с 10 до 22 ежедневно</span>
                        </div>
                        <div class="addresses__block__address">
                            <span class="addresses__block__address">Витебск, просп. Строителей, 15В<br/>+375 25 520 20 02</span>
                        </div>
                    </div>
                    <div class="addresses__block">
                        <div class="addresses__block__title">
                            <h2 class="addresses__block__name">БЦ «Марко-Сити»</h2>
                            <span class="addresses__block__time">с 10 до 22 ежедневно</span>
                        </div>
                        <div class="addresses__block__address">
                            <span class="addresses__block__address">Витебск, ул. Ленина, 26А<br/>+375 25 520 20 02</span>
                        </div>
                    </div>
                </div>
                <div class="addresses__map">
                    <iframe class="addresses__map" src="https://yandex.ru/map-widget/v1/?um=constructor%3Acd1639e2c3f0039619db2f5d66995259a271832364539107c0bb4e0b074a4c6f&amp;source=constructor" width="802" height="563" frameborder=""></iframe>
                </div>
            </div>
        </div>
    );
}

export default Addreses;