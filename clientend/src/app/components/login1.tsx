export default function Login1(){


    return(
        <>
        <div className="container">
	<form>
		<div className="field" tabIndex={1}>
			<label htmlFor="username">
				<i className="far fa-user"></i>Your Name
			</label>
			<input name="username" type="text" placeholder="e.g. john doe" required />
		</div>
		<div className="field"  tabIndex={2}>
			<label htmlFor="email">
				<i className="far fa-envelope"></i>Your Email
			</label>
			<input name="email" type="text" placeholder="email@domain.com" required />
		</div>
		<div className="field"  tabIndex={3}>
			<label htmlFor="message">
				<i className="far fa-edit"></i>Your Message
			</label>
			<textarea name="message" placeholder="type here" required></textarea>
		</div>
		<button type="reset">Send Me Message</button>
		<div className="social-media">
			<span>
				Get In Touch<i className="fas fa-long-arrow-alt-right"></i>
			</span>
			<a className="fab fa-facebook-f" href="https://facebook.com/uzcho" target="blank_"></a>
			<a className="fab fa-twitter" href="https://twitter.com/uzcho_" target="blank_"></a>
			<a className="fab fa-instagram" href="https://www.instagram.com/uzcho_" target="blank_"></a>
			<a className="fab fa-codepen" href="https://codepen.io/uzcho_" target="blank_"></a>
		</div>
	</form>
</div>

{/* <!-- This is not part of Pen -->
<a className="me" href="https://codepen.io/uzcho_/pens/popular/?grid_type=list" target="_blank" style="color:#000"></a> */}
        </>
    )
}