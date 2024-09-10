import React from "react";
import TrackButtonClick from "./button-clicks";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/about');
    }
  return (
    <>
      <div>Home Page</div>
      <TrackButtonClick />
      <button onClick={handleNavigate}>Goto About</button>
    </>
  );
}

export default HomePage;
