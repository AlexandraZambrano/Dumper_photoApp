import Post from "../Models/Posts.model.js";
import B2 from "backblaze-b2";

//GETS ALL POSTS
export const getAllPosts = async (req, res) => {

  try {
    const posts = await Post.find()
    res.status(200).json( posts );
  } catch (error) {
      res.json({ error })
  }
};

//GETS A POST
export const getSinglePost = async (req, res) => {

  const id = req.params.id

  try {

    const post = await Post.findById(id)
    res.status(200).json( post );

  } catch (error) {

      res.json({ error })
  }
};

//CREATES A POST
export const createPost = async (req, res) => {

  const {caption} = req.body

  try {

    const fileData = res.locals.data;

    const post = new Post({
      image: fileData.url,
      caption: caption,
      fileId: fileData.fileId,
      fileName: fileData.fileOriginalName
    })

    await post.save()

    res.status(200).json({ post });
  } catch (error) {
      res.json({ error })
  }
};

//UPDATES A POST
export const updatePost = async (req, res) => {
  const postId = req.params.id;
  const { caption } = req.body;

  try {

    const imageUrl = res.locals.url;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    post.image = imageUrl;
    post.caption = caption;

    await post.save();

    res.status(200).json({ post });
  } catch (error) {

    res.status(500).json({ error: "An error occurred while updating the post." });
  }
};

// DELETES A POST
export const deletePost = async (req, res) => {
  const id = req.params.id;

  try {
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    const b2 = new B2({
      accountId: process.env.ACCOUNT_KEY, 
      applicationKeyId: process.env.KEY_ID,
      applicationKey: process.env.APP_KEY,
    });

    await b2.authorize();

    const deleteResponse = await b2.deleteFileVersion({fileId: post.fileId,fileName: `post/${post.fileName}`});

    if (deleteResponse.status !== 200) {
      return res.status(500).json({ error: "Failed to delete file from B2" });
    }

    await Post.deleteOne({_id: id})

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ error});
  }
};
