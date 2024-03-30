import React from "react";
import FobjIcon from "../icons/fobjIcon";

const Landing: React.FC = () => {
  return (
    <div className="bg-backgroundcolor w-full text-white p-5 flex justify-center items-center flex-col m-0 h-screen">
      <header className="w-full flex justify-center items-center mt-10 fixed top-0">
        <h1 className="uppercase text-[32px] md:text-[64px] font-medium text-primary">
          Bienvenido a FOBJ.
        </h1>
      </header>
      <main className="flex justify-center items-center w-full h-fit mt-10 flex-col container md:w-[50%]">
        <h2 className="uppercase text-[16px] md:text-[28px]">
          Esta es la Landing de FOBJ
        </h2>
        <div className="flex-wrap w-full mt-14">
          <span className="text-[14px] text-center md:text-[25px]">
            <p className="mb-2">
              Desde FOBJ estamos contentos de anunciar que <b className="uppercase">Proximamente</b> estaremos lanzando la
              web.
            </p>
            <p>
              La web sera mobile y desktop para que puedas <b className="uppercase">
                buscar y reportar objetos perdidos en cualquier dispositivo.
              </b>
            </p>
          </span>
        </div>
      </main>
      <div className="fixed bottom-0 mb-5">
        <FobjIcon color="#001F54" />
      </div>
    </div>
  );
};

export default Landing;
