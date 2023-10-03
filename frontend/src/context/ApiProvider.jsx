import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { createContext } from 'react'
import axiosInstance from '../axios/axios'

const CREATE_POST_URL = 'upload'
const UPDATE_POST_URL = 'update'
const UPDATE_IMAGE_POST_URL = 'image/update'
const DELETE_POST_URL = 'delete'

const ApiContext = createContext()

export function useApi() {
  return useContext(ApiContext)
}

function ApiProvider({ children }) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState()

   //GETS ALL POSTS
  const getAllPosts = async () => {
    try {
     const response = await axios.get('http://localhost:8000/post')
     console.log(response)
     setData(response.data)
    } catch (error) {
        console.log(error)
    }
}

const getUserPosts = async () => {
  try {
   const response = await axiosInstance.get('http://localhost:8000/post/my/profile')
   console.log(response)
   setData(response.data.Posts)

  } catch (error) {
      console.log(error)
  }
}

   //GESTS A POST
  const getAPost = async (userId) => {
    try {
      const response = await axios.get(`http://localhost:8000/post/${userId}`)
      setData(response.data)
    } catch (error) {
      console.log(error)
    } finally{
      setIsLoading(false)
    }
  }

   //CREATES POST
  const createPost = async (newPost) => {
    try {
    
    const response = await axiosInstance.post(`http://localhost:8000/post/upload`, newPost)

    console.log(response.data)
    if(response){
      const createdPost = response.data
      setData([...data, createdPost])

      console.log('Post created successfully');
    }

    } catch (error) {
      console.log(error)
    }
  }

   //UPDATES POST
  const updatePost = async (postId, updatedCaption) => {
    try {
      const response = await axiosInstance.put(`http://localhost:8000/post/update/${postId}`, {caption: updatedCaption} )
      
      const updatedPost = await response.data;
      console.log(updatedPost)

      try {
        setData(...data, updatedPost)
        console.log(updatedPost)
      } catch (error) {
        console.log(error)
      }
      
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  };

//UPDATES A POST IMAGE
const imageUpdate = async (postId, updatedImage) => {
  try {
    const response = await axiosInstance.put(`http://localhost:8000/post/image/update/${postId}`, updatedImage )
    
    const updatedPostImage = await response.data;

    try {
      setData(...data, updatedPostImage)
      console.log(updatedPostImage)
    } catch (error) {
      console.log(error)
    }
    
    console.log(data)
  } catch (error) {
    console.error(error);
  }
}

   //DELETES POST
   const deletePost = async (postId) => {
    try {
      const response = await axiosInstance.delete(`http://localhost:8000/post/${DELETE_POST_URL}/${postId}`)

      if (response.status === 200) {
        const updatedPosts = posts.filter((post) => post.id !== postId);
        setPosts(updatedPosts);
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const contextValue = {
    data,
    isLoading,
    createPost,
    getAllPosts,
    getAPost,
    updatePost,
    deletePost,
    getUserPosts,
    imageUpdate
  };


  return (
    <ApiContext.Provider value={contextValue}>
      {children}
    </ApiContext.Provider>
  )
}

export default ApiProvider
