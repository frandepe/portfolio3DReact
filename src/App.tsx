import { Route, Routes, BrowserRouter } from "react-router-dom";
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

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/jobs/guia-pellegrini" element={<GuiaPellegrini />} />
        <Route path="/jobs/guruia" element={<GuruiaProject />} />
        <Route path="/jobs/natura" element={<NaturaJob />} />
        <Route path="/jobs/ndcapacitaciones" element={<NDCapacitaciones />} />
        <Route path="/jobs/pilsen-digital" element={<PilsenDigital />} />
        <Route path="/practices/mil-opciones" element={<MilOpciones />} />
        {/*
          <Route path="/logros" element={<Logros />} />
          <Route
            path="/certificado-confianza-comercial"
            element={<CertificadoCC />}
          />
          <Route
            path="/quiz-completed"
            element={<QuizCertificateCompleted />}
          />
          <Route path="/quiz" element={<QuizCertificate />} />
          <Route path="/amigos-sugeridos" element={<SuggestedFriendsPage />} />
          <Route
            path="/recomienda-milopciones"
            element={<RecomiendaMaimark />}
          />
          <Route
            path="/terminos-y-condiciones"
            element={<TerminosYCondiciones />}
          />
          <Route
            path="/politicas-de-privacidad"
            element={<PolíticasDePrivacidad />}
          />
          <Route path="/politicas-de-cookies" element={<PoliticaDeCookies />} />
          <Route
            path="/configuracion-avanzada"
            element={<ConfiguracionAvanzada />}
          /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
