/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white">
      <div className=" p-8 md:p-20 md:py-16 flex justify-center md:justify-between">
        <Image src="/images/logo.png" width={100} height={100} className="hidden md:block" />
        <p className="text-slate-600 text-xs md:text-base">Desenvolvido por <a href="https://www.kyantech.com.br/" target="_blank" className="hover:text-white">© Kyantech</a></p>
      </div>
    </footer>
  );
};

export default Footer;
