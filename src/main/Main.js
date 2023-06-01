import React from "react";
import "./style.scss";
import { Works } from "../components/work/Works";
import { URL } from "../components/url/URL";
import { Contact } from "../components/contact/Contact";
import { Top } from "../components/top/Top";

export const Main = () => {
  return (
    <>
      <main id="wrapper">
        <Top />
        <div className="container">
          <Works />
          <URL />
          <Contact />
        </div>
      </main>
    </>
  );
};
