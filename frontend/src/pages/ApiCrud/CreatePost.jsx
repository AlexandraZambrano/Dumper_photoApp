import React, { useState } from 'react'
import { useApi } from '../../context/ApiProvider'
import { useAuth } from '../../context/AuthContext'
import { FaPlus } from 'react-icons/fa'

function CreatePost() {
    const [image, setImage] = useState(null)
    const [ caption, setCaption] = useState('')
    const [imagePreview, setImagePreview] = useState(null);
    const { createPost } = useApi()
    const { findToken } = useAuth()

    findToken()

    const handleInputChange = (e) => {
        setCaption(e.target.value)
      };
    
      const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);

        if (selectedImage) {
          const reader = new FileReader();
          reader.onload = (event) => {
            setImagePreview(event.target.result);
          };
          reader.readAsDataURL(selectedImage);
        } else {
          setImagePreview(null);
        }
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
          if(createPost){
            console.log('Post created successfully');
          }
        } catch (error) {
          console.error('Error creating post:', error);
        }
      };

  return (
    <div className='text-pink h-100vh'>
      <h2 className='text-2xl text-bold text-center mt-10'>Dump in a new pic 😜!</h2>
      <div>

      <form   onSubmit={handleSubmit}>
        <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10 lg:gap-5 flex items-center ml-40 mr-40 mt-40 justify-items-center '>
            <div>

              {imagePreview ?
              <>
                <label className='labelFile hover:grayscale-100' htmlFor="image">
                  <img className='hover:blur' src={imagePreview} alt="" />
                </label>
                <input 
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                hidden
              />
              </>
                :
                <>
            <label className='labelFile' htmlFor="image"><FaPlus /></label>
              <input 
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                hidden
              />
              </>
            
            
            }


            </div>

            <div className='flex-auto w-full mb-1 text-xs space-y-2'>
              <label className='font-semibold' htmlFor="caption">Caption:</label>
              <div>
              <textarea className='text-purple h-28 w-full apperance-none block bg-dark-blue text-gray-600 rounded-lg border-2 border-purple py-4 px-3 focus:outline-none'
                type="text"
                id="caption"
                name="caption"
                value={caption}
                onChange={handleInputChange}
              />
              </div>
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
