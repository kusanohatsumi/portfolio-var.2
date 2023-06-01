import React from "react";
import { Works } from "../components/work/Works";
import { URL } from "../components/url/URL";
import { Contact } from "../components/contact/Contact";
import "./style.scss";

export const Main = () => {
  return (
    <>
      <main id="wrapper">
        <div className=".container">
          <Works />
          <URL />
          <Contact />
        </div>
      </main>
    </>
  );
};
