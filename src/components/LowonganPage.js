import React, { useState } from "react";
import LowonganCards from "./LowonganCards";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import axios from "axios";

const Lowongan = () => {
  const [search, setSearch] = useState("");
  const [fetchStatus, setFetchStatus] = useState(true);
  const [display, setDisplay] = useState(false)
  
  const handleChangeSearch = (event) => setSearch(event.target.value);

  const handleSearch = (event) => {
    event.preventDefault();
  
    console.log(event);

    let fetchData = async () => {
      setDisplay(true);
      let { data } = await axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
      let dataJob = data.data

      console.log(dataJob);

      let searchData = dataJob.filter((res) => {
        console.log(Object.values(res).join(" ").toLowerCase().includes(search.toLowerCase()));
      });

      setDisplay(false);
    }
  }

  return(
    <>
      <div className="max-w-7xl m-auto box-border my-10 px-10">
        <h1 className="text-4xl leading-normal text-center font-semibold mb-3 max-sm:text-2xl">Temukan jalanmu dan raih kesempatan mendapatkan <span className="font-bold text-sky-600">pengalaman PROFESIONAL.</span></h1>
        <h3 className="text-xl text-slate-800 text-center max-sm:text-base">Lebih dari 1000+ lowongan tersedia!</h3>
      </div>

      <form className="max-w-3xl m-auto px-5 max-md:max-w-2xl max-sm:max-w-xl" onSubmit={handleSearch}>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input type="search" onChange={handleChangeSearch} value={search} id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cari lowongan kerja..." required/>
          <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-sky-600 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cari</button>
        </div>
      </form>

      <LowonganCards/>

      <div className="mb-12">
        <Link to={'/job-lists'}>
          <Button className="mx-auto bg-sky-600 hover:bg-sky-800">
            Cek Selengkapnya Disini
          </Button>
        </Link>
      </div>
    </>
  )
}

export default Lowongan;