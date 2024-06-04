import { Routes, Route } from "react-router-dom";
import Home from "./Home.tsx";
import DataList from "./DataList";

const MainBody = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/datalist" element={<DataList />} />
        </Routes>
      </div>
    </div>
  );
};

export default MainBody;
