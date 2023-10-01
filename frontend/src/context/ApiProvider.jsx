import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { createContext } from 'react'

const CREATE_POST_URL = 'upload'
const UPDATE_POST_URL = 'update'
const DELETE_POST_URL = 'delete'

const ApiContext = createContext()

export function useApi() {
  return useContext(ApiContext)
}

function ApiProvider({ children }) {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState()

  useEffect(() => {
    getAllPosts()
  }, [])

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
      const response = await axios.post(`http://localhost:8000/post/${CREATE_POST_URL}`, newPost )
      const createdPost = response.data
      setData([...data, createdPost])

    } catch (error) {
      console.log(error)
    }
  }

   //UPDATES POST
  const updatePost = async (postId, updatedPostData) => {
    try {
      const response = await axios.put(`http://localhost:8000/post/${UPDATE_POST_URL}/${postId}`, updatedPostData)
        const updatedPost = response.data;
        console.log(updatedPost)
        setData([...data, updatedPost]);
        console.log(data)
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

   //DELETES POST
   const deletePost = async (postId) => {
    try {
      const response = await axios.delete(`http://localhost:8000/post/${DELETE_POST_URL}/${postId}`)

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
    deletePost
  };


  return (
    <ApiContext.Provider value={contextValue}>
      {children}
    </ApiContext.Provider>
  )
}

export default ApiProvider
