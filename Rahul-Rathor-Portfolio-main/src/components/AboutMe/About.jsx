
import "./About.css"

import ME from "../../Assets/Motivation.jpg"

import { VscFolderActive } from "react-icons/vsc";

export const About = () =>{

    return (
        <section id = "about">
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <VscFolderActive className="about__icon" />
                            <h5>Projects</h5>
                            <small>3 Completed</small>
                        </article>
                        
                        {/* <article className="about__card">
                            <VscFolderActive className="about__icon" />
                            <h5>Projects</h5>
                            <small>3 Completed</small>
                        </article>
                        
                        <article className="about__card">
                            <VscFolderActive className="about__icon" />
                            <h5>Projects</h5>
                            <small>3 Completed</small>
                        </article> */}
                    </div>

                    <p>
                        I have completed my B.tech in Mechanical Engineering in 2021. I have always been interested in the IT sector as I have realised that technology keeps on evolving in IT sector.
                        Till now I have learned many technology by exploring my skills in HTML, CSS, JavaScript, Mongodb, Node.js, Express.js, Rest API, Bootstrap 5, ES6, EJS. Also I have learned Data 
                        Structures and Algorithms and I am good at Data Structures and Algorithms. I have always being improving soft skills like Time Management, Team Management, Creative Problem Solving 
                        and learning new Programming Language and Data Structure and Algorithms.
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>

                <div className="about__me">

                    <div className="about__me-image">
                        <img src={ME} alt="" />
                    </div>
                </div>

            </div>
        </section>
    )
}