import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useApi } from '../../context/ApiProvider'
import '../../App.css'

function ShowPosts() {
    const [ blur, setBlur ] = useState(false)

    const { data, getAllPosts } = useApi()

    // useEffect(() => {
        getAllPosts()
    // }, [])

    console.log(data)
          
  return (
    <div className='grid w-full max-w-5xl p-5 pb-10 mx-auto mb-10 gap-3 lg:grid-cols-5 xl:grid-cols-7 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 space-y-2'>

     {
        data.map((int) => {
            return(
                <div className='text-pink'>
                    <Link  key={int._id} to={`/post/${int._id}`}>
                    <img className='rounded' src={int.image}/>
                    <p className='text-center overflow-hidden sm:overflow'>{int.caption}</p>
                    </Link>
                 </div>
            )
        })
     } 
    </div>
  )
}

export default ShowPosts
