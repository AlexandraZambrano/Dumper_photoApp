import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useApi } from '../../context/ApiProvider'

function ShowPosts() {

    const { data, getAllPosts } = useApi()

    useEffect(() => {
        getAllPosts()
    }, [])

    console.log(data)
          
  return (
    <div>
     {
        data.map((int) => {
            return(
                <div key={int._id}>
                    <img src={int.image}/>
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
