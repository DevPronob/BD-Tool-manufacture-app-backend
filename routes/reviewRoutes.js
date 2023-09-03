const express =require("express")
const router =express.Router()
const {setReview,getReview} = require('../controller/reviewController')
const {
    verifyToken,
    // verifyTokenAndAdmin
  } = require("./verifyToken");
router.post('/',verifyToken, setReview)
router.get('/',getReview)

// router.get('/users/admin/', makeAdmin)


module.exports = router;