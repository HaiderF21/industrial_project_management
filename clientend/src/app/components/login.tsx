"use client"
import { request } from "http";
import { useRef,useState } from "react"
import { json } from "stream/consumers";

export default function Login(){
const [userName,setuser] = useState("");
const [pass,setpass] = useState("");
const [email,setemail] = useState("");
const data={
    "Email": {userName},
"password":{pass}
};
const api="http://localhost:3002"
async function checker1(){
const getapi= await fetch(api+"/Signup",{
    method:'POST',
    headers:{

        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        "Email": {userName},
"password":{pass},
"Username":{email}
    })
}) 
}
    return(
        <>
       <section className="container">
        <div className="login-container">
            <div className="circle circle-one"></div>
            <div className="form-container">
                <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" className="illustration" />
                <h1 className="opacity">LOGIN</h1>
                <form >
                <input onChange={e=>setemail(e.target.value)} type="text" placeholder="Email" />
                    <input onChange={e=>setuser(e.target.value)} type="text" placeholder="USERNAME" />
                    <input onChange={e=>setpass(e.target.value)} type="password" placeholder="PASSWORD" />
                    <button onClick={checker1}  className="opacity">SUBMIT</button>
                </form>
                <div className="register-forget opacity">
                    <a href="">REGISTER</a>
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