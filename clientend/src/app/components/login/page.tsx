"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import '../signup.css'
import Navigation from "../nagbar";
export default function login() {
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    const api = "http://localhost:3002";
    const router=useRouter();
    const checker1 = async (e: { preventDefault: () => void }) => {
        e.preventDefault();
        try {
            const response = await fetch(api + "/Login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "password": pass, // Assuming "pass" is a variable containing the password
                    "Email": email // Assuming "email" is a variable containing the username
                })
            });

            if (!response.ok) {
                // alert("error1212")
                throw new Error('Network response was not ok');
            }
            else{

                alert("success")
            }
            const data = await response.json();
            router.push('/components/success')
            // Do something with the data if needed
            //  revalidatePath('../components/login','page')
            
            
            // return data;
        } catch (error) {
            alert("error");
            console.error('Error:', error);
            // Handle the error appropriately, for example:
            // throw error; // Rethrow the error for further handling
        }
    }
   
    return (
        <>
        <Navigation />
            <section className="container">
                <div className="login-container">
                    <div className="circle circle-one"></div>
                    <div className="form-container">
                        <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" className="illustration" />
                        <h1 className="opacity">LOGIN</h1>
                        <form onSubmit={checker1}>
                            <input onChange={e => setemail(e.target.value)} type="text" placeholder="Email" />
                            <input onChange={e => setpass(e.target.value)} type="password" placeholder="PASSWORD" />
                            <button type="submit" className="opacity">SUBMIT</button>
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