import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Image src="/images/logo.png" width={100} height={100} />
        <p className="text-slate-600">Desenvolvido por <a href="https://www.capivaradev.com.br/" target="_blank" className="hover:text-white">© CapivaraDev™</a></p>
      </div>
    </footer>
  );
};

export default Footer;
