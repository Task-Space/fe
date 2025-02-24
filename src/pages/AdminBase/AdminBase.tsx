import {
  Box,
  Container,
  experimentalStyled,
  useMediaQuery
} from "@mui/material";
import { useState } from "react";
// import Header from "./layout/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "./layout/Sidebar";

const TopbarHeight = 70;
const MainWrapper = experimentalStyled("div")(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  overflow: "hidden",
  width: "100%"
}));
const PageWrapper = experimentalStyled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",

  backgroundColor: theme.palette.background.default,
  [theme.breakpoints.up("lg")]: {
    paddingTop: TopbarHeight
  },
  [theme.breakpoints.down("lg")]: {
    paddingTop: "64px"
  }
}));

const AdminBase = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  return (
    <MainWrapper>
      {/* <Header
        sx={{
          paddingLeft: isSidebarOpen && lgUp ? "265px" : "",
          backgroundColor: "#ffffff"
        }}
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
        toggleMobileSidebar={() => setMobileSidebarOpen(true)}
      /> */}

      <Sidebar
        isSidebarOpen={isSidebarOpen}
        isMobileSidebarOpen={isMobileSidebarOpen}
        onSidebarClose={() => setMobileSidebarOpen(false)}
      />

      <PageWrapper>
        <Container
          maxWidth={false}
          sx={{
            paddingTop: "20px",
            paddingLeft: isSidebarOpen && lgUp ? "280px!important" : ""
          }}
        >
          <Box sx={{ minHeight: "calc(100vh - 170px)" }}>
            <Outlet />
          </Box>
          {/* <Footer /> */}
        </Container>
      </PageWrapper>
    </MainWrapper>
  );
};

export default AdminBase;
