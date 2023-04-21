import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

export const Account = () => {
    const sns = useRef();
    const active = true;
    function slide(){
        sns.current.style.opacity=1;
    }
  return (
    <ul className="sns" ref={sns} onLoad={slide}>
        <li><Link to=""><img src={`${process.env.PUBLIC_URL}/img/instagram.svg`} alt="instagram" /></Link></li>
        <li><Link to="https://github.com/kusanohatsumi"><img src={`${process.env.PUBLIC_URL}/img/github.svg`} alt="instagram" /></Link></li>
        <li><Link to=""><img src={`${process.env.PUBLIC_URL}/img/mail.svg`} alt="instagram" /></Link></li>

    </ul>
  )
}
