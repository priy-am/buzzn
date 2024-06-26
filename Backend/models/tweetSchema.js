import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
    description:{
        type:String,
        require: true
    },
    likes:{
        type:Array,
        default:[]
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        extended:true
    }

},{timestamps:true})

export const Tweet = mongoose.model("Tweet", tweetSchema)