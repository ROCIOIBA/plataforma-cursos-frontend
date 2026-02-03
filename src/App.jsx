import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RutaPrivada from "./components/RutaPrivada";

import Home from "./pages/Home";
import Cursos from "./pages/Cursos";
import MisCursos from "./pages/MisCursos";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CursoDetalle from "./pages/CursoDetalle"; // <-- IMPORTANTE

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />

        {/* 🔥 ESTA ES LA RUTA QUE FALTABA */}
        <Route path="/cursos/:id" element={<CursoDetalle />} />

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
    </>
  );
}
