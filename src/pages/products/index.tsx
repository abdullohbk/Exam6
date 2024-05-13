import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import {ProductModalAdd} from "@modals"
import { Table } from "@ui";
import  useProductStore from "@store-product"

function index() {

  const [countPage ] = useState(1);
  const [countLimit] = useState(10);
  const {  data, isLoader, getProduct, deleteProduct } = useProductStore();


  useEffect(() => {
    getProduct({ page: countPage, limit: countLimit , name:"" });
  }, [countPage]);


  const theder = [
    { title: "N", value: "t/r" },
    { title: "Name", value: "product_name" },
    { title: "Color", value: "color" },
    { title: "Size", value: "size" },
    { title: "Count", value: "count" },
    { title: "Cost", value: "cost" },
    { title: "Action", value: "action3" },
  ];
  return (
    <>
     <ToastContainer/>
      <div className="flex items-center justify-between py-3">
       
        <div className="flex items-center gap-2">
          <ProductModalAdd/>
        </div>
      </div>

      <Table heders={theder}  body={data} skelatonLoader={isLoader} deletIdData={deleteProduct}/> 

    </>
  );
}

export default index;
