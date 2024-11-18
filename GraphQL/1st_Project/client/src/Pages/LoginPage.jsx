
import { useState } from "react";
import "../App.css"
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import gqlmutation from "../GQLOperations/gqlmutation";

export const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate();

    const [loginUserFn, { data, loading, error }] = useMutation(gqlmutation.LOGIN_USER, {
        onCompleted(data) {
            console.log('data:', data)
            localStorage.setItem("gqlCourseToken", JSON.stringify(data?.user));
            navigate("/")
        }
    });
    console.log('error:', error)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name] : value
        })
        
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        loginUserFn({
            variables: {
                userInputData: formData
            }
        })
    }
    // if(data) {
    //     localStorage.setItem("gqlCourseToken", data?.user.token)
    //     navigate("/")
    // }

    if (loading) return (
        <div>
            <h1>Loading....</h1>
        </div>
    )
    return (
        <div className="container myContainer">
            {error && (
                <div className="red card-panel">
                    {error.message}
                </div>
            )}
            <h5>Login!!</h5>
            <form action="" onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} required />
                {
                    <Link to={"/signup"}><p>Don't have an account?</p></Link>
                }
                <button className="btn #673ab7 deep-purple" type="submit">Login</button>
            </form>
        </div>
    )
}