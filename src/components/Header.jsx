import React, { useState, useEffect } from 'react';


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
  
  return (
    <div className='transparente'>
          <header className={`fixed w-full transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="bg-transparent backdrop-blur-sm bg-white/30 p-4 px-12  flex justify-center" >
        
        <ul class="flex space-x-4 font-bold">
                    <li><a href="#" class="text-white">Inicio</a></li>
                    <li><a href="#" class="text-white">Habilidades</a></li>
                    <li><a href="#" class="text-white">Perfil</a></li>
                    <li><a href="#" class="text-white">Logros</a></li>
                    <li><a href="#" class="text-white">Proyectos</a></li>
                    <li><a href="#" class="text-white">Contactos</a></li>
          </ul>
      </nav>
    </header>
    </div>
  )
}

export default Header