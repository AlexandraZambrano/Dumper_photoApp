import Post from "../Models/Posts.model.js";
import B2 from "backblaze-b2";

//GETS ALL POSTS
export const getAllPosts = async (req, res) => {

  try {
    const posts = await Post.find()

    if(posts.length === 0){
      return res.status(200).json({ message: 'There are no posts yet' });
    }

    res.status(200).json( posts );
  } catch (error) {
    res.status(404).json([])
  }
};

//GETS A POST
export const getSinglePost = async (req, res) => {

  const id = req.params.id

  try {

    const post = await Post.findById(id)

    if(!post){
      res.status(404).json({ message: "Post not found" })
    }

    res.status(200).json( post );

  } catch (error) {

      res.json({ error })
  }
};

//CREATES A POST
export const createPost = async (req, res) => {

  const {caption} = req.body
  const userId = req.user._id

  try {

    const fileData = res.locals.data;

    const post = new Post({
      image: fileData.url,
      caption: caption,
      postedBy: userId,
      fileId: fileData.fileId,
      fileName: fileData.fileOriginalName
    })

    await post.save()

    res.status(200).json({ post });
  } catch (error) {
      res.status(500).json({ error: error})
  }
};

//UPDATES A POST
export const updatePost = async (req, res) => {
  
  try {
    const id = req.params.id
    const userId = req.user._id;
    const { caption } = req.body

    const postUpdated = await Post.findById(id)

    if (postUpdated.postedBy.toString() !== userId.toString()) {
      return res.status(403).json({ message: 'Permission denied' });
    }

    postUpdated.caption = caption

    await postUpdated.save()

    res.status(200).json({postUpdated})
  } catch (error) {
    res.json({ message: error })
  }
};

//UPDATES A POST PICTURE
export const imageUpdate = async(req, res) => {
  try {
    const id = req.params.id
    const fileData = res.locals.data;
    const userId = req.user._id;

    const imageUpdate = await Post.findById(id)

    if (imageUpdate.postedBy.toString() !== userId.toString()) {
      return res.status(403).json({ message: 'Permission denied' });
    }
    
    imageUpdate.image = fileData.url,
    imageUpdate.fileId = fileData.fileId,
    imageUpdate.fileName = fileData.fileOriginalName
    
    await imageUpdate.save()

    res.status(200).json({imageUpdate})
  } catch (error) {
    res.json({ message: error })
  }
};


// DELETES A POST
export const deletePost = async (req, res) => {
  const id = req.params.id;
  const userId = req.user._id;

  try {
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    if (post.postedBy.toString() !== userId.toString()) {
      return res.status(403).json({ message: 'Permission denied' });
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

//GETS THE POSTS YOU HAVE POSTED
export const getUserPosts = async (req,res)=> {

  
  try{

    const userIdToken =  req.user._id;

    const postedBy = Post.find({ postedBy: userIdToken })

    const userPosts = await postedBy;

    if (userPosts.length === 0) {
      return res.status(200).json({ message: "No posts yet" });
    }

    res.status(200).json({ Posts: userPosts })
  }  catch(err) {
        console.log(err)
    }
}
