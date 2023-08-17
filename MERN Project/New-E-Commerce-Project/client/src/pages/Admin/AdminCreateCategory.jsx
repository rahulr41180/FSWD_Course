
import { Layout } from "../../components/Layout/Layout";

import { AdminMainu } from "../../components/Layout/AdminMainu";

export const AdminCreateCategory = () => {

    return (
        <Layout title={"Create Category | rR e-Com"}>
            <div className="container-fluid m-3 p-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminMainu />
                    </div>
                    <div className="col-md-9">
                        <h3>Create Category</h3>
                    </div>
                </div>
            </div>
        </Layout>
    )

}