import React, { useState } from 'react'
import Avatar from 'react-avatar';
import { BiCommentDetail } from "react-icons/bi";
import { BiRepost } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineIosShare } from "react-icons/md";
import { IoBookmark } from "react-icons/io5";
import { FcLike } from "react-icons/fc";
import { IoBookmarkOutline } from "react-icons/io5";
import { MdOutlineAlignVerticalBottom } from "react-icons/md";

const Tweet = () => {
    const [bookmark, setbookmark] = useState(false)
    const [like, setlike] = useState(false)

    return (
        <div>
            <div className="post px-6 py-6">
                <div className="account flex gap-3 items-center">

                    <Avatar className="rounded-full w-10 " src="https://pbs.twimg.com/profile_images/1399061346956713991/vTrN6VhT_normal.jpg" size="40" round={true}/>
                    <span className="text-lg font-bold hover:underline cursor-pointer">Bhagavad Gita</span>
                    <span className="text-sm text-gray-500">@GitaBhagavad_ · Jan 22</span>
                </div>
                <p className="pb-3 pl-4">Ifparagaph </p>

                <div className="postimg flex flex-col justify-center items-center p-8 rounded-2xl border border-slate-500 mx-5">
                    <img className="image h-[510px] rounded-2xl" src="https://pbs.twimg.com/media/GIjGdaSWYAAOXnz?format=jpg&name=medium" alt="Image" />

                    <div className="comm flex items-center justify-between w-full mt-4 gap-3">
                        <div className="comment flex items-center justify-center w-14 cursor-pointer gap-1">
                            <BiCommentDetail/>
                            <span className="text-slate-500">197</span>
                        </div>

                        <div className="repost flex items-center justify-center w-14 cursor-pointer gap-1">
                            <BiRepost/>
                            <span className="text-slate-500">1.9k</span>
                        </div>

                        <div onClick={()=>{setlike(!like)}} className="likes flex items-center justify-center w-14 cursor-pointer gap-1 hover:bg-pink-500 rounded-full py-3">
                            {!like?<FaRegHeart/>: <FcLike/>}
                            <span className="text-slate-500">21k</span>

                        </div>
                        <div className="views flex items-center justify-center w-14 cursor-pointer gap-1">
                            <MdOutlineAlignVerticalBottom/>
                            <span className="text-slate-500">185k</span>
                        </div>
                        <div className="right flex items-center justify-center gap-3">
                            <div onClick={()=>{setbookmark(!bookmark)}} className="bookmark  flex items-center justify-center w-7">
                                {!bookmark?<IoBookmarkOutline/>:<IoBookmark/>}
                            </div>

                            <div className="share flex items-center justify-center w-7">
                                <MdOutlineIosShare/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="post px-6 py-6">
                <div className="account flex gap-3 items-center">

                    <Avatar className="rounded-full w-10 " src="https://pbs.twimg.com/profile_images/1399061346956713991/vTrN6VhT_normal.jpg" size="40" round={true}/>
                    <span className="text-lg font-bold hover:underline cursor-pointer">Bhagavad Gita</span>
                    <span className="text-sm text-gray-500">@GitaBhagavad_ · Jan 22</span>
                </div>
                <p className="pb-3 pl-4">Ifparagaph </p>

                <div className="postimg flex flex-col justify-center items-center p-8 rounded-2xl border border-slate-500 mx-5">
                    <img className="image h-[510px] rounded-2xl" src="https://pbs.twimg.com/media/GIjGdaSWYAAOXnz?format=jpg&name=medium" alt="Image" />

                    <div className="comm flex items-center justify-between w-full mt-4 gap-3">
                        <div className="comment flex items-center justify-center w-14 cursor-pointer gap-1">
                            <BiCommentDetail/>
                            <span className="text-slate-500">197</span>
                        </div>

                        <div className="repost flex items-center justify-center w-14 cursor-pointer gap-1">
                            <BiRepost/>
                            <span className="text-slate-500">1.9k</span>
                        </div>

                        <div onClick={()=>{setlike(!like)}} className="likes flex items-center justify-center w-14 cursor-pointer gap-1 hover:bg-pink-500 rounded-full py-3">
                            {!like?<FaRegHeart/>: <FcLike/>}
                            <span className="text-slate-500">21k</span>

                        </div>
                        <div className="views flex items-center justify-center w-14 cursor-pointer gap-1">
                            <MdOutlineAlignVerticalBottom/>
                            <span className="text-slate-500">185k</span>
                        </div>
                        <div className="right flex items-center justify-center gap-3">
                            <div onClick={()=>{setbookmark(!bookmark)}} className="bookmark  flex items-center justify-center w-7">
                                {!bookmark?<IoBookmarkOutline/>:<IoBookmark/>}
                            </div>

                            <div className="share flex items-center justify-center w-7">
                                <MdOutlineIosShare/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tweet
