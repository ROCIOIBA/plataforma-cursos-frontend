import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";   // ⭐ FALTABA ESTO
import Dashboard from "./pages/Dashboard";

import Home from "./pages/Home";
import Cursos from "./pages/Cursos";
import CursoDetalle from "./pages/CursoDetalle";
import MisCursos from "./pages/MisCursos";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/curso/:id" element={<CursoDetalle />} />
        <Route path="/mis-cursos" element={<MisCursos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>

      <Footer />   {/* Ahora sí funciona */}
    </Router>
  );
}
