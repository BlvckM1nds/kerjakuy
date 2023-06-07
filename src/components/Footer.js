import React from "react";
import { Footer } from "flowbite-react";

const PageFooter = () => {
  return(
    <Footer container={true} className="max-md:flex max-md:flex-col max-md:gap-3 max-md:items-center">
      <Footer.Copyright
        href="#"
        by="Ryu Alvano. All Rights Reserved."
        year={new Date().getFullYear()}
        className="hover:text-sky-600 max-md:text-xs"
      />
      <Footer.LinkGroup className="max-md:gap-6 max-md:text-sm">
        <Footer.Link href="/" className="hover:text-sky-600">
          Beranda
        </Footer.Link>
        <Footer.Link href="/job-vacancy" className="hover:text-sky-600">
          Lowongan Kerja
        </Footer.Link>
        <Footer.Link href="/about" className="hover:text-sky-600">
          Tentang Kami
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  )
};

export default PageFooter;