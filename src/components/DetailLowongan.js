import React, { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import axios from "axios";
import { Spinner, Button } from "flowbite-react";
import { Link, useParams } from "react-router-dom";

const DetailLowongan = () => {
  const {states, functions} = useContext(GlobalContext);

  const { jobData, setJobData, currentID, setCurrentId } = states;
  const { detailHandle, currency, statusBadge, statusDetail } = functions;

  const {Id} = useParams();

  useEffect(() => {
    
    if (Id !== undefined) {
      axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${Id}`)
      .then((res) => {
        console.log(res.data);
        setJobData(res.data);
      })
    }

  }, []);
  
  if (jobData === null) {
    return(
      <div className="max-w-7xl text-center m-auto my-8">
        <Spinner
          color="info"
          aria-label="Info spinner example"
        />
      </div>
    )
  }
  
  const salary_min = currency(parseInt(jobData.salary_min));
  const salary_max = currency(parseInt(jobData.salary_max));

  return(
    <>
      <h1 className="text-4xl text-center font-semibold my-8 max-md:text-3xl max-sm:text-2xl">Detail Lowongan Kerja</h1>
      
      <div className="max-w-7xl m-auto p-5 box-border">
        <div className="py-10 px-12 mb-12 border rounded-lg max-sm:p-5">
          <div className="flex justify-between items-center box-border mb-5 max-sm:block">
            <div className="flex items-center gap-3 max-sm:block">
              <h2 className="text-3xl font-semibold text-sky-600 max-sm:text-2xl max-sm:text-center max-sm:mb-3">{jobData.title}</h2>
              <span className="max-sm:hidden">{statusBadge(jobData)}</span>
            </div>
            <div className="flex gap-4 items-center justify-center items-center max-sm:flex-col max-sm:gap-1">
              <div className="flex flex-col max-sm:order-2">
                <h4 className="text-xl font-medium max-sm:text-base">{jobData.company_name}</h4>
                <p className="text-base text-slate-400 self-end max-sm:text-sm max-sm:self-center">{jobData.company_city}</p>
              </div>
              <div className="h-20 w-20 rounded-full overflow-hidden max-sm:h-14 max-sm:w-14 max-sm:order-1">
                <img src={jobData.company_image_url} className="object-cover h-full w-full"/>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 text-base py-5 border-b hidden max-sm:text-sm max-sm:flex max-sm:flex-col max-sm:gap-1 max-sm:block">
            <div><span className="text-gray-500">Status Lowongan</span></div>
            <div className="col-span-2"><span>{statusDetail(jobData)}</span></div>
          </div>
          <div className="grid grid-cols-3 text-base py-5 border-b max-sm:text-sm max-sm:flex max-sm:flex-col max-sm:gap-1">
            <div><span className="text-gray-500">Deskripsi pekerjaan</span></div>
            <div className="col-span-2 min-sm:hidden"><span>{jobData.job_description}</span></div>
          </div>
          <div className="grid grid-cols-3 text-base py-5 border-b max-sm:text-sm max-sm:flex max-sm:flex-col max-sm:gap-1">
            <div><span className="text-gray-500">Title pekerjaan</span></div>
            <div className="col-span-2"><span>{jobData.title}</span></div>
          </div>
          <div className="grid grid-cols-3 text-base py-5 border-b max-sm:text-sm max-sm:flex max-sm:flex-col max-sm:gap-1">
            <div><span className="text-gray-500">Tipe pekerjaan</span></div>
            <div className="col-span-2"><span>{jobData.job_type}</span></div>
          </div>
          <div className="grid grid-cols-3 text-base py-5 border-b max-sm:text-sm max-sm:flex max-sm:flex-col max-sm:gap-1">
            <div><span className="text-gray-500">Tenure pekerjaan</span></div>
            <div className="col-span-2"><span>{jobData.job_tenure}</span></div>
          </div>
          <div className="grid grid-cols-3 text-base py-5 border-b max-sm:text-sm max-sm:flex max-sm:flex-col max-sm:gap-1">
            <div><span className="text-gray-500">Kualifikasi pekerjaan</span></div>
            <div className="col-span-2"><span>{jobData.job_qualification}</span></div>
          </div>
          <div className="grid grid-cols-3 text-base py-5 border-b max-sm:text-sm max-sm:flex max-sm:flex-col max-sm:gap-1">
            <div><span className="text-gray-500">Lokasi bekerja</span></div>
            <div className="col-span-2"><span>{jobData.company_city}</span></div>
          </div>
          <div className="grid grid-cols-3 text-base py-5 max-sm:text-sm max-sm:flex max-sm:flex-col max-sm:gap-1">
            <div><span className="text-gray-500">Kisaran gaji</span></div>
            <div className="col-span-2"><span>{salary_min} - {salary_max}</span></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailLowongan;