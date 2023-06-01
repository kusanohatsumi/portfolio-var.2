import React from 'react'
import { Link } from 'react-router-dom';

import WorkItem from './WorkData';

import profile from "./img/IMG_0442.JPG" ;
import { Header } from './Header';
import { Work } from './Work';
export const NewHome = () => {
    console.log(WorkItem);




  return (
    <div className='NewHome'>

            {/* <div className='ornament'></div> */}
        <div className='main'>
            <div className='main__contents'>
                <Work />
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
