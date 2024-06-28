import './Main.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img_react from '../img/react.png'
import img_html from '../img/html.png'
import img_css from '../img/css.png'
import img_JS from '../img/JS.png'
import img_NodeJS from '../img/nodejs.png'
import img_Boostrap from '../img/boostrap.png'
import img_Tailwind from '../img/tailwindcss.png'
import img_Postgressql from '../img/postgress.png'
import img_Github from '../img/github.png'
import img_Vite from '../img/vite.png'
import img_Next from '../img/next.png'
import img_Git from '../img/git.png'




const Main = () => {
  return (
    <>
    <main className="w-screen flex justify-center  Main">
        <div className="container w-1/2 text-white p-6 rounded-3xl h-full min-h-80 Contenido ">
            <div className='text-center pb-2'>
              <h1 className="text-2xl font-bold mb-4">HABILIDADES</h1> 
              <hr />    
            </div>  

           <div className="grid grid-cols-5 gap-6 p-10">
              <div className="h-12 w-12 ">  <img src={img_react} alt={img_react} /></div>
              <div className="h-12 w-12 "> <img src={img_html} alt={img_html} /></div>
              <div className="h-9 w-9"> <img src={img_css} alt={img_css} /></div> 
              <div className="h-10 w-10 pt-2">  <img src={img_JS} alt={img_JS} /></div>
              <div className="h-12 w-12"> <img src={img_NodeJS} alt={img_NodeJS} /></div>
              <div className="h-12 w-12"> <img src={img_Boostrap} alt={img_Boostrap} /></div> 
              <div className="h-12 w-12 pt-2"> <img src={img_Tailwind} alt={img_Tailwind} /></div> 
              <div className="h-12 w-12"> <img src={img_Postgressql} alt={img_Postgressql} /></div> 
              <div className="h-16 w-16"> <img src={img_Github} alt={img_Github} /></div> 
              <div className="h-18 w-18"> <img src={img_Vite} alt={img_Vite} /></div> 
              <div className="h-12 w-12"> <img src={img_Next} alt={img_Next} /></div> 
              <div className="h-12 w-12"> <img src={img_Git} alt={img_Git} /></div> 

          </div>
  
        </div>
    </main>
    </>
  )
}

export default Main