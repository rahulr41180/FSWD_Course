
import { Layout } from "../../components/Layout/Layout";

import { UserMainu } from "../../components/Layout/UserMainu";

export const UserOrders = () => {

    return (
        <Layout title={"Your Orders | rR e-Com"}>
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3">

                        <UserMainu />
                    </div>
                    <div className="col-md-9">
                        <h1>All Orders</h1>
                    </div>
                </div>
            </div>
        </Layout>
    )

}