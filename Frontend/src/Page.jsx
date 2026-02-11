import React, { useState } from "react";
import UpdoladsImages from "./UpdoladsImages";
import ProviderUrl from "./ProviderUrl";

const Page = () => {
  const [showUpload, setShowUpload] = useState(true); // true → subir imágenes, false → provider URL

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-sky-100">
      <div className="w-full max-w-sm">
        {showUpload ? (
          <UpdoladsImages setShowUpload={setShowUpload} />
        ) : (
          <ProviderUrl setShowUpload={setShowUpload} />
        )}
      </div>
    </div>
  );
};

export default Page;
