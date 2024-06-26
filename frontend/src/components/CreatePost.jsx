import React, { useState } from 'react'
import { FaImage } from "react-icons/fa6";
import { MdOutlineGifBox } from "react-icons/md";
import { GrEmoji } from "react-icons/gr";
import { MdCancelScheduleSend } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import Avatar from 'react-avatar';

const CreatePost = () => {
    const [follow, setfollow] = useState(true)
    const [Following, setFollowing] = useState(false)
    return (
        <div>
            <div className=" z-10 flex items-center justify-between h-12  static  sm:top-0 w-full   top-12 bg-black dark:bg-white backdrop-blur-3xl opacity-80">
                <div onClick={() => { setfollow(true) ; setFollowing(false)}} className="left w-1/2 text-center active:font-bold cursor-pointer hover:bg-[#1e1f20] dark:hover:bg-[#b2ccf6] p-3 relative">ForYou
                    {follow && <div className="line2 absolute h-1 w-16 z-10 bg-[#1d9bf0] bottom-0 left-[40%]"></div>}
                </div>
                <div onClick={()=>{setFollowing(true); setfollow(false)}} className="right w-1/2 text-center active:font-bold cursor-pointer hover:bg-[#1e1f20] dark:hover:bg-[#b2ccf6] p-3">Following
                    {Following && <div className="line2 absolute h-1 w-16 z-10 bg-[#1d9bf0] bottom-0 left-[65%]"></div>}
                </div>

                <div className="setting p-3 rounded-full hover:bg-[#1e1f20] dark:hover:bg-[#b2ccf6] mr-1 sm:static absolute bottom-2 right-1">
                    <IoSettingsOutline />
                </div>
            </div>

            <div className="line h-[1px] bg-slate-500"></div>

            <div className="whatshappen flex">
                <div className="profile flex justify-center items-center text-lg m-3">
                    <Avatar name='P' size="40" round={true} />
                </div>
                <input type="text" className="bg-transparent text-xl text-white  outline-none" placeholder="What is happening?!" />
            </div>
            <div className="makingPost flex gap-2 px-12 py-2 justify-between">
                <div className="blueicon flex gap-3 px-5 text-blue-500">
                    <FaImage />
                    <MdOutlineGifBox />
                    <GrEmoji />
                    <MdCancelScheduleSend />
                    <IoLocationOutline />

                </div>

                <div className="btn font-bold cursor-pointer bg-[#1d9bf0] rounded-full px-5 py-1">Post</div>
            </div>

            <div className="line h-[1px] bg-slate-500"></div>

            <div className="show text-[#1d9bf0] text-center my-2 cursor-pointer">Show 70 post</div>
        </div>
    )
}

export default CreatePost
