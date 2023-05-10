import React, { memo, useState } from 'react'

//通过插槽放进FloatContainer中的图片
//TheImage里做的事情是通过<img>标签将图片显示出来
const TheImage = memo((props: any) => {
  const [state, setState] = useState(0)
  return (
    <div className='w-full h-full relative'>
      <img className='object-cover w-full h-full' src={props.src} />
      <span
        className='absolute bottom-0 left-1/2 text-white'
        onClick={e => {
          e.stopPropagation()
          setState(state + 1)
        }}
      >
        {state}
      </span>
    </div>
  )
})

export default TheImage
