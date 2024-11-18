
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

    /* 
        useMutation is used to make POST, PUT, DELETE mutation query to Apollo Server.
        useMutation return us two things in array first one is a function or method that we can call whenever we need
        We can pass a variable throgh that method in our case the method is signUpUserFn() method
        What type of variable we can passed we can passed variable that is present in mutation query which I written in createNewUser mutation
        and which is $userInputData.
        useMutation has second things is object and that object have { data, loading, error } and that data will have the data which 
        will be written by Apollo Server after successfull of the mutation query.
        error we will also get from mutation query
        loading will be true untill successfull of the mutation query
    */
    const [signUpUserFn, { data, loading, error }] = useMutation(gqlmutation.SIGNUP_NEW_USER);
    console.log('data:', data)
    console.log('error:', error)

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // Here we just have to called the function and passed the data to mutation query.
        // When we hit this query automatically useMutation() query start query to Apollo Server

        /* 
            We can't send the formData directly through signUpUserFn because first we have to defined a query variable into our mutation query 
            which is $userInputData but still we can't defined a $userInputData in object directly instead we have to defined $userInputData
            into variable property and variable property is an a object property.
        */
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