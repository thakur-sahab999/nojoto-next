import React from 'react'
import HomeContent from '../components/Common/Content/HomeContent'
import NewPostModal from '../components/Modals/NewPost/NewPostModal'

function home() {

  return (
    <div>
        {newPost && <NewPostModal setOpenModal={setNewPost} />}
        <HomeContent  setOpenModal = {newPost}/>
    </div>
  )
}

export default home