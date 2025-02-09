// import { Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import { Header } from "../../layouts";
import Achievement from "./components/Achievement";
import Activities from "./components/Activities";
import Carousel from "./components/Carousel";
import Fields from "./components/Fields";

const Homepage = () => {
  // const nav = useNavigate();
  return (
    <div>
      <Header />
      <Carousel />
      <Activities />
      <Fields />
      <Achievement />
      {/* <Button onClick={() => nav("/login")}>Login</Button>
      <Button onClick={() => nav("/register")}>Register</Button>
      <Button onClick={() => nav("/reset-password")}>Reset Password</Button> */}
      <div
        style={{
          height: "100vh"
        }}
      ></div>
    </div>
  );
};

export default Homepage;
