import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../layout/Header/Header'
import PostsList from './PostsList'

const PostsSettingPage = () => {
  return (
    <div>
        {/* <Header/> */}
        <PostsList/>
      <Outlet />
        
    </div>
  )
}

export default PostsSettingPage