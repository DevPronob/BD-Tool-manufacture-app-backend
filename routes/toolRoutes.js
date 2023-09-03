const express =require("express")
const router =express.Router()
const {getTool,getFeaturedTool,getToolDetail,addTool,deleteTool} = require('../controller/toolController')
const {
    verifyToken,
  } = require("./verifyToken");
router.get('/', getTool)
router.delete('/delete/:id',verifyToken, deleteTool)
router.post('/',verifyToken, addTool)
router.get('/featured', getFeaturedTool)
router.get('/:id', getToolDetail)
// router.get('/blog/me',verifyToken, getUserPost)
// router.post('/', setTool)
// router.put('/:id', putPost)
// router.delete('/:id', deletePost)

module.exports = router;