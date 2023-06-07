import React, { createContext, useContext, useState } from "react";
import { Badge } from "flowbite-react";
import axios from "axios";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [jobData, setJobData] = useState(null);

  const [currentID, setCurrentId] = useState(-1);

  const detailHandle = (event) => {
    let idData = parseInt(event.target.value);

    setCurrentId(idData);
    console.log(idData);

    axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`)
    .then((res) => {
      let data = res.data;
      console.log(data);
    })
  }

  const currency = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style : "currency",
      currency : "IDR"
    }).format(number);
  }

  const statusBadge = (data) => {
    if (data.job_status === 0) {
      return(
        <Badge
          color="failure"
          size="sm"
        >Ditutup</Badge>
      )
    } else if (data.job_status === 1) {
      return(
        <Badge
          color="success"
          size="sm"
        >Dibuka</Badge>
      )
    }
  }

  function statusDetail(data) {
    if (data.job_status === 0) {
      return 'Ditutup';
    } else if (data.job_status === 1) {
      return 'Dibuka';
    }
  }

  let states = {
    jobData, setJobData,
    currentID, setCurrentId
  }

  let functions = {
    detailHandle,
    currency,
    statusBadge,
    statusDetail
  }

  return (
    <GlobalContext.Provider value = {
      {
        states,
        functions
      }
    }>
      {props.children}
    </GlobalContext.Provider>
  )
}