import { useState } from 'react';
import { Element } from 'react-scroll';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Certificado_CSS from '../img/Certfificado_CSSAvanzado.png';
import Certificado_Fundamentos from '../img/Certificado_FundamentosDeDesarrollo.png';
import Certificado_Introduccion from '../img/Certificado_IntroduccionAlDesarrollo.png';
import Certificado_Node from '../img/Certificado_Node&Express.png';
import Certificado_ReactI from '../img/Certificado_React2.png';
import Certificado_ReactII from '../img/Certificado_React2.png';
import Certificado_Sql from '../img/Certificado_SQL.png';
import Javascript from '../img/Javascript.png';
import certificado_full_stack from '../img/certificado_full_stack.png';
import Titulo_USB from '../img/Titulo_USB.png';
import Certificado_especialista_en_redes from '../img/Certificado_especialista_en_redes.png';
import Certificado_Server from '../img/Certificado_Server.png';
import Certificado_Windows from '../img/Certificado_Windows.png';
import Modal from './Modal';

const Logros = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedAlt, setSelectedAlt] = useState(null);

  const handleImageClick = (imgSrc, imgAlt) => {
    setSelectedImage(imgSrc);
    setSelectedAlt(imgAlt);
    setShowModal(true);
  };

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
    <Element name='Logros'>
      <div className="w-screen text-white text-center Logros">
        <div className="mx-28">
          <hr />
          <h1 className="text-2xl pt-7 font-bold mb-4">Logros</h1>
        </div>
        <div className="px-28 py-24">
          <Carousel
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={3000}
            infinite={true}
          >
            <div className="h-48 w-48">
              <img
                src={certificado_full_stack}
                alt="Full Stack"
                onClick={() => handleImageClick(certificado_full_stack, 'Full Stack')}
              />
              <h1 className="pt-3"> Full Stack</h1>
            </div>
            <div className="h-48 w-48">
              <img
                src={Titulo_USB}
                alt="Universitario"
                onClick={() => handleImageClick(Titulo_USB, 'Universitario')}
              />
              <h1 className="pt-3"> Universitario</h1>
            </div>
            <div className="h-48 w-48">
              <img
                src={Certificado_CSS}
                alt="CSS"
                onClick={() => handleImageClick(Certificado_CSS, 'CSS')}
              />
              <h1 className="pt-3"> CSS</h1>
            </div>
            <div className="h-48 w-48">
              <img
                src={Certificado_Fundamentos}
                alt="Fundamentos"
                onClick={() => handleImageClick(Certificado_Fundamentos, 'Fundamentos')}
              />
              <h1 className="pt-3"> Fundamentos</h1>
            </div>
            <div className="h-48 w-48">
              <img
                src={Certificado_Introduccion}
                alt="Introducción"
                onClick={() => handleImageClick(Certificado_Introduccion, 'Introducción')}
              />
              <h1 className="pt-3"> Introducción</h1>
            </div>
            <div className="h-48 w-48">
              <img
                src={Certificado_Node}
                alt="Node JS"
                onClick={() => handleImageClick(Certificado_Node, 'Node JS')}
              />
              <h1 className="pt-3"> Node JS</h1>
            </div>
            <div className="h-48 w-48">
              <img
                src={Certificado_ReactI}
                alt="React I"
                onClick={() => handleImageClick(Certificado_ReactI, 'React I')}
              />
              <h1 className="pt-3"> React I</h1>
            </div>
            <div className="h-48 w-48">
              <img
                src={Certificado_ReactII}
                alt="React II"
                onClick={() => handleImageClick(Certificado_ReactII, 'React II')}
              />
              <h1 className="pt-3"> React II</h1>
            </div>
            <div className="h-48 w-48">
              <img
                src={Certificado_Sql}
                alt="SQL"
                onClick={() => handleImageClick(Certificado_Sql, 'SQL')}
              />
              <h1 className="pt-3"> SQL</h1>
            </div>
            <div className="h-48 w-48">
              <img
                src={Javascript}
                alt="Javascript"
                onClick={() => handleImageClick(Javascript, 'Javascript')}
              />
              <h1 className="pt-3"> Javascript</h1>
            </div>
            <div className="h-48 w-48">
              <img
                src={Certificado_especialista_en_redes}
                alt="Redes"
                onClick={() => handleImageClick(Certificado_especialista_en_redes, 'Redes')}
              />
              <h1 className="pt-3"> Redes</h1>
            </div>
            <div className="h-48 w-48">
              <img
                src={Certificado_Server}
                alt="Server"
                onClick={() => handleImageClick(Certificado_Server, 'Server')}
              />
              <h1 className="pt-3"> Server</h1>
            </div>
            <div className="h-48 w-48">
              <img
                src={Certificado_Windows}
                alt="Windows"
                onClick={() => handleImageClick(Certificado_Windows, 'Windows')}
              />
              <h1 className="pt-3"> Windows</h1>
            </div>
          </Carousel>
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal} imgSrc={selectedImage} imgAlt={selectedAlt} />
    </div>
  </Element>
  );
};

export default Logros;
