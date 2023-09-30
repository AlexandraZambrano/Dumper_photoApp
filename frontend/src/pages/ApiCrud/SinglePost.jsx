import React, { useEffect } from 'react'
import { useApi } from '../../context/ApiProvider'
import { Link, useParams } from 'react-router-dom'
import '../../App.css'


function SinglePost() {
    const { data, getAPost } = useApi()
    const { id } = useParams()

    useEffect(() => {
        getAPost(id)
    }, [])

  return (
    <div className='text-pink'>
        <Link to={`/post/update/${id}`}>Edit</Link>
        <Link to={`/post/delete/${id}`}>Delete</Link>
    <div className='grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-10 lg:gap-10'>
      <div className='flex justify-center'>
        <img className='sm:h-full w-100 object-contain cursor:pointer' src={data.image} />
      </div>
        <div className='flex justify-center'>
          <div className='flex text-pink overflow'>{data.caption}</div>
        </div>
    </div>
    </div>
  )
}

export default SinglePost
