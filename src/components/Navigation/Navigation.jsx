import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const makeNavLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

export default function Navigation () {
    const location = useLocation();
    const isNotFound = location.pathname !== '/' && 
                        location.pathname !== '/movies' &&
                        !location.pathname.startsWith('/movies/');
    return (
        <header className={isNotFound ? css.hidden : css.header}>
            <nav className={css.nav}>
                <NavLink to="/" className={makeNavLinkClass}>Home</NavLink>
                <NavLink to="/movies" className={makeNavLinkClass}>Movies</NavLink>
            </nav>
        </header>
    )
}