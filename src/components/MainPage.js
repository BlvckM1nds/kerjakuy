import React, { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import LowonganCards from "./LowonganCards";

const MainPage = () => {
  return(
    <>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 max-w-7xl m-auto overflow-hidden">
        <Carousel className="overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="..."
          />
          <img
            src="https://images.pexels.com/photos/110469/pexels-photo-110469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="..."
          />
          <img
            src="https://images.pexels.com/photos/3760532/pexels-photo-3760532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="..."
          />
        </Carousel>
      </div>

      <LowonganCards/>
    </>
  )
}

export default MainPage;