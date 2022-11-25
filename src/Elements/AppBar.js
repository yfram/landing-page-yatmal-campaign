import React from "react";
import { Async } from "react-async";
import getTotalAmountDonated from "../Helpers/getTotalAmountDonated";

const getAmountDonated = async () => {
  let ret = await getTotalAmountDonated();
  return ret;
};

const AppBar = () => {
  return (
    <Async promiseFn={getAmountDonated}>
      {({ data, error, isLoading }) => {
        if (isLoading) return "Loading...";
        if (error) return `Something went wrong: ${error.message}`;
        if (data)
          return (
            <div className="app-bar">
              <div>
                <img
                  style={{
                    height: "100px",
                  }}
                  src={require("./../assets/images/logo-main.png")}
                  alt="TOM logo"
                />
              </div>
              <div>
                <h1 className="title hebrew-text">הושג עד כה:</h1>
                <h1 className="big-title hebrew-text">
                  {data.toLocaleString()} ₪
                </h1>
              </div>
              <div>
                <img
                  style={{
                    height: "100px",
                    margin: "10px 0",
                  }}
                  src={require("./../assets/images/logo-givechack.png")}
                  alt="Givechack logo"
                />
              </div>
            </div>
          );
        return null;
      }}
    </Async>
  );
};

export default AppBar;
