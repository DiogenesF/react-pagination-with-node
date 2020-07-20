import React from "react";
import "../styles/paginationstyles.css";

const Pagination = ({ setPage, page, totalPageNumber }) => {
  const paginationList = [];

  if (totalPageNumber > 7) {
    if (page < 5) {
      for (let i = 1; i < 7 + 1; i++) {
        paginationList.push(
          <a
            key={i}
            className={i === page ? "active" : ""}
            onClick={() => setPage(i)}
            href="#!"
          >
            {i}
          </a>
        );
      }
      paginationList.push(
        <span key={"span1"} style={{ margin: "0px 15px" }}>
          ...
        </span>
      );
      paginationList.push(
        <a
          key={totalPageNumber}
          className={totalPageNumber === page ? "active" : ""}
          onClick={() => setPage(totalPageNumber)}
          href="#!"
        >
          {totalPageNumber}
        </a>
      );
    } else if (page > totalPageNumber - 4) {
      paginationList.push(
        <a key={1} onClick={() => setPage(1)} href="#!">
          {1}
        </a>
      );
      paginationList.push(
        <span key={"span2"} style={{ margin: "0px 15px" }}>
          ...
        </span>
      );
      for (let i = page - 3; i < totalPageNumber + 1; i++) {
        paginationList.push(
          <a
            key={i}
            className={i === page ? "active" : ""}
            onClick={() => setPage(i)}
            href="#!"
          >
            {i}
          </a>
        );
      }
    } else {
      paginationList.push(
        <a key={1} onClick={() => setPage(1)} href="#!">
          {1}
        </a>
      );
      paginationList.push(
        <span key={"span3"} style={{ margin: "0px 15px" }}>
          ...
        </span>
      );
      for (let i = page - 2; i < page + 3; i++) {
        paginationList.push(
          <a
            key={i}
            className={i === page ? "active" : ""}
            onClick={() => setPage(i)}
            href="#!"
          >
            {i}
          </a>
        );
      }
      paginationList.push(
        <span key={"span4"} style={{ margin: "0px 15px" }}>
          ...
        </span>
      );
      paginationList.push(
        <a
          key={totalPageNumber}
          className={totalPageNumber === page ? "active" : ""}
          onClick={() => setPage(totalPageNumber)}
          href="#!"
        >
          {totalPageNumber}
        </a>
      );
    }
  } else {
    for (let i = 1; i < totalPageNumber + 1; i++) {
      paginationList.push(
        <a
          key={i}
          className={i === page ? "active" : ""}
          onClick={() => setPage(i)}
          href="#!"
        >
          {i}
        </a>
      );
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <div className="pag">
        {page !== 1 ? (
          <a onClick={() => setPage(page - 1)} href="#!">
            &laquo;
          </a>
        ) : (
          ""
        )}
        {paginationList}
        {page !== totalPageNumber ? (
          <a onClick={() => setPage(page + 1)} href="#!">
            &raquo;
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Pagination;
