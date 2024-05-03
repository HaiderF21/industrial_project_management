"use client"
import { revalidatePath } from 'next/cache';
import '../components/signup.css'
import { useState } from "react";
export default function Login(){
const [userName,setuser] = useState("")
const [age,setage] = useState("");
const[name,setName]  = useState("") ;
const [pass,setpass] = useState("");
const [email,setemail] = useState("");
// const data={
//     "Email": {userName},
// "password":{pass}
// };
const api="http://localhost:3004"
const checker1 = async () => {
    try {
        const response = await fetch(api + "/api/SignUp", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "Username": userName,
                "Password": pass, // Assuming "pass" is a variable containing the password
                "Email": email,
                "Age":age,
                "Name":name // Assuming "email" is a variable containing the username
            })
        });
        if (!response.ok) {
            alert("run1")
            throw new Error('Network response was not ok');
        }

        // const data = await response.json();
        // Do something with the data if needed
        //  revalidatePath('../components/login','page')
        // return data;
    } catch (error) {
        alert("error");
        console.error('Error:', error);
        // Handle the error appropriately, for example:
        // throw error; // Rethrow the error for further handling
    }
};
    return(
        <>
       <section className="container">
        <div className="login-container">
            <div className="circle circle-one"></div>
            <div className="form-container">
                <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" className="illustration" />
                <h1 className="opacity">SIGNUP</h1>
                <form onSubmit={()=>checker1()}>
                <input onChange={e=>setemail(e.target.value)} type="text" placeholder="Email" />
                    <input onChange={e=>setuser(e.target.value)} type="text" placeholder="UserName" />
                    <input onChange={e=>setName(e.target.value)} type="text" placeholder="Name" />
                    <input onChange={e=>setage(e.target.value)} type="text" placeholder="Age" />
                    <input onChange={e=>setpass(e.target.value)} type="password" placeholder="Password" />
                    <button  type = "submit" className="opacity">SUBMIT</button>
                </form>
                
                <div className="register-forget opacity">
                    <a href="http://localhost:3000/components/login">Login</a>
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