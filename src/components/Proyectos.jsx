import { Element } from "react-scroll";
// import PlanificadorGastos from "/img/Planificador_Gastos.png";
// import Clima from '/img/Buscador_Clima.png';
import Certificado_CSS from '/public/img/Certfificado_CSSAvanzado.png';


const Proyectos = () => {
   
    const proyectos = [
        {
          id: 1,
          title: 'Panificador De Gastos',
          description: 'Proyecto para el control de gastos personales',
          image: Certificado_CSS,
          link: 'https://control-gatos-n7v3bq1n7-enders-projects-a235a8ed.vercel.app'
        },
        {
          id: 2,
          title: 'Buscador de Clima',
          description: 'Proyecto para consultar el clima de diferentes ciudades',
          image: Certificado_CSS,
          link: 'https://clima-kappa-two.vercel.app/'
        }
      ];
      
  return (
    <Element name="Proyectos">
          <div className="w-screen pb-12 pt-10 px-28 Proyectos">
        <hr className='pb-12'/>
        <div className='flex flex-col items-center justify-center pb-28 text-white font-bold'>
            <h1 className='text-2xl'>Proyectos</h1>
        </div>

        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 ">
                {proyectos.map((proyecto) => (
                <div key={proyecto.id} className="bg-white shadow-md rounded-lg overflow-hidden border  ">
                    <img src={proyecto.image} alt={proyecto.title} className="w-full h-48 object-cover"/>
                    <hr />
                    <div className="p-4">
                    <h1 className="text-xl font-semibold mb-2 text-center">{proyecto.title}</h1>
                    <p className="text-gray-700 mb-4 mt-8">{proyecto.description}</p>
                    <div className="flex justify-between items-center mt-9">
                        <a 
                          href={proyecto.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-blue-500 hover:underline uppercase font-bold"
                        >
                          Ver Proyecto
                        </a>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
        
    </div>
    </Element>
  )
}

export default Proyectos