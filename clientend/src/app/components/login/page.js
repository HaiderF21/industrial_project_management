"use client"
import { revalidatePath } from 'next/cache';
import '../signup.css'
import { useState } from "react";

export default function login(){
    const [email,setemail] = useState("");
const [pass,setpass] = useState("");
const checker1=()=>{
    
}
    return(
        <>
           <section className="container">
        <div className="login-container">
            <div className="circle circle-one"></div>
            <div className="form-container">
                <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" className="illustration" />
                <h1 className="opacity">SIGNUP</h1>
                <form onSubmit={()=>checker1()}>
                    <input onChange={e=>setemail(e.target.value)} type="text" placeholder="USERNAME" />
                    <input onChange={e=>setpass(e.target.value)} type="password" placeholder="PASSWORD" />
                    <button   className="opacity">SUBMIT</button>
                </form>
                <div className="register-forget opacity">
                    <a href="http://localhost:3000/">SignUp</a>
                    <a href="">FORGOT PASSWORD</a>
                </div>
            </div>
            <div className="circle circle-two"></div>
        </div>
        <div className="theme-btn-container"></div>
    </section>
        </>
    )
}