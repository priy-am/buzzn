import React, { useEffect } from 'react'
import { IoMdArrowBack } from "react-icons/io";
import { Link, useParams } from 'react-router-dom';
import Avatar from 'react-avatar'
import { useSelector } from 'react-redux'
import useGetMyProfile from '../hooks/useGetPorfile';

const Profile = () => {

  const {id} = useParams();
  console.log(`params ki id :- ${id}`)
  useGetMyProfile(id)
  const { user, profile } = useSelector(store => store.user);
  console.log(`profile ka hai :- ${profile?._id}`)


  return (
    <div>
      <div className="banner relative ">
        <div className='flex items-center gap-6 px-4 py-3 cursor-pointer sticky top-0 bg-black dark:bg-white backdrop-blur-3xl opacity-80'>
          <Link to='/' className='backIcon hover:bg-gray-700 dark:hover:bg-[#b2ccf6] p-3 rounded-full'><IoMdArrowBack /></Link>
          <div className='flex flex-col'>
            <h2 className='text-lg font-bold '>{profile?.user?.name}</h2>
            <div className="post text-gray-400">3 post</div>
          </div>

        </div>
        <div className='h-52'>
          <img src="https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg" alt="banner" className='h-52 w-full' />
        </div>
        <div className="avtor p-2 bg-black absolute rounded-full top-48 left-6">
          <Avatar src='https://addons-media.operacdn.com/media/CACHE/images/themes/95/78195/1.0-rev1/images/f1b54fe9-e138-44e6-929b-182bb1e82a68/8b7b9410c460548223847494208085d9.jpg' size="130" round={true} />
        </div>
        <div className='font-bold  border border-white rounded-2xl absolute px-3 py-1 right-8 top-72'>Edit profile</div>
      </div>

      <div className='my-20 mx-10'>
        <h3 className='font-bold text-2xl'>{profile?.user?.name}</h3>
        <span className='text-gray-400'>{`@${profile?.user?.username}`}</span>
      </div>
    </div>
  )
}

export default Profile
