import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./success.css";
const Success = () => {
  return (
    <>
      <Navbar />
      <div className="success">
        <div className="sContainer">
          <h1>We've received your payment. Gracias</h1>
          <p>
            Thank you for your partnership with Pestana Hotel Group and Cristiano Ronaldo.
          </p>
        </div>
      </div>
    </>
  );
};

export default Success;
