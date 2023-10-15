
import Resume from "../../Assets/RahulRathorResume.pdf"

export const CTA = () =>{

    return (
        <div className="cta">
            <a href={Resume} download className="btn">Download Resume</a>
            <a href="#contact" className="btn btn-primary">Hire Me</a>
        </div>
    )
}