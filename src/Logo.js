import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';

// --- img
import eye01 from "./img/logo-eye01.svg"
import eye02 from "./img/logo-eye02.svg"
// ---
export const Logo = (props) => {
    const moveEye = useRef();
    useEffect(()=>{
        props.setValue(moveEye);
    })
    function moveEyes(){
        console.log("move!");
    }

  return (
    <figure  className='logo'>
        <Link to="/" >
            <img  onMouseMove={moveEyes} ref={moveEye} className='eye' src={eye01} />
            <img className='eye' src={eye02} />
        {/* <img className='eye 01' src={`${process.env.PUBLIC_URL}/img/Logo.svg` } alt="logo" /> */}
        </Link>
    </figure>
)
}
