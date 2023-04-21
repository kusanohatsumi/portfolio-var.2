import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import WorkItem from './WorkData';

export const WorkDetail = () => {
    const params = useParams();
        const id = params.itemName;
        // console.log(id);
        const item = WorkItem.find((post)=>post.name === id)
        console.log(item);
  return (
    <div className='workDetail wrap'>
        <div className='workDetail__images'>
            <figure className=' workItem workItem--pc'><img src={`${process.env.PUBLIC_URL}/img/${item.photo}`} /></figure>
            <figure className=' workItem workItem--phone workItem--phone--small'><img src={`${process.env.PUBLIC_URL}/img/${item.photo}`}/></figure>
        </div>
        <section className='workDetail__text'>
            <h2>{item.name}</h2>
            <div className='tag'>
                <p className='member'>{item.tag.member}</p>
                <p className='period'>{item.tag.period}</p>
            </div>
            <div className='use'>
                <div className='use__item'>
                    <p className='title'>使用言語</p>
                    <p>：{item.use.word}</p>
                </div>
                <div className='use__item'>
                    <p className='title'>使用ツール</p>
                    <p>：{item.use.tool}</p>
                </div>
                <div className='use__item'>
                    <p className='title'>その他</p>
                    <p>：{item.use.other}</p>
                </div>
            </div>
            <p className='note'>{item.note}</p>
        </section>
        {/* <img src={`${process.env.PUBLIC_URL}/img/${item.photo}`} /> */}
    </div>
  )
}
