
import { Container } from "./LogInStyle"

import { useState, useEffect } from "react";

export const LogIn = () => {

    return (
        <Container>
            <h3 className="logoName">LogIn</h3>
            <form action="">
                <input type="email" name="" id="" placeholder="Email Id" />
                <input type="text" name="" id="" placeholder="Password" />
                <button type="submit">Submit</button>
            </form>
        </Container>
    )

}