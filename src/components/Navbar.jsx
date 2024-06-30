import './navbar.css'
import Header from './Header'
import astro from '../img/astro.png'
import Main from './Main'
import Perfil from './Perfil'
import Proyectos from './Proyectos'
import Footer from './Footer'
import Logros from './Logros'
import { TypeAnimation } from 'react-type-animation';
const Navbar = () => {
  return (
    <>
      
      <nav className=" text-white w-screen navbar">
      <Header/>
        <div className="container pl-12 pt-40 ">
          <div className='text-3xl Montserrat'>
            <TypeAnimation
              sequence=
              {['Bienvenido a mi Portafolio', 4000,
                'Soy Ender Torres', 2000,
                'Soy Diseñador Web', 2000,
                'Soy Diseñador Backend', 2000,
                'Soy Diseñador Frontend', 2000,

              ]}
              wrapper="span" 
              speed={50}
              cursor={true} 
              repeat={Infinity} 
              />
          </div>
          <p className='w-1/2 pt-5  text-justify text-sm '>
          Apasionado y amante de la tecnologia y el aprendizaje continuo en el mundo de la programación,
          dispuesto siempre a enfrentar desafios,buscando mejorar y adaptarme a las últimas tendencias y 
          mejores prácticas de la industria. Mi enfoque en el detalle y mi compromiso con la calidad 
          aseguran que cada proyecto en el que participo cumple con los más altos estándares.
          </p>
          <div className='astro w-48 h-48 pt-6'>
          <img src={astro} alt={astro} />
          </div>
        
        </div>
      </nav>
      <Main/>
      <Perfil/>
      <Logros/>
      <Proyectos/>
      <Footer/>
    </>
  )   
}

export default Navbar
