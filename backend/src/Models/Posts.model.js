import postSchema from "../Schemas/Posts.schema.js";
import mongoose from "mongoose";

const Post = mongoose.model('post', postSchema);

export default Post