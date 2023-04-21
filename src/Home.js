import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { About } from "./About";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import { WorkDetail } from './WorkDetail';



export const Home = () => {
const [moveItem,setMoveItem] = useState("");
useEffect(()=>{
  const xCenter = window.innerWidth / 2;
  const yCenter = window.innerHeight / 2;
  const parallaxVal = 10;

  // console.log(window);

    window.addEventListener("mousemove",(e)=>{
    // console.log("move Window !");
    const x = Math.round(e.pageX / 100);
    const y =Math.round(e.pageY / 100);

  })


  // if (moveItem) {
  //   console.log(moveItem);
  //   const get = async() =>{
  //     // const x = moveItem.current.clientHeight;
  //     // const y = moveItem.current.clientHeight;
  //   }
  //   get();


  //   return <p>loading...</p>
  // }
  
})
return (
  <>
    <BrowserRouter>
      <Header setMoveItem={setMoveItem} />
        <Routes>
            <Route path="/" element={ <Main /> } />
            <Route path="/AboutMe" element={<About />} />
            <Route path='/work/:itemName' element={<WorkDetail />} />
        </Routes>
    {/* <Footer /> */}
  </BrowserRouter>
</>
  )
}
