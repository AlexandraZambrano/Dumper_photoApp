//CREATES A POST
export const createPost = async (req, res) => {
    const { title, description, genre, cover, chapters } = req.body;
    const userId = req.user._id; // Get the user ID from the request (replace with your actual method)
  
    console.log(userId)
    try {
      // Create a new book with the postedBy field set to the user's ID
      const book = new Book({
        title: title,
        description: description,
        genre: genre,
        cover: cover,
        postedBy: userId,
        chapters: chapters
      });
  
      // Save the book
      await book.save();
  
      res.status(200).json({ message: 'Book created successfully', book });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
    };