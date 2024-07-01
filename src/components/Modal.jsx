const Modal = ({ showModal, setShowModal, imgSrc, imgAlt }) => {
    return (
      <>
        {showModal ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="relative  backdrop-blur-sm bg-white/30 p-4 rounded-lg">
              <button
                className="absolute top-0 right-0 mt-2 mr-2 text-black text-xl font-bold"
                onClick={() => setShowModal(false)}
              >
                &times;
              </button>
              <img src={imgSrc} alt={imgAlt} className="max-h-80 max-w-80" />
            </div>
          </div>
        ) : null}
      </>
    );
  };
  
  export default Modal;
  