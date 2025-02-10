// import { Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import { Footer, Header } from "../../layouts";
import Achievement from "./components/Achievement";
import Activities from "./components/Activities";
import Carousel from "./components/Carousel";
import Fields from "./components/Fields";
import Recruitment from "./components/Recruitment";
import Slogan from "./components/Slogan";

const Homepage = () => {
  // const nav = useNavigate();
  return (
    <div>
      <Header />
      <Carousel />
      <Activities />
      <Fields />
      <Achievement />
      <Recruitment />
      <Slogan />
      <Footer />
    </div>
  );
};

export default Homepage;
