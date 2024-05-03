import Navigation from "./components/Navigation";
import Signup from "./components/signup";

export default function Home() {
  return (
    <>
      <Navigation />

      <h1 className="WelcomeNote">Welcome to My Industrial Project System!</h1>
      <Signup />
    </>
  );
}
