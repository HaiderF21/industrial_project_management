export default function Login(){
    
    return(
        <>
        <h1>Login</h1>
        <form className="FormLogin" action="../components/login" method="POST">
            <div className="email">

<label htmlFor="email">Email</label>
<input id="email" type="email" required placeholder="Your Email"/>
            </div>
<div className="pass">

<label htmlFor="pass">Password</label>
            <input id="email" type="password" placeholder="Enter password" required />
</div>
<button type="submit">Login</button>
        </form>
        </>
    )
}