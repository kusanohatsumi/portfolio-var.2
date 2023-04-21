import React, { useRef, useState } from 'react'
import { Slider } from './Slider';

import { Link } from 'react-router-dom';
import WorkItem from './WorkData';


import card from "./img/card.svg";
import table from "./img/table.svg";

export const Work = () => {
  let flag = true;
  const [state,setState] = useState("");
  function changeCard(){
    setState(flag = true)
  }
  function changeTable(){
    setState(flag = false)
  }





  return (
    <section id='work' className='section'>

      {/* 表示形式 */}
        {/* <div className='viewChange'>
          <label><input type="checkbox" /></label>
          <label><input type="checkbox" /></label>


          <figure onClick={changeCard} ><img src={card} /></figure>
          <figure onClick={changeTable}><img src={table} /></figure>
        </div> */}
      {/* --- */}

        {/* 作品一覧 */}
        <div className='work'>
          {WorkItem.map((doc,i)=>(
          <div key={i} className={state ? "work__item card" : "work__item table"} >
              <Link to={`/work/${doc.name}`} >
              <figure key={i}>
                  <img src={`${process.env.PUBLIC_URL}/img/${doc.photo}`} alt="サムネイル" />
              </figure>
              <section className='text'>
                  <h3>{doc.name}</h3>
                  <p>{doc.genre}</p>
              </section>
              </Link>
          </div>
          ))}

            {/* {flag ? <Table /> :  <Slider />} */}
        </div>
    </section>
  )
}
