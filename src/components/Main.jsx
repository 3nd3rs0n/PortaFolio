import './Main.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img_react from '../img/react.png'
import img_html from '../img/html.png'
import img_css from '../img/css.png'




const Main = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
    <main className="w-screen flex justify-center  Main">
        <div className="container w-1/2 text-white p-6 rounded-3xl h-full min-h-80 Contenido ">
        <div className='text-center pb-2'>
          <h1 className="text-2xl font-bold mb-4">HABILIDADES</h1> 
          <hr />    
        </div>

        <div className='p-10 text-center'>
          <Carousel
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={3000}
            infinite={true} 
            className="h-24"
            >

            <div className="h-12 w-12"> <img src={img_react} alt={img_react} /></div>
            <div className="h-12 w-12"> <img src={img_html} alt={img_html} /></div>
            <div className="h-9 w-9"> <img src={img_css} alt={img_css} /></div> 
            
           
          </Carousel>
        </div>
            
            
        </div>
    </main>
    </>
  )
}

export default Main