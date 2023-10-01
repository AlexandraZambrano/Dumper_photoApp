import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ShowPosts from '../pages/ApiCrud/ShowPosts'
import CreatePost from '../pages/ApiCrud/CreatePost'
import UpdatePost from '../pages/ApiCrud/UpdatePost'
import SinglePost from '../pages/ApiCrud/SinglePost'
import DeletePost from '../pages/ApiCrud/DeletePost'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Layout from '../helpers/Layout'

function RoutesApp() {
  return (
    <Routes>
        <Route path="/post" element={ <ShowPosts /> } />
        <Route path="/post/:id" element={ <SinglePost /> } />

        
        <Route path="/post/upload" element={ <CreatePost /> } />
        <Route path="/post/update/:id" element={ <UpdatePost /> } />
        <Route path="/post/delete/:id" element={ <DeletePost /> } />

        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
    </Routes>
  )
}

export default RoutesApp
