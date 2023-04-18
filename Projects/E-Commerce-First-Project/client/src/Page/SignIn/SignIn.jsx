
import { Container } from "./SignInStyle"

export const SignIn = () => {

    return (
        <Container>
            <h3 className="logoName">Create Account</h3>
            <form action="">
                <input type="text" name="" id="" placeholder="Full Name" />
                <input type="email" name="" id="" placeholder="Email Id" />
                <input type="number" name="" id="" placeholder="Mobile Number" />

                <select name="" id="">
                    <option value="">Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>

                <input type="text" name="" id="" placeholder="New Password" />
                <input type="text" name="" id="" placeholder="Confirm Password" />
                <button type="submit">Submit</button>
            </form>
        </Container>
    )

}