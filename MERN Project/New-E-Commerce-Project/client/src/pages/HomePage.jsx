
import { Layout } from "../components/Layout/Layout";

import { useAuth } from "../context/AuthContext";

export const HomePage = () => {

    const [auth, setAuth, handleAuth] = useAuth();
    console.log('auth:', auth)

    // handleAuth("Hello World");

    return (
        <Layout title={ "Best Offers | rR e-Com"}>
            <h1>Home Page</h1>
            <div>{JSON.stringify(auth, null, 4)}</div>
        </Layout>
    )

}