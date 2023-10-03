import React, { useEffect, useState } from 'react'
import { useApi } from '../../context/ApiProvider'
import { Link, useNavigate, useParams } from 'react-router-dom'
import '../../App.css'
import { FaEdit, FaTrashAlt } from 'react-icons/fa'


function SinglePost() {
    const { data, getAPost } = useApi()
    const { id } = useParams()
    const [token,setToken]=useState(null);
    const [isForbidden,setIsForbidden]=useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        setToken(localStorage.getItem('token'))
    }, [token])

    useEffect(() => {
        getAPost(id)
    }, [])

  return (
    <div className='text-pink'>


        <div className='flex justify-end mr-5 mt-5'>
          <Link className='pr-5' to={`/post/update/${id}`}><FaEdit /></Link>
          <Link to={`/post/delete/${id}`}><FaTrashAlt /></Link>
        </div>

      <div className='grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 md:m-20 xs:m-10 sm:m-10 justify-items-center'>

        <div className='flex justify-center '>
          <img className='sm:h-full object-cover cursor:pointer rounded-xl max-w-md' src={data.image} />
        </div>


        <div className='flex text-pink overflow justify-center bg-purple rounded-xl items-center xs:mt-10 xs:w-full'>{data.caption}</div>


      </div>

    </div>
  )
}

export default SinglePost
