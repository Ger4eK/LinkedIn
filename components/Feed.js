import React from 'react';
import { usePost } from '../context/PostContext';
import Input from './Input';

const Feed = () => {
  const [handlePostState] = usePost();
  console.log('value', handlePostState.handlePost);

  return (
    <div
      onClick={() => handlePostState.setHandlePost(true)}
      className='space-y-6 pb-24 max-w-lg'
    >
      <Input />
      {/* Posts */}
    </div>
  );
};

export default Feed;
