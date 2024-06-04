import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { fetchdata } from "../../Redux/reducer";
import { AppDispatch } from "../../Redux/store";
import TableContainers from "../common/Table";
const DataList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [data, setData] = useState<any[]>([]);
  const state = useSelector((state: RootState) => state);
  console.log(data);

  useEffect(() => {
    dispatch(fetchdata());
  }, [dispatch]);

  useEffect(() => {
    if (state?.Products?.data?.length > 0) {
      setData(state.Products.data);
    }
  }, [state.Products.data]);

  return (
    <div>
      <TableContainers data={data} />
    </div>
  );
};

export default DataList;
