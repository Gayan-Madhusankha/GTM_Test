import React from "react";
import TrackButtonClick from "./button-clicks";
import { useNavigate } from "react-router-dom";

function AboutPage() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/');
    }
  return (
    <>
      <div>About Page</div>
      <TrackButtonClick />
      <button onClick={handleNavigate}>Goto Home</button>
    </>
  );
}

export default AboutPage;
