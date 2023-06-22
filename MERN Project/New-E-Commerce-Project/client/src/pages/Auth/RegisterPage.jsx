
import { Layout } from "../../components/Layout/Layout"

import "../../css/RegisterPage.css";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const RegisterPage = () => {

    const [formData, setFormData] = useState({
        name : "",
        email : "",
        password : "",

        address : "",
        phone : ""
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log('value:', value)
        console.log('name:', name)


        setFormData({
            ...formData,
            [name] : value
        })
    }
    
    // Form Function
    
    const handleSubmit = (event) => {
        console.log("event : ", event)
        event.preventDefault();
        console.log("formData : ", formData);
        toast.success("Register Successfully..");
    }

    return (
        <Layout title={"Register | rR e-Com"}>
            <div className="register">
                <h4>Register</h4>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input required onChange={handleChange} value={formData.name} type="text" className="form-control" name="name" placeholder="Full Name" />
                    </div>
                    <div className="mb-3">
                        <input required onChange={handleChange} value={formData.email} type="email" className="form-control" name="email" placeholder="Email" />
                    </div>
                    <div className="mb-3">

                        <input required onChange={handleChange} value={formData.password} type="password" className="form-control" name="password" placeholder="Password" />
                    </div>
                    <div className="mb-3">   
                        <input required onChange={handleChange} value={formData.phone} type="number" className="form-control" name="phone" placeholder="Number" />
                    </div>
                    <div className="mb-3">
                        <input required onChange={handleChange} value={formData.address} type="text" className="form-control" name="address" placeholder="Address" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </Layout>
    )

}