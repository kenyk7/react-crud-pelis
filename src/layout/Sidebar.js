import React from "react";

function Header() {
  return (
    <nav className="nav-sidebar">
      <a href="#">Dashboard</a>
      <a href="#" className="active">
        Películas
      </a>
      <a href="#">Turnos</a>
      <a href="#">Administradores</a>
      <a href="#">Perfil</a>
      <a href="#">Cerrar sesión</a>
    </nav>
  );
}

export default Header;
