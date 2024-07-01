import React, { useState, useEffect } from 'react';
import {Link} from 'react-scroll';


const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scroll hacia abajo
      setShowHeader(false);
    } else {
      // Scroll hacia arriba
      setShowHeader(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const Numero = '56936214589';
  const message = 'Hola, Me interesa tu CV';
  const whatsappLink = `https://wa.me/${Numero}?text=${encodeURIComponent(message)}`;

  
  return (
    <div className='transparente'>
      <header className={`fixed w-full transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
        <nav className=" backdrop-blur-sm bg-white/30 p-4 px-12  flex justify-between" >
          
            <ul className="flex space-x-4 font-bold">
              <li>
              <Link to="Inicio" spy={true} smooth={true} duration={500}> Inicio</Link>
              </li>
              <li>
              <Link to="Habilidades" spy={true} smooth={true} duration={500}> Habilidades</Link>
              </li>
              <li>
              <Link to="Perfil" spy={true} smooth={true} duration={500}> Perfil</Link>
              </li>
              <li>
              <Link to="Logros" spy={true} smooth={true} duration={500}> Logros</Link>
              </li>
              <li>
              <Link to="Proyectos" spy={true} smooth={true} duration={500}> Proyectos</Link>
              </li>     
            </ul>

            <ul className='flex space-x-6'>
              <li>
              <a href={whatsappLink} target="_blank">
              <i className="fa-brands fa-whatsapp fa-2xl"></i>
              </a>
              </li>
              <li>
              <a href='#' target="_blank">
              <i className="fa-brands fa-instagram  fa-2xl"></i>
              </a>
              </li>
              <li>
              <a href='#' target="_blank">
              <i className="fa-brands fa-facebook  fa-2xl"></i>
              </a>
              </li>
              <li>
              <a href='#' target="_blank">
              <i className="fa-brands fa-github  fa-2xl"></i>
              </a>
              </li>
            </ul>
        </nav>
     </header>
    </div>
  )
}

export default Header