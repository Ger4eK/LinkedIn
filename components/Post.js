import { Avatar, IconButton } from '@mui/material';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import ThumbUpOffAltRoundedIcon from '@mui/icons-material/ThumbUpOffAltRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import ReplyRoundedIcon from '@mui/icons-material/ReplyRounded';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import React, { useState } from 'react';
import { modalState } from '../atoms/modalAtoms';
import { useRecoilState } from 'recoil';

const Post = ({ post, modalPost }) => {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [showInput, setShowInput] = useState(false);
  return (
    <div
      className={`bg-white dark:bg-[#1D2226] ${
        modalPost ? 'rounded-r-lg' : 'rounded-lg'
      } space-y-2 py-2.5 border border-gray-300 dark:border-none`}
    >
      <div className='flex items-center px-2.5 cursor-pointer'>
        <Avatar src={post.userImg} className='!h-10 !w-10 cursor-pointer' />
        <div className='mr-auto ml-2 selection:leading-none'>
          <h6 className='font-medium hover:text-blue-500 hover:underline'>
            {post.username}
          </h6>
          <p className='text-sm dark:text-white/75 opacity-80'>{post.email}</p>
        </div>
        {modalPost ? (
          <IconButton onClick={() => setModalOpen(false)}>
            <CloseRoundedIcon className='dark:text-white/75 h-7 w-7' />
          </IconButton>
        ) : (
          <IconButton>
            <MoreHorizRoundedIcon className='dark:text-white/75 h-7 w-7' />
          </IconButton>
        )}
      </div>
    </div>
  );
};

export default Post;
