/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import "../home.css";

export default function home() {
  return (
    <>
      <div className="container">
        <header className="header">
          <h1>Mr. Camel</h1>
          <div className="social">
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </header>
        <aside className="left">
          <img src="./assets/html/mr-camel.jpg" width="160px" />
          <ul>
            <li>
              <a className="active" href="#home">
                Home
              </a>
            </li>
            <li>
              <a href="#career">Career</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
          <p>
            Do something important in life. I convert green grass to code Mr
            Camel
          </p>
        </aside>
        <main className="content">
          <h2>About Me</h2>
          <p>
            I dont look like some handsome horse, but I am a real desert king. I
            can survive days without water.
          </p>
          <h2>My Career</h2>
          <p>
            I work as a web developer for a company that makes websites for
            camel businesses.
          </p>
          <h2>How Can I Help You?</h2>
          <table>
            <tr>
              <th>SKILL 1</th>
              <th>SKILL 2</th>
              <th>SKILL 3</th>
            </tr>
            <tr>
              <td>
                <i className="fas fa-broom"></i>
              </td>
              <td>
                <i className="fas fa-archive"></i>
              </td>
              <td>
                <i className="fas fa-trailer"></i>
              </td>
            </tr>
            <tr>
              <td>Cleaning kaktus in your backyard</td>
              <td>Storing some fat for you</td>
              <td>Taking you through the desert</td>
            </tr>
          </table>
          <form>
            <label>
              Email: <input type="text" name="email" />
            </label>
            <label>
              {" "}
              Mobile: <input type="text" name="mobile" />{" "}
            </label>
            <input type="submit" value="Submit" />
          </form>
        </main>
        <footer className="footer">&copy; Copyright Mr. Camel</footer>
      </div>
    </>
  );
}
