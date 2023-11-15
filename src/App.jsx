import NavBar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Tourism from "./components/Tourism/Tourism";
import SignIn from "./components/SignIn/SignIn";
import Footer from "./components/Footer/Footer";
import Tour from "./components/Tour/Tour";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";

export default function main() {
  const ScrollToTop = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
    return null;
  };
  const theme = createTheme({
    typography: {
      fontFamily: "",
    },
  });
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route index element={<Home />} />
              <Route path="tourism" element={<Tourism />} />
              <Route path="tours" element={<Tour />} />
              <Route path="login" element={<SignIn />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}
