import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { handlePostState, useSSRPostsState } from '../atoms/postAtom';
import Input from './Input';
import Post from './Post';

const Feed = ({ posts }) => {
  const [realtimePosts, setRealtimePosts] = useState([]);
  const [handlePost, setHandlePost] = useRecoilState(handlePostState);
  const [useSSRPosts, setUseSSRPosts] = useRecoilState(useSSRPostsState);

  //! without ssr posts, user will see the loading of the posts and it's not a good practice
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/posts', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      const responseData = await response.json();
      setRealtimePosts(responseData);
      //! we set setHandlePost & setUseSSRPosts to false because we want to see realtime posts not ssr posts
      setHandlePost(false);
      setUseSSRPosts(false);
    };

    fetchPosts();
  }, [handlePost]);


  return (
    <div className='space-y-6 pb-24 max-w-lg'>
      <Input />
      {/* //! hybrid posts fetching ssr & realtime  */}
      {!useSSRPosts
        ? realtimePosts.map((post) => <Post key={post._id} post={post} />)
        : posts.map((post) => <Post key={post._id} post={post} />)}
    </div>
  );
};

export default Feed;
