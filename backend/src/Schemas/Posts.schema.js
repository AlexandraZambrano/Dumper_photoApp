import mongoose from "mongoose";
// const {ObjectId} = mongoose.Schema.Types


const postSchema = mongoose.Schema(
    {
        image: { type:String },
        caption: { type:String },
        fileId: { type:String },
        fileName: { type:String },
        createdAt: { type:Date, default: Date.now },

        // likes:[{type:ObjectId,ref:"User"}],
        // postedBy:{
        //     type:ObjectId,
        //     ref:"User",
        //     required: true
        //  }
    }
)

export default postSchema