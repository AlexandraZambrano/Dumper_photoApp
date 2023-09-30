import React, { useState } from 'react'
import { useApi } from '../../context/ApiProvider'
import { useParams } from 'react-router-dom'

function UpdatePost() {
  const [image, setImage] = useState(null)
  const [ caption, setCaption] = useState('')

    const { updatePost } = useApi()
    const { id } = useParams()

   const handleInputChange = (e) => {
        setCaption(e.target.value)
      };
    
      const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const formData = new FormData();
          formData.append('image', image); 
          formData.append('caption', caption);

          await updatePost(id, formData);
         console.log('Post updated successfully');
        } catch (error) {
          console.error('Error creating post:', error);
        }
      };
  

  return (
<div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="caption">Caption:</label>
          <input
            type="text"
            id="caption"
            name="caption"
            value={caption}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="image">Choose a new image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Update Post</button>
      </form>
    </div>
  )
}

export default UpdatePost
