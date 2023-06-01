import React, {  useRef,  } from 'react'
export const Loading = () => {
  const loadingText = useRef();
  function opacity(){
    console.log("end");
    setTimeout(() => {
        loadingText.current.style.opacity=0;
    }, 1500);
}
return (
    <div className='loading'>
      <p className='loading__text' ref={loadingText} onAnimationEnd={opacity}>Now Loading...</p>
    </div>
  )
}
