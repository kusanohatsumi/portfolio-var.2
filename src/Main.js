import React, { useState } from 'react'
import { Account } from './Account'
import { Scroll } from './Scroll'
import { Slider } from './Slider'
import { Top } from './Top'
import { Work } from './Work'

export const Main = () => {
  const [view,setView] = useState("");
  const flag = true;
  return (
    <main>
      <Account />
      <Top />
      <Work />
      <p className='section feeling'>
          入学時は真っ白だったノート。<br />
          知識もなく触れたこともない未知の経験に毎日が新しい発見でいっぱいでした。<br />
          日々勉強を続けていくことでそのノートには知識や経験で埋められていきました。<br />
          その知識は授業のためだけではなく次第に興味へと変わっていきました。<br />
          <span>このポートフォリオはそんな私の入学時から今までを表現して制作しました。</span> <br />
          制作途中ではありますが、これから私のノートに学んだことの記録として書き記していこうと思います。<br />
      </p>
    </main>
  )
}
