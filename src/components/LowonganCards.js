import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import { Link } from "react-router-dom";
import axios from "axios";

const LowonganCards = () => {
  const {states, functions} = useContext(GlobalContext);

  const { jobData, setJobData, currentID, setCurrentId } = states;
  const { detailHandle, currency, statusBadge, statusDetail } = functions;

  useEffect(() => {
    axios.get('https://dev-example.sanbercloud.com/api/job-vacancy')
    .then((res) => {
      setJobData([...res.data.data]);
    })
    .catch((err) => {

    })
  }, []);

  return(
    <>
      <div className="max-w-7xl m-auto my-12">
        <h1 className="text-center text-2xl font-semibold mb-7">Lowongan Tersedia</h1>
        <div className="grid grid-cols-4 gap-7 box-border justify-center max-lg:grid-cols-3 max-lg:p-3 max-[920px]:grid-cols-2 max-md:p-5 max-sm:grid-cols-1">
          { jobData !== null && jobData.map((res, i) => {
            return(
              <div className="card border box-border p-5 flex flex-col justify-center items-center rounded-2xl shadow-lg min-h-[300px] duration-200 hover:scale-105" key={i}>
                <div className="flex justify-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full overflow-hidden">
                    <img src={res.company_image_url} className="object-cover h-full w-full"/>
                  </div>
                  <div>
                    <h4 className="text-base">{res.company_name}</h4>
                    <p className="text-xs text-slate-400">{res.company_city}</p>
                  </div>
                </div>
                <h4><span className="text-center text-lg font-semibold text-sky-600">{res.title}</span> - {res.job_type}</h4>
                <span className="my-1">{statusBadge(res)}</span>
                <p className="text-center text-sm text-slate-400">{res.job_description}</p>
                <Link to={`/job-detail/${res.id}`}>
                  <button onClick={detailHandle} value={res.id} type="button" className="py-2 px-3 mt-4 text-xs font-medium text-center text-white bg-sky-600 rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Read More</button>
                </Link>
              </div>
            )
          }) }
        </div>
      </div>
    </>
  )
}

export default LowonganCards;