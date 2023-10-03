import React, {useEffect} from 'react'
import { useApi } from '../../context/ApiProvider'
import '../../App.css'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'

function Profile() {

const { data, getUserPosts } = useApi()

useEffect(() => {
    getUserPosts()
  }, [data])

  if(data === null) {
    return (
        <div>
            <h2>No posts yet, post something!</h2>
            <Link to={'/post/upload'}>
                <Button>Post!</Button>
            </Link>
        </div>
    )
  }else{
      return (
        <>
            <h1 className='text-2xl text-bold text-center mt-10 mb-10'>MY DUMPER 🥹!!!</h1>
        <div className='grid mx-3 pt-5 gap-1 xl:grid-cols-7 md:grid-cols-5 sm:grid-cols-2 xs:grid-cols-2'>
            {
                data.map((int) => {
                    return (
                        <div key={int._id}>
                            <Link  key={int._id} to={`/post/${int._id}`}>
                            <img className='rounded object-cover h-full mx-w-100' src={int.image}/>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
        
        </>
      )

  }

}

export default Profile
