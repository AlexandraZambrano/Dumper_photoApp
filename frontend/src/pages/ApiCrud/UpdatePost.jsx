import React, { useState, useEffect } from 'react'
import { useApi } from '../../context/ApiProvider'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function UpdatePost() {
  const [image, setImage] = useState(null)
  const [caption, setCaption] = useState('')
  const [prevCaption, setPrevCaption] = useState('')
  const [imagePreview, setImagePreview] = useState(null);
  const { findToken } = useAuth()

  findToken()

  const { updatePost, imageUpdate, getAPost, data } = useApi()
  const { id } = useParams()

  console.log(id)

  useEffect(() => {
    getAPost(id)
  }, [])

  const handleInputChange = (e) => {
    const changeCaption = e.target.value
    setCaption(changeCaption)

    if (!changeCaption) {
      setPrevCaption(data.caption)
    }
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
  console.log(image)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('image', image);

      await imageUpdate(id, formData)

      console.log(caption)
      await updatePost(id, caption);

      console.log('Post updated successfully');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  console.log(image)
  console.log(prevCaption)


  return (
    <div className='text-pink'>
      <h2 className='text-2xl text-bold text-center mb-10'>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-10 lg:gap-10 flex items-center'>
          <div>
            <label htmlFor="image">Choose a new image:</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
            />
            <img src={image} alt="" />
            {imagePreview ?
              <img src={imagePreview} alt="Preview" style={{ maxWidth: '100%', marginTop: '10px' }} />
              : <img src={data.image} />
            }
          </div>


          <div className='flex-auto w-full mb-1 text-xs space-y-2'>
            <label className='font-semibold' htmlFor="caption">Caption:</label>
            <textarea className='text-purple h-28 w-full apperance-none block bg-dark-blue text-gray-600 rounded-lg border-2 border-purple py-4 px-3 focus:outline-none'
              type="text"
              id="caption"
              name="caption"
              value={caption ? caption : data.caption}
              onChange={handleInputChange}
            />
          </div>

        </div>

        <div className='flex items-center justify-center'>
          <button className='rounded-full mt-3 pl-5 pr-5 border' type="submit">Update Post</button>
        </div>

      </form>
    </div>
  )
}

export default UpdatePost