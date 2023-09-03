const BookingsTool = require("../modal/bookingsModal");

const bookTool = async (req,res) => {
    const { productName, price, quantity, name, email, phone } = req.body;

  try {
    // Create a new Product instance and save it to the database
    const newProduct = new BookingsTool({
        productName,
         price, 
         quantity,
          name,
           email,
           phone
    });

    const bookingTool = await newProduct.save();
   return res.status(201).json(bookingTool);
  } catch (error) {
    console.error('Error saving product:', error);
   return res.status(500).json({ error: 'Error saving product' });
  }
}
const getBookings = async (req,res) => {
    const tools =await BookingsTool.find()
    return res.status(200).json(tools)
}
const getUserBookings = async (req,res) => {
    const email = req.params.email;

    try {
      const bookings = await BookingsTool.find({ email }); // Assuming your model has an "email" field
     return res.json(bookings);
    } catch (error) {
      console.error(error);
     return res.status(500).json({ message: 'Server error' });
    }
    // console.log(email)
}

const getUserTool = async (req,res) => {
    const id = req.params.id.trim();


    try {
        const tool = await BookingsTool.findById(id);
       return res.json(tool);
    } catch (error) {
        console.error(error);
       return res.status(500).json({ message: 'Server error' });

}
// console.log(id)
}
const getUpdateBooking = async (req,res) => {
    const id = req.params.id.trim();
    const { paid, transactionId } = req.body;

    try {
        const updatedBooking = await BookingsTool.findByIdAndUpdate(
            id,
            { paid: paid, transactionId: transactionId },
            { new: true }
        );
      return  res.json(updatedBooking);
    } catch (error) {
        console.error(error);
      return  res.status(500).json({ message: 'Server error' });
    }
    console.log(id); 

}
  module.exports ={
    bookTool,
    getBookings,
    getUserBookings,
    getUserTool,
    getUpdateBooking,
    // getPost,
    // getPostDetail,
    // getUserPost
  }