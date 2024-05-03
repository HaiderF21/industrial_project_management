/* eslint-disable @next/next/no-sync-scripts */
import Link from 'next/link';
import '../CSS/Navigation.css';

export default function Navigation() {
    return (
        <>
        <script src="https://kit.fontawesome.com/a076d05399.js"/>
        <div className="wrapper">
            <input type="checkbox" id="active" />
            <label htmlFor="active" className="menu-btn"><i className="fas fa-bars"></i></label>
            <div className="menuContainer">
                <ul className="menuItems">
                    <li><Link href="../components/projectform" legacyBehavior><a>Project Form</a></Link></li>
                    <li><Link href="../components/feedback" legacyBehavior><a>Submit Feedback</a></Link></li>
                    <li><Link href="../components/projecttable" legacyBehavior><a>Projects</a></Link></li>
                    <li><Link href="../components/feedbackdisplay" legacyBehavior><a>Feedbacks</a></Link></li>
                    <li><Link href="../components/login" legacyBehavior><a>Login</a></Link></li>
                    <li><Link href="../components/signup.tsx" legacyBehavior><a>Sign Up</a></Link></li>
                </ul>
            </div>
        </div>
        </>
    );
}
