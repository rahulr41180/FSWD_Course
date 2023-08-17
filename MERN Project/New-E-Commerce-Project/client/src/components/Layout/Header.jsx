
import react from "react";

import { NavLink, Link } from "react-router-dom";

import { FaShopware } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

export const Header = () => {

    
    const [auth, setAuth] = useAuth();

    const navigate = useNavigate();

    const handleLogOut = () => {
        setAuth({
            ...auth,
            user: null,
            token: ""
        })
        localStorage.removeItem("auth");
        toast.success("LogOut ! Successfully done")
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                        <Link to={"/"} className="navbar-brand" style={{ textTransform: "none" }}><FaShopware /> rR e-Com</Link>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to={"/"} className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={"/category"} className="nav-link">Category</NavLink>
                            </li>
                            {
                                !auth.user ? (
                                    <>

                                        <li className="nav-item">
                                            <NavLink to={"/register"} className="nav-link">Register</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to={"/login"} className="nav-link">Login</NavLink>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li className="nav-item dropdown">
                                            <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {auth?.user?.name}
                                            </NavLink>
                                            <ul className="dropdown-menu">
                                                <li><NavLink className="dropdown-item" to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}>Dashboard</NavLink></li>
                                                
                                                <li>
                                                    <NavLink onClick={handleLogOut} to={"/login"} className="dropdown-item">LogOut</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                    </>
                                )
                            }
                            <li className="nav-item">
                                <NavLink to={"/cart"} className="nav-link">Cart : [{0}]</NavLink>
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </>
    )
}