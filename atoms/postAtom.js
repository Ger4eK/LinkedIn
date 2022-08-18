import { atom } from 'recoil';

export const handlePostState = atom({
  key: 'handlePostState',
  default: false,
});

export const getPostState = atom({
  key: 'getPostState',
  default: {},
});

//! by default it's true because when user loading page we want to show him ssr posts and only if user add or delete posts it will change to false, becouse we wnat no show real time posts not ssr posts
export const useSSRPostsState = atom({
  key: 'useSSRPostsState',
  default: true,
});
