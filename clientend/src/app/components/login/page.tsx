"use client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import '../signup.css'
import { Message } from "@mui/icons-material";

export default function Login() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const api = "http://localhost:3004";
    const router = useRouter();

    const handleSubmit = async (e: { preventDefault: () => void }) => {
     e.preventDefault();
   try {
            const response = await fetch(api + "/api/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "Password": pass,
                    "Email": email
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            router.push('/components/adminPanel');
            /*
            console.log(data);
            if (data.success) {
               
            } else {
                alert("Login failed. Please check your credentials.");
            }
            */
        } catch (error) {
            console.error('Error:', error);
            alert("An error occurred during login. Please try again.");
            // Log the error message received from the server
            console.error('Server Error Message:', error);
        }
    }
   
    return (
        <section className="container">
            <div className="login-container">
                <div className="circle circle-one"></div>
                <div className="form-container">
                    <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" className="illustration" />
                    <h1 className="opacity">LOGIN</h1>
                    <form onSubmit={handleSubmit}>
                        <input onChange={e => setEmail(e.target.value)} type="text" placeholder="Email" />
                        <input onChange={e => setPass(e.target.value)} type="password" placeholder="PASSWORD" />
                        <button className="opacity" type="submit">SUBMIT</button>
                    </form>
                    <div className="register-forget opacity">
                        <a href="http://localhost:3000">SignUp</a>
                        <a href="">FORGOT PASSWORD</a>
                    </div>
                </div>
                <div className="circle circle-two"></div>
            </div>
            <div className="theme-btn-container"></div>
        </section>
    );
}