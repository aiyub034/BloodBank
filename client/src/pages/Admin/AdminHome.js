import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
            As an Admin, you have an birds eye-view of all the Hospitals, Organizations & Users. You also have the privilige to remove any of them!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
