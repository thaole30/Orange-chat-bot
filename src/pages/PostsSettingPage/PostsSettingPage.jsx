import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../layout/Header/Header'
import { PostContextProvider } from './context/postContext';
import CreateTextEditor from './CreateTextEditor';
import PostsList from './PostsList'
import "./PostsSettingPage.scss";
import SharedTextEditor from './SharedTextEditor';


const PostsSettingPage = () => {
  return (
    <PostContextProvider>
      <div className="posts-setting-page" style={{height: 'fitContent'}}>
          {/* <Header/> */}
          <PostsList/>
        <Outlet />
        
          
      </div>
    </PostContextProvider>
  )
}

export default PostsSettingPage