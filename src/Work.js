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
        <section>
            <h2>WORK</h2>
            <div className='Work'>
            {WorkItem.map((doc,i)=>(
                <div className='Work__item' key={i}>
                    <a href={doc.url} target="_blank">
                        <img src={`${process.env.PUBLIC_URL}/img/${doc.photo}`} alt="サムネイル" />
                    </a>
                </div>
            ))}
            </div>
        </section>
  )
}
