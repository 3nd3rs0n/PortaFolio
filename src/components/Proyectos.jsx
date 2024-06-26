import './Proyectos.css'

const Proyectos = () => {
   
    const proyectos = [
        {
          id: 1,
          title: 'Proyecto 1',
          description: 'Descripción del Proyecto 1',
          image: 'https://via.placeholder.com/150',
          link: '#'
        },
        {
          id: 2,
          title: 'Proyecto 2',
          description: 'Descripción del Proyecto 2',
          image: 'https://via.placeholder.com/150',
          link: '#'
        },
        {
          id: 3,
          title: 'Proyecto 3',
          description: 'Descripción del Proyecto 3',
          image: 'https://via.placeholder.com/150',
          link: '#'
        },
        {
          id: 4,
          title: 'Proyecto 4',
          description: 'Descripción del Proyecto 4',
          image: 'https://via.placeholder.com/150',
          link: '#'
        },
        {
          id: 5,
          title: 'Proyecto 5',
          description: 'Descripción del Proyecto 5',
          image: 'https://via.placeholder.com/150',
          link: '#'
        },
        {
          id: 6,
          title: 'Proyecto 6',
          description: 'Descripción del Proyecto 6',
          image: 'https://via.placeholder.com/150',
          link: '#'
        },
      ];
      
  return (
    <div className="w-screen pb-12 pt-10 px-28 Proyectos">
        <hr className='pb-12'/>
        <div className='flex flex-col items-center justify-center pb-28 text-white font-bold'>
            <h1>Proyecto</h1>
            <p className='pt-12 px-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione doloribus architecto minus ipsa maiores itaque error doloremque asperiores 
                nostrum ea rem veritatis, cupiditate animi deserunt culpa dignissimos reprehenderit ut.
            </p>
        </div>

        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {proyectos.map((proyecto) => (
                <div key={proyecto.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                    <img src={proyecto.image} alt={proyecto.title} className="w-full h-48 object-cover"/>
                    <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{proyecto.title}</h3>
                    <p className="text-gray-700 mb-4">{proyecto.description}</p>
                    <div className="flex justify-between items-center">
                        <a href={proyecto.link} className="text-blue-500 hover:underline">Ver más</a>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Acción</button>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Proyectos