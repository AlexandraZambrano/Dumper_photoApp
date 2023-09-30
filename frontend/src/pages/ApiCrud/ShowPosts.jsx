import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useApi } from '../../context/ApiProvider'
import Navbar from '../../components/Navbar/Navbar'

function ShowPosts() {

    const { data, getAllPosts } = useApi()

    useEffect(() => {
        getAllPosts()
    }, [])

    console.log(data)
          
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12 lg:gap-5'>

     {
        data.map((int) => {
            return(
                <div  key={int._id}>
                    <img className='sm:h-full h-auto  w-100 rounded-lg object-cover' src={int.image}/>
                    <p>{int.caption}</p>
                    <Link to={`/post/${int._id}`}>Ver más</Link>
                </div>
            )
        })
     } 
    </div>
  )
}

export default ShowPosts
