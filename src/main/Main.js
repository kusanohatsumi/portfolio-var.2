import React from "react";
import { Works } from "../components/work/Works";
import { URL } from "../components/url/URL";
import "./style.scss";

export const Main = () => {
  return (
    <>
      <main id="wrapper">
        <div className=".container">
          <Works />
          <URL />
        </div>
      </main>
    </>
  );
};
