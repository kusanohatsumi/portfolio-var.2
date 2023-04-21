import React, { useRef } from 'react'

export const Scroll = () => {
    const scrollItem = useRef();
    function opacity(){
        console.log("end");
        setTimeout(() => {
            scrollItem.current.style.opacity=1;
            scrollItem.current.style.animation="none";
        }, 500);
    }
  return (
    <div className='scroll' ref={scrollItem} onAnimationEnd={opacity}>
        <span className='border'></span>
        <span className='circle'></span>
        <p className='scrollText'>scroll</p>
    </div>
  )
}
