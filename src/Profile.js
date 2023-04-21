import React from 'react'
import { Link } from 'react-router-dom'

import "./Profile.scss"

export const Profile = () => {
  return (
    <div className='profile'>
      <div  className='wrap container'>
        <figure className='icon'>
          <img src={`${process.env.PUBLIC_URL}/img/my.jpg`} alt="アイコン" />
          <Link to="about" className='cover'>more</Link>
        </figure>
        <div className='info'>
            <div className='name'>
                <p className='school'>ECCコンピュータ専門学校</p>
                <p className='course'><span>マルチメディア研究学科</span>　<br className='br' /> WEBデザインコース（24年卒予定）</p>
                {/* <h2>草野初実</h2> */}
                <h2>KUSANO HATSUMI</h2>
            </div>
            <div className='myProfile'>
              <Link to="/AboutMe">About me ↗︎</Link>
              <Link className='github' to="https://github.com/kusanohatsumi">Github↗</Link>
            </div>
        </div>
      </div>
    </div>
  )
}
