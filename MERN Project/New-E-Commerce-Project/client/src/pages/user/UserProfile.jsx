
import { Layout } from "../../components/Layout/Layout";

import { UserMainu } from "../../components/Layout/UserMainu";

export const UserProfile = () => {

    return (
        <Layout title={"Your Profile | rR e-Com"}>
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3">

                        <UserMainu />
                    </div>
                    <div className="col-md-9">
                        <h1>Your Profile</h1>
                    </div>
                </div>
            </div>
        </Layout>
    )

}