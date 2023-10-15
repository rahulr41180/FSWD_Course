
import "./Education.css"

import { AiTwotoneTrophy } from "react-icons/ai";

import EducationImage from "../../Assets/Education.jpg"

// npm i react-typical --legacy-peer-deps

import Typical from 'react-typical'

export const Education = () =>{

    return (
        <section id = "education">
            <h5>What Achievement I have</h5>
            <h2>Education</h2>

            <div className="container education__container">
                <div className="education__content">
                    <div className="education__Full-Stack-Web-Development">
                        <div className="education__Full-Stack-Web-Development-icone">
                            <AiTwotoneTrophy />
                            <p>Full-Stack Web Development(MERN Stack)</p>
                        </div>
                        <p className="education__Full-Stack-Web-Development-contect">

                            Currently I am doing a Full-Stack Web Development course from Masai School.
                        </p>
                        <h4 className="education__Full-Stack-Web-Development-contect-skills">
                            {" "}
                            <Typical 
                                loop = {Infinity}
                                steps = {[
                                    `Ethusiastic Dev 👨‍🎓`,
                                    1000,
                                    `Full-Stack Web Developer 👨‍🎓`,
                                    1000,
                                    `MERN Stack Dev 👨‍🎓`,
                                    1000,
                                    `Good team collaboration 👨‍🎓`,
                                    1000,
                                    `React Dev 👨‍🎓`,
                                    1000,
                                ]}
                            />
                        </h4>
                    </div>

                    <div className="education__BTech-Mechanical-Engineering">
                        <div className="education__Full-Stack-Web-Development-icone">
                            <AiTwotoneTrophy />
                            <p>B.Tech(Mechanical Engineering)</p>
                        </div>
                        <p className="education__Full-Stack-Web-Development-contect">
                            I have completed my B.Tech degree in Mechanical Engineering from Bharat Institute of Technology in Meerut (Uttar Pradesh) in 2021.
                        </p>
                    </div>
                </div>

                <div className="education__image">
                    <div className="education__image-logo">
                        <img src={EducationImage} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}