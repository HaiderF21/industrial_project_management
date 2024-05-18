// Navigation.js

import React from "react";
import Link from "next/link";
import "../CSS/Navigation.css";

export default function Navigation() {
  return (
    <div className="navbar">
      <div className="logo">{/* Add your logo image or text here */}</div>
      {/* <input type="checkbox" id="active" />
      <label htmlFor="active" className="menu-btn"><i className="fas fa-bars"></i></label> */}
      <nav className="menu">
        <ul className="menu-items">
          <li>
            <Link href="../components/projectform" legacyBehavior>
              <a>Project Form</a>
            </Link>
          </li>
          <li>
            <Link href="../components/feedback" legacyBehavior>
              <a>Submit Feedback</a>
            </Link>
          </li>
          <li>
            <Link href="../components/projecttable" legacyBehavior>
              <a>Projects</a>
            </Link>
          </li>
          <li>
            <Link href="../components/feedbackdisplay" legacyBehavior>
              <a>Feedbacks</a>
            </Link>
          </li>
          <li>
            <Link href="../components/login" legacyBehavior>
              <a>Login</a>
            </Link>
          </li>
          <li>
            <Link href="http://localhost:3030/" legacyBehavior>
              <a>Sign Up</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
