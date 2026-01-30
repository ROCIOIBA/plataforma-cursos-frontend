import Footer from "./components/Footer";
import "./components/Footer.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CursoDetalle from "./pages/CursoDetalle";
import MisCursos from "./pages/MisCursos";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

import Navbar from "./components/Navbar";
import RutaPrivada from "./components/RutaPrivada";
import Cursos from "./pages/Cursos";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/curso/:id" element={<CursoDetalle />} />
        <Route path="/cursos" element={<Cursos />} />

        {/* Rutas privadas */}
        <Route
          path="/mis-cursos"
          element={
            <RutaPrivada>
              <MisCursos />
            </RutaPrivada>
          }
        />

        <Route
          path="/dashboard"
          element={
            <RutaPrivada>
              <Dashboard />
            </RutaPrivada>
          }
        />

        <Route
          path="/profile"
          element={
            <RutaPrivada>
              <Profile />
            </RutaPrivada>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
