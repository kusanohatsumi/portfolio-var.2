import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

export const URL = () => {
  return (
    <section id="github">
      <h2>Link</h2>
      <div className="Link">
        <p>
          <Link to="https://github.com/kusanohatsumi" target="_blank">
            GitHub
          </Link>
        </p>
        <p>
          <Link to="https://scrapbox.io/kusanohatsumi/" target="_blank">
            Scrapbox
          </Link>
        </p>
      </div>
    </section>
  );
};
