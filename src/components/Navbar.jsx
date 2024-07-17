import Header from './Header'
import astro from '../img/astro.png'
import Main from './Main'
import Perfil from './Perfil'
import Proyectos from './Proyectos'
import Logros from './Logros'
import { TypeAnimation } from 'react-type-animation';
import { Element } from 'react-scroll'
import whatsapp from '../img/Whatsapp.png'



const Navbar = () => {

  const Numero = '56936214589';
  const message = 'Hola, Me interesa tu CV';
  const whatsappLink = `https://wa.me/${Numero}?text=${encodeURIComponent(message)}`;


  return (
  <Element name='Inicio'>
    <nav className=" text-white w-screen navbar">
      <Header/>
          <div className='fixed top-3/4 -right-9 h-full w-48 pt-10 Wave '>
            <a href={whatsappLink}> <img src={whatsapp} alt={whatsapp}  /></a>
          </div>
         <div className="flex flex-col md:flex-row w-full min-h-screen md:min-h-96 pt-10">
            <div className="flex-1 flex flex-col  justify-center px-4">
              <div className="text-2xl Montserrat ">
                <TypeAnimation
                  sequence={[
                    'Bienvenido a mi Portafolio', 4000,
                    'Soy Ender Torres', 2000,
                    'Soy Desarrollador Web', 2000,
                    'Soy Desarrollador Backend', 2000,
                    'Soy Desarrollador Frontend', 2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  cursor={true}
                  repeat={Infinity}
                />
              </div>
              <p className="w-full pt-5 text-justify text-sm">
                Apasionado y amante de la tecnologia y el aprendizaje continuo en el mundo de la programación,
                dispuesto siempre a enfrentar desafios, buscando mejorar y adaptarme a las últimas tendencias y
                mejores prácticas de la industria. Mi enfoque en el detalle y mi compromiso con la calidad
                aseguran que cada proyecto en el que participo cumple con los más altos estándares.
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center p-4">
              <div className="astro w-48 h-48 ">
                <img src={astro} alt="astro" />
              </div>
            </div>
          </div>

    </nav>
    <Main/>
    <Perfil/>
    <Logros/>
    <Proyectos/>
  </Element>
      
  )   
}

export default Navbar
