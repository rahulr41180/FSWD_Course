
import "./Header.css";
import { CTA } from "./CTA"
import { HeaderSocial } from "./HeaderSocials";
import ME from "../../Assets/IMG_6638.jpg";

export const Header = () =>{

    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Rahul Rathor</h1>
                <h5 className="text-light">Full-Stack Web Developer</h5>

                <CTA />
                <HeaderSocial />
                <div className="me">
                    <img src={ME} alt="" />
                </div>
                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    )
}