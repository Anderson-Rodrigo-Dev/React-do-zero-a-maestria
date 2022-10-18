// 2 - links com react router

import "./Navbar.css";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      {/* <Link to={"/"}>Home</Link>
        <Link to={"/about"}>Sobre</Link> */}

      {/* 8 - NavLink */}
      <NavLink
        to={"/"}
        end
        //{className={({ isActive }) => (isActive ? "esta-ativo" : "nao-ativo")}}
      >
        Inicio
      </NavLink>
      <NavLink to={"/about"}>Sobre</NavLink>
    </nav>
  );
};

export default Navbar;
