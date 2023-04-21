import React from 'react'
import "./NewHome-style.scss";
import { Link } from 'react-router-dom';

import WorkItem from './WorkData';

import profile from "./img/IMG_0442.JPG" ;
export const NewHome = () => {
    console.log(WorkItem);
  return (
    <div className='NewHome'>
        <div className='header'>
            <div className='title'>
                <h1 className='logo'>HATSUMI</h1>
                {/* <p className='subTitle'>PORTFOLIO</p> */}
                {/* <p className='subTitle'>OFFICIAL WEB SITE</p> */}
            </div>
            {/* <div className='Nav'>
                <span></span>
                <span></span>
                <span></span>
            </div> */}
        </div>
            {/* <div className='ornament'></div> */}
        <div className='main'>
            <div className='main__contents'>
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

                    {/* {WorkItem.map((doc,i)=>(
                        <div className='Work__item' key={i}>
                            <a href={doc.url} target="_blank">
                                <img src={`${process.env.PUBLIC_URL}/img/${doc.photo}`} alt="サムネイル" />
                                <div className='WorkAbout'>
                                    <div className='name'>
                                        <p>{doc.tag.member}</p>
                                        <p>{doc.tag.period}</p>
                                    </div>
                                    <p className='concept'>{doc.concept}</p>
                                </div>
                            </a>
                        </div>
                    ))} */}
                    </div>
                </section>
                <section>
                    <h2>LINK</h2>
                    <div className='Link'>
                        <p><a href="https://github.com/kusanohatsumi" target="_blank">GitHub</a></p>
                        {/* <p>Twitter</p> */}
                    </div>
                </section>
                <section>
                    <h2>CONTACT</h2>
                    <a href="mailto:kusano.hatsumi@gmail.com" className='mail'>✉️　kusano.hatsumi@gmail.com</a>
                </section>
            </div>
            <div className='footer'>portfolio</div>

        </div>





    </div>
    )
}
