
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const NavbarComponent = () => {
    const token = localStorage.getItem("gqlCourseToken");
    console.log('token:', token)
    const navigate = useNavigate();
    return (
        <div className="">
            <nav>

                <div className="nav-wrapper #673ab7 deep-purple">
                    <Link to={"/"} className="left brand-logo">Comment App</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {
                            token ? (
                                <>
                                    <li><Link to={"/profile"}>Profile</Link></li>
                                    <li><Link to={"/create-comment"}>Create Comment</Link></li>
                                    <li><button className="red btn" onClick={() => {
                                        localStorage.removeItem("gqlCourseToken")
                                        navigate("/login")
                                    }}>LogOut</button></li>
                                </>
                            ) : (
                                <>
                                    <li><Link to={"/login"}>LogIn</Link></li>
                                    <li><Link to={"/signup"}>SignUp</Link></li>
                                </>
                            )
                        }
                    </ul>
                </div>
            </nav>
        </div>
    )
}