import React, { useState } from "react";
import Layout from "../../../components/layout";
import FobjIcon from "../../../icons/fobjIcon";
import CustomInput from "../../../components/customInput";
import Button from "../../../components/customButton";
import LogoCircle from "../../../components/logoCircle";
import GoogleIcon from "../../../icons/googleIcon/googleIcon";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSignIn = () => {
    console.log("Iniciar sesión con:", email, password);
  };

  return (
    <Layout>
      <header className="flex justify-center items-center w-full flex-col">
        <h2 className="uppercase text-[32px] font-semibold text-primary">
          Bienvenido
        </h2>
        <span className="text-[14px] font-semibold text-whiteBG">
          ¡Hola! Bienvenido, te hemos echado de menos.
        </span>
      </header>

      <form className="w-full flex justify-center items-center flex-col h-screen gap-6 relative">
        <CustomInput
          placeholder="Email"
          label="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <CustomInput
          placeholder="Contraseña"
          type="password"
          label="Contraseña"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button
          text={"Iniciar sesión"}
          textColor={"text-backgroundcolor"}
          bgColor={"bg-secondary"}
          disabled={false}
          onClick={handleSignIn}
        />

        <div className="flex justify-around items-center w-full">
          <div className="bg-inputBorder border border-inputs w-[25%] h-[1px]"></div>
          <span className="text-[15px] text-center font-normal text-inputs">
            O conéctese con
          </span>
          <div className="bg-inputBorder border border-inputs w-[25%] h-[1px]"></div>
        </div>
        <div><LogoCircle logoComponent={<GoogleIcon />} /></div>

      </form>

      <div>
        <span>Ya tienes cuenta?</span>
      </div>

      <footer className="absolute bottom-0 left-0 w-full">
        <FobjIcon color={"#FFFFFF"} />
      </footer>
    </Layout>
  );
};

export default SignIn;
