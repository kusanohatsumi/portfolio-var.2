import React, {  useRef,  } from 'react'
export const Loading = () => {
  const loadingText = useRef();
  function opacity(){
    console.log("end");
    setTimeout(() => {
        loadingText.current.style.opacity=0;
        loadingText.current.style.zIndex=-1;
    }, 2000);
}
return (
    <div className='loading'>
      <p className='loading__text' ref={loadingText} onAnimationEnd={opacity}>Now Loading...</p>
    </div>
  )
}
