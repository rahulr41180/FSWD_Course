
import { useState } from "react";
import "../App.css"
import { Link, useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name] : value
        })
        
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log('formData:', formData)
            
        } catch(error) {

        }
    }

    return (
        <div className="container myContainer">
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