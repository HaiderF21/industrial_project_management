/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import "../signup.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Navigation from '../Navigation';

import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
export default function login() {
  const router = useRouter();
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const api = "http://localhost:3002";


  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await fetch(api+"/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Email: email,
          password: pass,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token); // Store token in localStorage
      router.push("/components/home");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <Navigation />
      <section className="container">
        <div className="login-container">
          <div className="circle circle-one"></div>
          <div className="form-container">
            <img
              src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png"
              alt="illustration"
              className="illustration"
            />
            <h1 className="opacity">LOGIN</h1>
            <form onSubmit={handleSubmit}>
              <input
                onChange={(e) => setemail(e.target.value)}
                type="email"
                placeholder="EMAIL: (f219516@cfd.nu.edu.pk)"
              />
              <input
                onChange={(e) => setpass(e.target.value)}
                type="password"
                placeholder="PASSWORD"
              />
              <button type="submit" className="opacity">
                SUBMIT
              </button>
            </form>
            <div className="register-forget opacity">
              {/* <a href="http://localhost:3000/">SIGNUP</a>
              <a href="">FORGOT PASSWORD</a> */}
              <LoginLink>Sign in</LoginLink>

<RegisterLink>Sign up</RegisterLink>
            </div>
          </div>
          <div className="circle circle-two"></div>
        </div>
        <div className="theme-btn-container"></div>
      </section>
    </>
  );
}