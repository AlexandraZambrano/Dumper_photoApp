import React, { useState } from 'react'
import { useApi } from '../../context/ApiProvider'
import { useAuth } from '../../context/AuthContext'

function CreatePost() {
    const [image, setImage] = useState(null)
    const [ caption, setCaption] = useState('')
    const { createPost } = useApi()
    const { findToken } = useAuth()

    findToken()

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
    <div className='text-pink'>
      <h2 className='text-2xl text-bold text-center mb-10'>Create a New Post</h2>
      <div>

      <form   onSubmit={handleSubmit}>
        <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10 lg:gap-10 flex items-center'>
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

            <div className='flex-auto w-full mb-1 text-xs space-y-2'>
              <label className='font-semibold' htmlFor="caption">Caption:</label>
              <textarea className='text-purple h-28 w-full apperance-none block bg-dark-blue text-gray-600 rounded-lg border-2 border-purple py-4 px-3 focus:outline-none'
                type="text"
                id="caption"
                name="caption"
                value={caption}
                onChange={handleInputChange}
              />
            </div>
        </div>
        <div className='flex items-center justify-center'>
        <button className='rounded-full mt-3 pl-5 pr-5 border' type="submit">Create Post</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default CreatePost
