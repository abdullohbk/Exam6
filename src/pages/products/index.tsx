import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import {ProductModalAdd} from "@modals"
import { Table } from "@ui";
import  useProductStore from "@store-product"

function index() {
  const [search , setSearch] = useState()
  const [countPage, setCountPage ] = useState(1);
  const [countLimit] = useState(10);
  const {  data, isLoader, getProduct, deleteProduct ,totalCount} = useProductStore();


  useEffect(() => {
    getProduct({ page: countPage, limit: countLimit , name:search ,});
  }, [countPage , search]);

   const allCount = Math.ceil(totalCount / countLimit);

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
      <ToastContainer />
      <div className="flex items-center justify-between py-3">
        <input className="bg-gray-100 px-4 py-2 w-[280px] rounded-lg" placeholder="Search" type="text" onChange={(e)=> setSearch(e.target.value)} />
        <div className="flex items-center gap-2">
          <ProductModalAdd />
        </div>
      </div>

      <Table
        heders={theder}
        body={data}
        skelatonLoader={isLoader}
        deletIdData={deleteProduct}
      />

      <div className="flex items-center justify-end gap-3">
        <button
          onClick={() => {
            setCountPage(countPage - 1);
          }}
          disabled={countPage == 1}
          className="py-1 px-1 border rounded-lg hover:shadow-md active:shadow-sm duration-200 cursor-pointer "
        >
          <ArrowLeftIcon />
        </button>
        <span className="text-[20px] text-center">{countPage}</span>
        <button
          onClick={() => {
            setCountPage(countPage + 1);
          }}
          disabled={countPage == allCount}
          className="py-1 px-1 border rounded-lg hover:shadow-md active:shadow-sm duration-200 cursor-pointer "
        >
          <ArrowRightIcon />
        </button>
      </div>
    </>
  );
}

export default index;
