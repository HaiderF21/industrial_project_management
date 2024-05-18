/* eslint-disable @next/next/no-img-element */
"use client";
import { revalidatePath } from "next/cache";
import "../components/signup.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";
import Navigation from './Navigation';
export default function Login() {
  const router = useRouter();
  const [userName, setuser] = useState("");
  const [pass, setpass] = useState("");
  const [email, setemail] = useState("");
  const api = "http://localhost:3002";
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const response = await fetch(api + "/SignUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Username: userName,
          password: pass,
          Email: email,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      router.push("/components/login");
    } catch (error) {
      alert("error");
      console.error("Error:", error);
    }
  };
  return (
    <>
      {/* <Navigation /> */}
      <section className="container">
        <div className="login-container">
          <div className="circle circle-one"></div>
          <div className="form-container">
            <img
              src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png"
              alt="illustration"
              className="illustration"
            />
            <h1 className="opacity">SIGNUP---</h1>
            <form onSubmit={handleSubmit}>
              <input
                onChange={(e) => setemail(e.target.value)}
                type="email"
                placeholder="EMAIL: (f219516@cfd.nu.edu.pk)"
                required
              />
              <input
                onChange={(e) => setuser(e.target.value)}
                type="text"
                placeholder="USERNAME"
                required
              />
              <input
                onChange={(e) => setpass(e.target.value)}
                type="password"
                placeholder="PASSWORD"
                required
              />
              <button className="opacity">SUBMIT</button>
            </form>
            <div className="register-forget opacity">
              {/* <a href="http://localhost:3000/components/login">Login</a>
              <a href="">FORGOT PASSWORD</a> */}
              <LoginLink>Sign in with GOOGLE</LoginLink>

<RegisterLink>Sign up with GOOGLE</RegisterLink>
            </div>
          </div>
          <div className="circle circle-two"></div>
        </div>
        <div className="theme-btn-container"></div>
      </section>
    </>
  );
}
