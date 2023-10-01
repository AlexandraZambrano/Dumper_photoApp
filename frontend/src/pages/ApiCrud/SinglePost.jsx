import React, { useEffect } from 'react'
import { useApi } from '../../context/ApiProvider'
import { Link, useParams } from 'react-router-dom'
import '../../App.css'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'


function SinglePost() {
    const { data, getAPost } = useApi()
    const { id } = useParams()

    useEffect(() => {
        getAPost(id)
    }, [])

  return (
    <div className='text-pink'>
      
      <div className='flex justify-end m-10'>
        <Link className='pr-5' to={`/post/update/${id}`}><FaEdit /></Link>
        <Link to={`/post/delete/${id}`}><FaTrashAlt /></Link>
      </div>

      <div className='grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 '>

        <div className='flex justify-center'>
          <img className='sm:h-full w-100 object-contain cursor:pointer' src={data.image} />
        </div>


          <div className='flex text-pink overflow'>{data.caption}</div>


      </div>

    </div>
  )
}

export default SinglePost
