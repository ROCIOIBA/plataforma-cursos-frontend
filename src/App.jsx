

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RutaPrivada from "./components/RutaPrivada";

import Home from "./pages/Home";
import Cursos from "./pages/Cursos";
import MisCursos from "./pages/MisCursos";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />

        <Route
          path="/mis-cursos"
          element={
            <RutaPrivada>
              <MisCursos />
            </RutaPrivada>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
