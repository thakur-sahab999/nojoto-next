import React from 'react'
import HomeContent from '../components/Common/Content/HomeContent'
import NewPostModal from '../components/Modals/NewPost/NewPostModal'
import { useState } from 'react';
function home() {
  const [newPost, setNewPost] = useState(false);
  return (
    <div>
        {newPost && <NewPostModal setOpenModal={setNewPost} />}
        <HomeContent  setOpenModal = {newPost}/>
    </div>
  )
}

export default home