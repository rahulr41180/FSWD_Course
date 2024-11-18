
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

    /* 
        Instead of set the token by using if() condition we can set the token in localStorage when useMutation query successfully done 
        means we have onCompleted method in the second argument of useMutation();
        in the second argument I have an onCompleted method means onCompleted is a function in the onCompleted function 
        I have data as their in the first argument.
        means when the useMutation query done at that time onCompleted function call.
    */

    const [loginUserFn, { data, loader, error }] = useMutation(gqlmutation.LOGIN_USER, {
        onCompleted(data) {
            localStorage.setItem("gqlCourseToken", data?.user.token);
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

    if (loader) return (
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