import { useState } from 'react';
export default function Login(){

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          UserName: username,
          PassWord: password,
        }),
      });

      if (response.ok) {
        // Login successful, redirect or handle accordingly
        const data = await response.json();
        console.log(data); // Do something with the response data
      } else {
        // Login failed
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (error) {
      console.error('Error during login:');
    }
  };

    return(
        <>
       <section className="container">
        <div className="login-container">
            <div className="circle circle-one"></div>
            <div className="form-container">
                <img src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png" alt="illustration" className="illustration" />
                <h1 className="opacity">LOGIN</h1>
                <form method="post" action="../components/login">
                    <input type="text" placeholder="USERNAME" />
                    <input type="password" placeholder="PASSWORD" />
                    <button type="submit" className="opacity">SUBMIT</button>
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