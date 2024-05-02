import Image from "next/image";
import Signup from "./components/signup";
import Login from "./components/login/page";
export default function Home() {
  return (
    <>
      <div className="login-div">
        <Signup />
      </div>
    </>
  );
}
