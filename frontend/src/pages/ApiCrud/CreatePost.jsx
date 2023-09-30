import React, { useState } from 'react'
import { useApi } from '../../context/ApiProvider'

function CreatePost() {
    const [image, setImage] = useState(null)
    const [ caption, setCaption] = useState('')
    const { createPost } = useApi()

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

          //CONSOLE.LOG
          console.log(formData.append)
    
         
          await createPost(formData);
          
         console.log('Post created successfully');
        } catch (error) {
          console.error('Error creating post:', error);
        }
      };

  return (
    <div>
      <h2>Create a New Post</h2>
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
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  )
}

export default CreatePost
