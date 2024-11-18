
import { useState } from "react";
import "../App.css"
import { Link } from "react-router-dom";
import gqlmutation from "../GQLOperations/gqlmutation";
import { useMutation } from "@apollo/client";

export const SignUpPage = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const [signUpUserFn, { data, loading, error }] = useMutation(gqlmutation.SIGNUP_NEW_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('formData:', formData)
        // signUpUserFn(formData)
        signUpUserFn({
            variables: {
                userInputData: formData
            }
        })
    }

    if (loading) return (
        <div>
            <h1>Loading....</h1>
        </div>
    )
    return (
        <div className="container myContainer">
            {error && (<div className="red card-panel">
                {error.message}
            </div>)}
            {data && data?.user && (
                <div className="green card-panel">
                    {data?.user.firstName} is successfully SignedUp. You can logIn now!
                </div>
            )}
            <h5>SignUp!!</h5>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} required />
                {
                    <Link to={"/login"}><p>Have an account?</p></Link>
                }
                <button className="btn #673ab7 deep-purple" type="submit">SignUp</button>
            </form>
        </div>
    )
}