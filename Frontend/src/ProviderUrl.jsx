import React from "react";

const ProviderUrl = ({ setShowUpload }) => {
  return (
    <div className="max-w-md w-full mx-auto bg-white p-6 rounded-xl shadow-md flex flex-col justify-center">
      <div className="text-2xl font-bold text-center mb-4">Publicar URL</div>

      <div className="flex">
        {/* Botón Publicar URL */}
        <div className="w-1/2 text-center px-4 py-2 rounded-4xl font-semibold text-sm cursor-pointer bg-white text-blue-600 shadow-sm">
          Publicar URL
        </div>

        {/* Botón Subir Imágenes */}
        <div
          onClick={() => setShowUpload(true)}
          className="w-1/2 text-center px-4 py-2 rounded-4xl font-semibold text-sm cursor-pointer bg-gray-200 hover:bg-gray-100"
        >
          Subir Imágenes
        </div>
      </div>
    </div>
  );
};

export default ProviderUrl;
