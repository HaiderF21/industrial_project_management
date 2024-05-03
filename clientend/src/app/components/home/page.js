"use client";
import { useState } from "react";
import Navigation from "../Navigation";
const api = "http://localhost:3002";
import "./page.css";
export default function success() {
  const [result, setreult] = useState([
    {
      Email: "mail",
      password: "password",
      Username: "username",
    },
  ]);
  const update = async () => {
    try {
      await fetch(api + "/Data")
        .then((res) => res.json())
        .then((data) => setreult(data))
        .catch((err) => console.log(err));
    } catch (e) {
      alert("error");
    }

    console.log(result);
  };
  //    update();
  setTimeout(() => update(), 10000);
  return (
    <>
    <Navigation />
      {result.map((data) => {
        return (
          <ul>
            <li>Email : {data.Email}</li>
            <li>password : {data.password}</li>
            <li>UserName: {data.Username}</li>
          </ul>
        );
      })}
      {/* <button onClick={()=>update()}>click me</button> */}
      <h1>success</h1>
      <a href="http://localhost:3000">go back</a>
    </>
  );
}
