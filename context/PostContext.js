import { createContext, useContext, useState } from 'react';

const PostContext = createContext();

export const PostProvider = (props) => {
  const [handlePost, setHandlePost] = useState(false);
  const [useSSRPosts, setUseSSRPosts] = useState(true);
  const [postState, setPostState] = useState({});
  const value = [
    { handlePost, setHandlePost },
    { useSSRPosts, setUseSSRPosts },
    { postState, setPostState },
  ];
  return <PostContext.Provider value={value} {...props} />;
};

export const usePost = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('useCount must be used within a PostProvider');
  }
  return context;
};
