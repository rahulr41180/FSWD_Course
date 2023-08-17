
import { Layout } from "../../components/Layout/Layout";

import { AdminMainu } from "../../components/Layout/AdminMainu";

export const AdminCreateProduct = () => {

    return (
        <Layout title={"Create Product | rR e-Com"}>
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminMainu />
                    </div>
                    <div className="col-md-9">
                        <h3>Create Product</h3>
                    </div>
                </div>
            </div>
        </Layout>
    )

}