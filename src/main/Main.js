import React from "react";
import { Works } from "../components/work/Works";
import "./style.scss";

export const Main = () => {
  return (
    <>
      <main id="wrapper">
        <div className=".container">
          <Works />
        </div>
      </main>
    </>
  );
};
