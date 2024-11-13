
import { useState } from "react";
import "../App.css"

export const SignUpPage = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })


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
            <h5>SignUp!!</h5>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required/>
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required/>
                <input type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} required />
                <button className="btn #673ab7 deep-purple" type="submit">SignUp</button>
            </form>
        </div>
    )
}