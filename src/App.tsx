import { Route, Routes, BrowserRouter } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Home } from "./pages/Home";
import Header from "./components/MainNavbar/Header";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import GuiaPellegrini from "./pages/Jobs/GuiaPellegrini";
import GuruiaProject from "./pages/Jobs/Guruia";
import NaturaJob from "./pages/Jobs/Natura";
import NDCapacitaciones from "./pages/Jobs/NDCapacitaciones";
import PilsenDigital from "./pages/Jobs/PilsenDigital";
import MilOpciones from "./pages/Practices/MilOpciones";
import WebForClient from "./pages/WebForClient";
import Congreso from "./pages/Jobs/Congreso";
import ArgentinaReanima from "./pages/Jobs/ArgentinaReanima";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaLinkedin } from "react-icons/fa";

function PageWrapper({ children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  useEffect(() => {
    const referrer = document.referrer;
    const params = new URLSearchParams(window.location.search);

    const fromLinkedin =
      (referrer && referrer.includes("linkedin.com")) ||
      params.get("source") === "linkedin";

    if (fromLinkedin) {
      toast.success("¡Gracias por visitar mi portafolio desde LinkedIn!", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        icon: <FaLinkedin size={22} color="#0A66C2" />,
        });
      }
    }, []);

  return (
    <BrowserRouter>
      <Header />
      <AnimatePresence mode="sync">
        <Routes>
          <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><AboutMe /></PageWrapper>} />
          <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
          <Route path="/tu-web" element={<PageWrapper><WebForClient /></PageWrapper>} />
          <Route path="/jobs/guia-pellegrini" element={<GuiaPellegrini />} />
          <Route path="/jobs/guruia" element={<GuruiaProject />} />
          <Route path="/jobs/natura" element={<NaturaJob />} />
          <Route path="/jobs/argentina-reanima" element={<ArgentinaReanima />} />
          <Route path="/jobs/ndcapacitaciones" element={<NDCapacitaciones />} />
          <Route path="/jobs/pilsen-digital" element={<PilsenDigital />} />
          <Route path="/jobs/congreso" element={<Congreso />} />
          <Route path="/practices/mil-opciones" element={<MilOpciones />} />
        </Routes>
      </AnimatePresence>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
