import React, { useEffect, useState } from "react";
import axios from "axios";
import Data from "./components/Data";
import Pagination from "./components/Pagination";

import "./App.css";

function App() {
  const [totalPageNumber, setTotalPageNumber] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit] = useState(12);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get("/posts");
      setLoading(false);
      setTotalPageNumber(Math.ceil(res.data.length / limit));
    };

    fetchData();
  }, [limit]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(`/posts?limit=${limit}&page=${page}`);
      setData(res.data);
      setLoading(false);
    };

    fetchData();
  }, [page, limit]);

  return (
    <div>
      <h3 style={{ textAlign: "center", marginTop: "50px" }}>
        Pagination Example
      </h3>
      <Data data={data} loading={loading} />
      <Pagination
        setPage={setPage}
        page={page}
        totalPageNumber={totalPageNumber}
      />
    </div>
  );
}

export default App;
