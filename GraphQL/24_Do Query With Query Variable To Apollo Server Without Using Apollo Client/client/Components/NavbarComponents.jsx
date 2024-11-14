
import { Link } from "react-router-dom";

export const NavbarComponent = () => {

    return (
        <div className="">
            <nav>
                <div className="nav-wrapper #673ab7 deep-purple">
                    <Link to={"/"} className="left brand-logo">Comment App</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to={"/login"}>LogIn</Link></li>
 
                        <li><Link to={"/signup"}>SignUp</Link></li>
                        <li><Link to={"/profile"}>Profile</Link></li>
                        <li><Link to={"/create-comment"}>Create Comment</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}