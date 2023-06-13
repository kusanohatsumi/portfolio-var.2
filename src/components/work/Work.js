import React from "react";
import { Link, useParams } from "react-router-dom";
import WorkItem from "./WorkData";

export const Work = () => {
  const { itemId } = useParams();
  console.log(itemId);
  const item = WorkItem[itemId];
  console.log(item);
  return (
    <>
      <a className="back" href="/">
        Back↩︎
      </a>
      <h2 className="workinfo">作品情報</h2>
      <div className="work">
        <div className="text">
          <div className="first">
            <figure className="img">
              <img
                src={`${process.env.PUBLIC_URL}/img/${item.photo}`}
                alt={item.name}
              />
            </figure>
            <div className="title">
              <p>作品名：{item.name}</p>
              <p>制作期間：{item.tag.period}</p>
              <p>{item.tag.member}</p>
              <p>使用ツール：</p>
              <p>使用言語：</p>
            </div>
          </div>
          <section className="detailText">
            <h3>作品概要</h3>
            <p>{item.note}</p>
          </section>
          <div className="btn">
            <button>
              <Link href={item.url}>WEB</Link>
            </button>
            <button>GitHub</button>
            <button>企画書</button>
          </div>
        </div>
        <div className="image">
          <figure>
            <img
              src={`${process.env.PUBLIC_URL}/img/${item.photo}`}
              alt={item.name}
            />
          </figure>
        </div>
      </div>
    </>
  );
};
