
import { Container, Logo, SingIn, LogIn } from "./NavbarStyle";

import logoImage from "../../Assets/Logo-2.PNG";
import { Link, useParams } from "react-router-dom";

export const Navbar = (props) => {
    console.log('props:', props)
    return (
        <Container>
            <Logo>
                <Link to="/">
                    <img src={logoImage} alt="" />
                </Link>
            </Logo>
            {props.page === "signIn" ?
                <LogIn page = {"signIn"}>
                    <button>
                        <Link to="/user/logIn">
                            LogIn
                        </Link>
                    </button>
                </LogIn>
                :
                props.page === "logIn" ?
                ""
                :
                <LogIn>
                    <button>
                        <Link to="/user/logIn">
                            LogIn
                        </Link>
                    </button>
                </LogIn>
                
            }

            {props.page === "signIn" ? 
                ""
                :
                <SingIn>
                    <button>
                        <Link to="/user/signIn">
                            SignIn
                        </Link>
                    </button>
                </SingIn>
            }
        </Container>
    )
}