
import { Container } from "./SignInStyle"

export const SignIn = () => {

    const handleChange = (event) => {
        console.log("value :", event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submit");
    }

    return (
        <Container>
            <h3 className="logoName">Create Account</h3>
            <form onSubmit={handleSubmit} action="">
                <input onChange={handleChange} type="text" name="" id="text" placeholder="Full Name" />
                <input onChange={handleChange} type="email" name="" id="email" placeholder="Email Id" />
                <input onChange={handleChange} type="number" name="" id="number" placeholder="Mobile Number" />

                <select onChange={handleChange} name="" id="gender">
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>

                <input onChange={handleChange} type="text" name="" id="password" placeholder="New Password" />
                <input onChange={handleChange} type="text" name="" id="confirm-password" placeholder="Confirm Password" />
                <button type="submit">Submit</button>
            </form>
        </Container>
    )

}