import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'

export const Header = (props) => {
    const [value,setValue] = useState("");
    useEffect(()=>{
        props.setMoveItem(value);
    })

    const header = useRef();
    const nav = useRef();

    const navList = [
        {
            item:"work",
        },
        {
            item:"skill",
        },
        {
            item:"contact",
        },
    ];
    
    function DownLogo(){
        header.current.style.top = "0px";
    }
    function DownNavItem(){
        nav.current.style.top = "20px";
    }


    return (
        <header className='header'>
            <div className='title'>
                <h1 className='logo'>HATSUMI</h1>
                {/* <p className='subTitle'>PORTFOLIO</p> */}
                {/* <p className='subTitle'>OFFICIAL WEB SITE</p> */}
            </div>
            <div className='Nav'>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
        // <header onLoad={DownLogo} ref={header}>
        //     <Logo setValue={setValue}  />
        //     <nav>
        //         <ul className='nav' ref={nav}>
        //             {navList.map((item,i)=>(
        //                 <li key={i} ref={nav} onLoad={DownNavItem}><Link to="/" >{item.item}</Link></li>
        //             ))}
        //         </ul>
        //     </nav>
        // </header>


    )
}