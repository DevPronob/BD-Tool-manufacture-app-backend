const express =require("express")
const router =express.Router()
const {bookTool,getBookings,getUserBookings,getUserTool,getUpdateBooking} = require('../controller/bookingsController')
const {
    verifyToken,
  } = require("./verifyToken");
router.post('/', bookTool)
router.get('/',verifyToken, getBookings)
router.put('/update/:id', getUpdateBooking)
router.get('/:email',verifyToken, getUserBookings)
router.get('/book/:id',getUserTool )
// getUserTool
// router.get('/featured', getFeaturedTool)
// router.get('/:id', getToolDetail)
// router.get('/blog/me',verifyToken, getUserPost)
// router.post('/', setTool)
// router.put('/:id', putPost)
// router.delete('/:id', deletePost)

module.exports = router;

// const id = '454333e4'

// const doc = await Product.findByIdAndUpdate(id, { name: 'Macbook Pro' }, { new: true })