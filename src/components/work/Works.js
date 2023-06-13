import React from "react";
import "./style.scss";

import WorkItem from "./WorkData";
import { Link } from "react-router-dom";

export const Works = () => {
  console.log(WorkItem);
  return (
    <section id="work">
      <h2>Work</h2>
      <div className="Work">
        {WorkItem.map((doc, i) => (
          <div className="Work__item" key={i}>
            <Link to={doc.url}>
              <img
                src={`${process.env.PUBLIC_URL}/img/${doc.photo}`}
                alt="サムネイル"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};
