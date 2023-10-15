
import "./Experience.css"

import { BsPatchCheckFill } from "react-icons/bs"

export const Experience = () =>{

    return (
        <section id = "experience">
            <h5>What Tech Skills I Have</h5>
            <h2>My Skills</h2>

            <div className="container experience__container">

                <div className="experience__frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className= "experience-details-icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className= "experience-details-icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className= "experience-details-icon" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className= "experience-details-icon" />
                            <div>
                                <h4>Bootstrap 5</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className= "experience-details-icon" />
                            <div>
                                <h4>EJS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className= "experience-details-icon" />
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className= "experience-details-icon" />
                            <div>
                                <h4>Redux</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className= "experience-details-icon" />
                            <div>
                                <h4>MaterialUi</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>



                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className= "experience-details-icon" />
                            <div>
                                <h4>Node.JS</h4>
                                <small className="text-light">Intermediate</small>

                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className= "experience-details-icon" />
                            <div>
                                <h4>MongoDB</h4>
                                <small className="text-light">Intermediate</small>

                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className= "experience-details-icon" />
                            <div>
                                <h4>Express.JS</h4>
                                <small className="text-light">Intermediate</small>

                            </div>
                        </article>
                        <article className="experience__details">
                            <BsPatchCheckFill className= "experience-details-icon" />
                            <div>
                                <h4>Redis</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>

            </div>
        </section>
    )
}