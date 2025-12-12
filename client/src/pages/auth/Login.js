import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "./../../components/shared/Spinner";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        // <div className="row g-0">
        //   <div className="col-md-8 form-banner">
        //     <img src="./assets/images/banner1.jpeg" alt="loginImage" />
        //   </div>
        //   <div className="col-md-4 form-container">
        //     <Form
        //       formTitle={"Login"}
        //       submitBtn={"Login"}
        //       formType={"login"}
        //     />
        //   </div>
        // </div>
        <div className="row g-0">
  <div className="col-md-8 form-banner">
    <div className="ratio ratio-16x9 h-100">
      <iframe 
        src="https://www.youtube.com/embed/Q55LrC7vijM?autoplay=1&mute=0&loop=1" 
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
  <div className="col-md-4 form-container">
    <Form
      formTitle={"Login"}
      submitBtn={"Login"}
      formType={"login"}
    />
  </div>
</div>
      )}
    </>
  );
};

export default Login;
