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
  return (
    <BrowserRouter>
      <Header />
      <AnimatePresence mode="sync">
        <Routes>
          <Route
            path="/"
            element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            }
          />
          <Route
            path="/contact"
            element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            }
          />
          <Route
            path="/about"
            element={
              <PageWrapper>
                <AboutMe />
              </PageWrapper>
            }
          />
          <Route
            path="/portfolio"
            element={
              <PageWrapper>
                <Portfolio />
              </PageWrapper>
            }
          />
          <Route
            path="/tu-web"
            element={
              <PageWrapper>
                <WebForClient />
              </PageWrapper>
            }
          />
          <Route path="/jobs/guia-pellegrini" element={<GuiaPellegrini />} />
          <Route path="/jobs/guruia" element={<GuruiaProject />} />
          <Route path="/jobs/natura" element={<NaturaJob />} />
          <Route path="/jobs/ndcapacitaciones" element={<NDCapacitaciones />} />
          <Route path="/jobs/pilsen-digital" element={<PilsenDigital />} />
          <Route path="/jobs/congreso" element={<Congreso />} />
          <Route path="/practices/mil-opciones" element={<MilOpciones />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
