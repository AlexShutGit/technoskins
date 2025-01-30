import "./style.scss"

import imageWithoutName from "../../../img/imageWithoutName.png"

const Garanties = () => {
    return ( 
        <div class="garanties">
            <div class="garanties__texts">
                <h1 class="garanties__texts__name">
                    Мы даём гарантию<br/>
                    30 дней c момента<br/>установки
                </h1>
                <span class="garanties__texts__text">
                    Мы предоставляем гарантию на выполненные работы<br/>(оклейку вручную), так и на саму плёнку. В случае<br/>отклеивания плёнки или образования пузырей мы<br/>бесплатно устраним эти дефекты.<br/><br/>После нанесения плёнки могут остаться небольшие<br/>пузырьки, которые полностью исчезнут сами собой<br/>в течении 48 часов.<br/><br/>Важно: гарантия не распространяется на<br/>механические повреждения!
                </span>
            </div>
            <img src={imageWithoutName} alt="" class="garanties__image"/>
        </div>
    );
}

export default Garanties;