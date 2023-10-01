import React from 'react'

function Button(props) {
  return (
    <button className='bg-dark-blue text-pink py-2 px-6 rounded md:ml-8 hover:shadow-[0_35px_60px_-15px_rgba(253,212,67,1)]
    duration-500'>
      {props.children}
    </button>
  )
}

export default Button
