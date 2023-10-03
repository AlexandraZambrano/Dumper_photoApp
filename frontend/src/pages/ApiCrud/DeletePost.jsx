import React, {useEffect} from 'react'
import { useApi } from '../../context/ApiProvider'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function DeletePost() {
    const { deletePost } = useApi()
    const { id } = useParams()
    const navigate = useNavigate()
    const { findToken } = useAuth()

    findToken()
    
    useEffect(() => {
        const confirmDelete = window.confirm('Are you sure you want to delete this post?');
    
        if (confirmDelete) {
          deletePost(id)
            .then(() => {
              navigate('/');
            })
            .catch((error) => {
              console.error('Error deleting post:', error);
            });
        } else {
          navigate(`/post/${id}`);
        }
      }, [deletePost, id, history]);


  return (
    <div>
      <p>Deleting post...</p>
    </div>
  )
}

export default DeletePost
