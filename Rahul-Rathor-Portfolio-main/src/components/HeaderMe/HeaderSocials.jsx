
import "./Header.css"

// npm install react-icons --save

import { AiFillLinkedin } from "react-icons/ai";

import { BsGithub } from "react-icons/bs"

export const HeaderSocial = () =>{

    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/rahul--rathor/" target={"_blank"}><AiFillLinkedin /></a>
            <a href="https://github.com/rahulr41180" target={"_blank"}><BsGithub /></a>
        </div>
    )
}