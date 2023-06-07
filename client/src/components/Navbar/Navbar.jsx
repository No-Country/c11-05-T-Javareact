import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import { logOut, selectCurrentToken } from '../../redux/store/slices/authSlice';
import MyButton from '../Common/MyButton/MyButton';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const token = useSelector(selectCurrentToken);
  const dispatch = useDispatch();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full fixed h-24 px-10 flex items-center justify-between gap-28 z-10 bg-[--primaryColor] text-[--backgroundColor]">
      <Link to="/" className="flex items-center gap-4">
        <img src={Logo} alt="logo" />
        <h2 className="text-4xl">MyService</h2>
      </Link>
      <div className="hidden md:flex gap-10 text-xl flex-1">
        <NavLink to="/" onClick={closeMenu}>
          Inicio
        </NavLink>
        <NavLink to="/services" onClick={closeMenu}>
          Servicios
        </NavLink>
        <NavLink to="/jobs" onClick={closeMenu}>
          Trabajos Disponibles
        </NavLink>
      </div>
      <div className="flex justify-end items-center gap-4 md:hidden">
        <button
          className="text-xl focus:outline-none"
          onClick={handleMenuToggle}
        >
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`} />
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[--primaryColor] text-[--backgroundColor] flex flex-col gap-10 px-6 py-4">
          <NavLink to="/" onClick={closeMenu}>
            Inicio
          </NavLink>
          <NavLink to="/services" onClick={closeMenu}>
            Servicios
          </NavLink>
          <NavLink to="/jobs" onClick={closeMenu}>
            Trabajos Disponibles
          </NavLink>
          {token ? (
            <>
              <Link to="/profile">
                <MyButton typeStyle="primary">
                  <i className="fa-solid fa-user mr-3" />
                  Perfil
                </MyButton>
              </Link>
              <MyButton typeStyle="secondary" onClick={() => dispatch(logOut())}>
                Cerrar sesión
              </MyButton>
            </>
          ) : (
            <>
              <Link to="/login">
                <MyButton typeStyle="secondary">Iniciar sesión</MyButton>
              </Link>
              <Link to="/register">
                <MyButton typeStyle="primary">Registrarse</MyButton>
              </Link>
            </>
          )}
        </div>
      )}
      <div className="flex justify-end items-center gap-4 hidden transition-all md:flex">
        {token ? (
          <>
            <Link to="/profile">
              <MyButton typeStyle="primary">
                <i className="fa-solid fa-user mr-3" />
                Perfil
              </MyButton>
            </Link>
            <MyButton typeStyle="secondary" onClick={() => dispatch(logOut())}>
              Cerrar sesión
            </MyButton>
          </>
        ) : (
          <>
            <Link to="/login">
              <MyButton typeStyle="secondary">Iniciar sesión</MyButton>
            </Link>
            <Link to="/register">
              <MyButton typeStyle="primary">Registrarse</MyButton>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
