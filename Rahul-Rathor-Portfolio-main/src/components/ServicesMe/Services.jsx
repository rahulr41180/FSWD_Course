
import "./Services.css"

import { AiOutlineCheckCircle } from "react-icons/ai";

export const Services = () =>{

    return (
        <section id = "service">
            <h5>What I Offer</h5>
            <h2>Services</h2>

            <div className="container services__container">

                <article className="service">
                    <div className="service__head">
                        <h3>UI/UX Design</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                    </ul>
                </article>

                {/* Web Development Start */}

                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                    </ul>
                </article>

                {/* Content */}

                


                <article className="service">
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <AiOutlineCheckCircle className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet consectetur elit.</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}