import "./style.scss"

import Navbar from "./navbar/Navbar";

import telegram from "../../img/telegram.svg"
import insta from "../../img/insta.svg"

const Header = () => {
    return ( 
        <div className="wrapper-header">
            <div className="header">
                <div className="logo">
                    <span className="logo">Technoskins</span>
                </div>
                <div className="time__job">
                    <div className="number-time">
                        <div className="number">+375 29 123 45 78</div>
                        <div className="time">ежедневно</div>
                    </div>
                <div  className="socials">
                    <img src={telegram} alt="" />
                    <img src={insta} alt="" />
                </div>
                </div>
                <Navbar/>
            </div>
        </div> 
    );
}

export default Header;