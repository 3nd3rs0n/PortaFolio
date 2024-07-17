import { Element } from 'react-scroll';
import Foto_Perfil from '../img/Perfil_Ender.png'

const Perfil = () => {
  return (
    <Element name='Perfil'>
      <main className="flex flex-col md:flex-row min-h-screen md:min-h-96 text-white w-screen Perfil ">
        <div className='flex-1 flex flex-col items-center justify-center p-10  text-justify'>
              <h1 className="text-2xl font-bold mb-4">Un poco sobre mí</h1>
              <p className="mb-4">
                Soy un desarrollador web tanto backend como frontend con experiencia y altamente 
                calificado para desempeñarme en situaciones susceptibles de desarrollo de la tecnologia,
                a lo largo de mi vida he logrado obtener el titulo universitario de Organización Empresarial,
                asi como me he apasionado por la ciencia de la tecnologia, obteniendo diplomados y 
                certificaciones los cuales acreditan mi pasion por el desarrollo web y la programación.
              
              </p>

          </div>
          <div className='flex-1 flex flex-col items-center justify-center'>
          <img src={Foto_Perfil} alt={Foto_Perfil} className='h-full max-h-64' />
          </div>
      </main>
   </Element>  
  )
}

export default Perfil