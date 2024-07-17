import { Element } from 'react-scroll';
import Foto_Perfil from '../img/Perfil-4.png'

const Perfil = () => {
  return (
    <Element name='Perfil'>
      <main className="grid grid-cols-2 gap-4 place-content-around text-white w-screen Perfil">
        <div className='flex flex-col items-center justify-center p-10  text-center'>
              <h1 className="text-2xl font-bold mb-4">Un poco sobre mí</h1>
              <p className="mb-4">
                Soy un desarrollador web tanto backend como frontend con experiencia y altamente 
                calificado para desempeñarme en situaciones susceptibles de desarrollo de la tecnologia,
                a lo largo de mi vida he logrado obtener el titulo universitario de Organización Empresarial,
                asi como me he apasionado por la ciencia de la tecnologia, obteniendo diplomados y 
                certificaciones los cuales acreditan mi pasion por el desarrollo web y la programación.
              
              </p>

          </div>
          <div className='flex items-center justify-center'>
          <img src={Foto_Perfil} alt={Foto_Perfil} className='h-full max-h-64 rounded-full'  />
          </div>
      </main>
   </Element>  
  )
}

export default Perfil