import "./style.scss"

import example1 from "../../../img/examples/1.png"
import example2 from "../../../img/examples/2.png"
import example3 from "../../../img/examples/3.png"
import example4 from "../../../img/examples/4.png"
import example5 from "../../../img/examples/5.png"
import example6 from "../../../img/examples/6.png"
import example7 from "../../../img/examples/7.png"
import example8 from "../../../img/examples/8.png"

const Examples = () => {
    return (  
        <div class="examples">
            <span class="examples__text">Примеры работ</span>
            <div class="examples__images">
                <div class="examples__images__half">
                    <img class="example" src={example1} alt=""/>
                    <img class="example" src={example2} alt=""/>
                    <img class="example" src={example3} alt=""/>
                    <img class="example" src={example4} alt=""/>
                </div>
                <div class="examples__images__half">
                    <img class="example" src={example5} alt=""/>
                    <img class="example" src={example6} alt=""/>
                    <img class="example" src={example7} alt=""/>
                    <img class="example" src={example8} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Examples;