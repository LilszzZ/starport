import { Link, useParams } from 'react-router-dom'
import FloatProxy from '../components/StarPort/FloatProxy'
import { useState } from 'react'
import React, { memo } from 'react'

const Detail = memo(() => {
  const [size, setSize] = useState(200)
  const params = useParams()
  return (
    <>
      <div className='w-full flex flex-col items-center '>
        <div className='my-50px flex justify-center items-center'>
          <div>Current:index</div>
          <FloatProxy port='13' w='96px' h='72px' ml='13px' />
        </div>

        <nav flex='~' gap='2'>
          <Link
            to='/'
            className='no-underline px-10px py-5px rounded-md text-white'
            bg='[#4074ba]'
          >
            back
          </Link>
          <button
            className='px-10px py-5px rounded-md text-white'
            border='~'
            bg='[#4074ba]'
            onClick={() => setSize(size + 30)}
          >
            Enlarge
          </button>
        </nav>
        <div className='mt-10 flex <md:(flex-col items-center) md:(justify-center w-[60%] items-center)'>
          <FloatProxy
            port={params.id}
            style={{ width: size + 'px', height: size + 'px' }}
            rounded='1/2'
            overflow='hidden'
          />
          <p flex='1' className='m-10'>

          </p>
        </div>
        <div className='mt-10 flex <md:(flex-col-reverse items-center) md:(justify-center w-[60%] items-center)'>
          <p flex='1' className='m-10'>

          </p>
          <FloatProxy
            port={(Number(params.id) % 12) + 1 + ''}
            style={{ width: size + 'px', height: size + 'px' }}
            rounded='1/2'
            overflow='hidden'
          />
        </div>
      </div>
    </>
  )
})

export default Detail
