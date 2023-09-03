const Tool = require("../modal/toolModal");

// const setPost =async(req, res) => {
//     const newPost = new Post(req.body);
//     try {
//       const savedPost = await newPost.save();
//       res.status(200).json(savedPost);
//     } catch (err) {
//       res.status(401).json(err);
//       console.log(err)
//     }
//   };




  const getTool = async (req,res) => {
    const tools =await Tool.find()
    return res.status(200).json(tools)
}

const getFeaturedTool = async (req,res) => {
    try {
        const featuredProducts = await Tool.find({ featured: true });
       return res.status(200).json(featuredProducts);
      } catch (error) {
       return res.status(500).json({ error: 'Error fetching featured products' });
      }
}


const getToolDetail = async (req,res) => {
   const tootId =req.params.id.trim();
 try{
  Tool.findById(tootId).then((tool) =>{
        return res.send(tool)
        
    })
 } catch(err) {
  return  res.status(403).json(err);
 }
console.log(tootId)
}


  const deleteTool = async (req,res) => {
    console.log(req.params.id)
   
    const toolId = req.params.id;

    try {
      // Find the tool by ID and delete it
      const deletedTool = await Tool.findByIdAndDelete(toolId);
  
      if (!deletedTool) {
        return res.status(404).json({ message: 'Tool not found' });
      }
  
      return res.status(204).send(); // No content response for successful deletion
    } catch (error) {
      console.error('Error deleting tool:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }

}





  const addTool = async (req,res) => {
    try {
      const { name, price, Available, img, description } = req.body;
  
      const newProduct = new Tool({
        name,
        price,
        Available,
        img,
        description,
        featured: false
      });
  
      const savedProduct = await newProduct.save();
     return res.status(201).json(savedProduct);
    } catch (error) {
      console.error('Error creating product:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
}

  module.exports ={
    getTool,
    getFeaturedTool,
    getToolDetail,
    addTool,
    deleteTool
    // getPost,
    // getPostDetail,
    // getUserPost
  }