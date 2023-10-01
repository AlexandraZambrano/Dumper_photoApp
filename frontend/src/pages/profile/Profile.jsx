import React, {useEffect} from 'react'
import { useApi } from '../../context/ApiProvider'
import '../../App.css'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'

function Profile() {

const { data, getUserPosts } = useApi()

useEffect(() => {
    getUserPosts()
  }, [])

  console.log(data)

  if(data == null) {
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
        <div className='grid w-full max-w-5xl p-5 pb-10 mx-auto mb-10 gap-3 lg:grid-cols-5 xl:grid-cols-7 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 space-y-2'>
            {
                data.map((int) => {
                    return (
                        <div key={int._id}>
                            <Link  key={int._id} to={`/post/${int._id}`}>
                            <img className='rounded' src={int.image}/>
                            {/* <p className='text-center overflow-hidden sm:overflow'>{int.caption}</p> */}
                            </Link>
                        </div>
                    )
                })
            }
        </div>
      )

  }

}

export default Profile
