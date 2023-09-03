const mongoose =require('mongoose')

const reviewSchema =mongoose.Schema({
    comment:{
        type: String,
    },
    rating: {
        type: Number,
    },
   
},{
    timestamps:true
})
module.exports =mongoose.model('Review',reviewSchema)