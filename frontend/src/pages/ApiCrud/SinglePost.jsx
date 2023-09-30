import React, { useEffect } from 'react'
import { useApi } from '../../context/ApiProvider'
import { useParams } from 'react-router-dom'


function SinglePost() {
    const { data, getAPost } = useApi()
    const { id } = useParams()

    useEffect(() => {
        getAPost(id)
    }, [])
  return (
    <>
        <img src={data.image} />
        <p>{data.caption}</p>
    </>
  )
}

export default SinglePost
