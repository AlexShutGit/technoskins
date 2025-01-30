import "./style.scss"

const Answers = () => {
    return ( 
        <div class="answers">
            <h1 class="answers__name">Частые вопросы</h1>
            <div class="answers__container">
                <div class="answers__half">
                    <div class="answers__block">
                        <h2 class="answers__block__name">После снятия пленки остаются следы?</h2>
                        <span class="answers__text">Снятие виниловой и бронированной плёнки не оставляет следов клея. Вы можете менять плёнку сколько захотите.</span>
                    </div>
                    <div class="answers__block">
                        <h2 class="answers__block__name">Сколько прослужит пленка?</h2>
                        <span class="answers__text">При правильном использовании плёнка прослужит более года.<br/>
                        Наши специалисты по оклейке гаджетов проконсультируют вас об<br/>уходе за ней.</span>
                    </div>
                    <div class="answers__block">
                        <h2 class="answers__block__name">Желтеет ли материал?</h2>
                        <span class="answers__text">При правильном уходе плёнка не желтеет. Наши специалисты<br/>
                        расскажут вам, как ухаживать за плёнкой, чтобы она прослужила<br/>долго.</span>
                    </div>
                </div>
                <div class="answers__half">
                    <div class="answers__block">
                        <h2 class="answers__block__name">Защищает ли пленка от падений?</h2>
                        <span class="answers__text">Бронеплёнка имеет резиновую основу, которая амортизирует удары<br/>
                        и снижает силу удара при падении.</span>
                    </div>
                    <div class="answers__block">
                        <h2 class="answers__block__name">Пленка – это то же самое, что и чехол?</h2>
                        <span class="answers__text">Это не чехол и не стекло. Мы применяем только высококачественную<br/>
                        бронеплёнку от ведущих производителей. Плёнка лёгкая, не влияет<br/>
                        на вес и размер устройства, также при желании она легко снимается.</span>
                    </div>
                    <div class="answers__block">
                        <h2 class="answers__block__name">Можно ли снять покрытие самостоятельно?</h2>
                        <span class="answers__text">Покрытие легко снимается самостоятельно в любое время, без<br/>
                        помощи специалиста. При этом не будет ни<br/>следов клея, ни повреждений устройства.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Answers;