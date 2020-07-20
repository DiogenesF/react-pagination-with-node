import React from "react";

const Data = ({ data, loading }) => {
  return (
    <div>
      {loading ? (
        <h3 style={{ textAlign: "center", marginTop: "50px" }}>Loading...</h3>
      ) : (
        <div
          style={{
            width: "800px",
            margin: "30px auto 0",
          }}
        >
          {data.map((each) => (
            <div
              key={each._id}
              style={{
                textAlign: "center",
                width: "180px",
                verticalAlign: "top",
                display: "inline-block",
                height: "100px",
                border: "1px solid black",
                backgroundColor: "lightyellow",
                padding: "3px",
                margin: "3px",
              }}
            >
              <p style={{ fontSize: "15px" }}>{each.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Data;
