// Home.js
"use client";
import Navigation from "./components/Navigation";
import Signup from "./components/signup";
import './CSS/home.css'; // Import CSS module for custom styles

export default function Home() {
  return (
    <>
      {/* <Navigation /> */}
      
      <div className="container">
        <h1 className="title">Welcome to My Industrial Project System!</h1>
        <Signup />
      </div>
    </>
  );
}
