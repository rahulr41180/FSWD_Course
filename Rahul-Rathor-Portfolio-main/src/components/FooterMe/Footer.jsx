
import "./Footer.css"

import { AiFillLinkedin } from "react-icons/ai";

import { BsGithub } from "react-icons/bs"

export const Footer = ()  =>{

    return (
        <footer>
            <a href="#" className="footer__logo"></a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a target={"_blank"} href="https://www.linkedin.com/in/rahul--rathor/"><AiFillLinkedin /></a>
                <a target={"_blank"} href="https://github.com/rahulr41180"><BsGithub /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Rahul Rathor. All rights reserved.</small>
            </div>
        </footer>
    )
}