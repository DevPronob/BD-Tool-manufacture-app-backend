// pronobroy3601
// E3X2rvPljIm2V7yF
const mongoose = require('mongoose')
const dotenv =require('dotenv')
dotenv.config()
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`mongodb+srv://pnob9439_db_user:0YMwgb7XKaYdoRHS@cluster0.eepopjf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)

    console.log(`MongoDB Connected: `)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB