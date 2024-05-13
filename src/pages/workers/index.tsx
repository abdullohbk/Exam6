import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import useWorkerStore from "@store-worker";
import { Table } from "@ui";
import { WorkerModalAdd } from "@modals";
import "./style.scss";

function index() {
  const [countPage ] = useState(1);
  const [countLimit] = useState(5);
  const { isLoader, data, getData, deleteData } = useWorkerStore();


  useEffect(() => {
    getData({ page: countPage, limit: countLimit });
  }, [countPage]);

  const theder = [
    { title: "N", value: "t/r" },
    { title: "First Name", value: "first_name" },
    { title: "Last Name", value: "last_name" },
    { title: "Gender", value: "gender" },
    { title: "Age", value: "age" },
    { title: "Action", value: "action1" },
  ];

  return (
    <>
      <ToastContainer />
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-2">
          <WorkerModalAdd />
        </div>
      </div>
      <Table
        heders={theder}
        body={data}
        skelatonLoader={isLoader}
        deletIdData={deleteData}
      />
    
    </>
  );
}

export default index;
