import React from "react";
import { Navbar } from "flowbite-react";

const NavigateBar = () => {
  return(
    <Navbar
        fluid={true}
        rounded={true}
        className="max-w-7xl m-auto my-2"
      >
      <Navbar.Brand href="/">
        <img
          src="../android-chrome-192x192.png"
          className="mr-2 h-6 sm:h-9 max-sm:mr-1"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-sky-600 hover:underline dark:text-white">
          KerjaKuy
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/">
          Beranda
        </Navbar.Link>
        <Navbar.Link href="/job-vacancy">
          Lowongan Kerja
        </Navbar.Link>
        <Navbar.Link href="/about">
          Tentang Kami
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigateBar;