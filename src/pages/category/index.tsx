import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

import useCategoryStore from "@store-categors"


import { Table } from "@ui"
import {CategorMadalAdd} from "@modals"
import "./style.scss"

function index() {
  const {isLoader , data , getData , deleteData  } = useCategoryStore()
  
  


  useEffect(()=>{
    getData({page:1, limit:10})
  },[])

 
  const theder = [
        {title: "N" , value:"t/r"},
        {title: "Category" , value:"category_name"},
        {title: "Action" , value:"action"}
  ]

  


  return <>
    <ToastContainer/>
    <div className="flex items-center justify-between py-3">
  
        <div className="flex items-center gap-2">
          
         <CategorMadalAdd/>
        </div>
    </div>

    <Table heders={theder} body={data} skelatonLoader={isLoader} deletIdData={deleteData}/>
  
  </>
}

export default index