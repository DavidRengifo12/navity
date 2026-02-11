import React from "react";

const UpdoladsImages = ({ setShowUpload }) => {
  return (
    <div className="max-w-md w-full mx-auto bg-white p-6 rounded-xl shadow-md flex flex-col justify-center">
      <div className="text-2xl font-bold text-center mb-4">Subir Imágenes</div>

      <div className="flex">
        {/* Botón Publicar URL */}
        <div
          onClick={() => setShowUpload(false)}
          className="w-1/2 text-center px-4 py-2 rounded-4xl font-semibold text-sm cursor-pointer bg-gray-200 hover:bg-gray-100"
        >
          Publicar URL
          <div>
            <img src="https://images4.alphacoders.com/135/thumb-1920-135644.jpg" alt="Mangyeko" />
        </div>
        </div>
        

        {/* Botón Subir Imágenes */}
        <div className="w-1/2 text-center px-4 py-2 rounded-4xl font-semibold text-sm cursor-pointer bg-white text-blue-600 shadow-sm">
          Subir Imágenes
        </div>
        <div>
            <img src="https://images4.alphacoders.com/135/thumb-1920-135644.jpg" alt="Mangyeko" />
        </div>
      </div>
    </div>
  );
};

export default UpdoladsImages;
