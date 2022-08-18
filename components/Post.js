import React from 'react';

const Post = ({ post }) => {
  return (
    <div>
      <div>{post.input}</div>
      <img src={post.photoUrl} />
    </div>
  );
};

export default Post;
