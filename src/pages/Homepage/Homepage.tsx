// import { Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import { Footer } from "../../layouts";
import Achievement from "./components/Achievement";
import Activities from "./components/Activities";
import Carousel from "./components/Carousel";
import Fields from "./components/Fields";
import Recruitment from "./components/Recruitment";
import Slogan from "./components/Slogan";

const Homepage = () => {
  return (
    <div>
      <div>
        <Carousel />
        <Activities />
        <Fields />
        <Achievement />
        <Recruitment />
        <Slogan />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
