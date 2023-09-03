const Review = require('../modal/reviewModal');
//   // create payment intent
//   app.post('/create-payment-intent', verifyJWT, async (req, res) => {
//     const { price } = req.body;
//     const amount = parseInt(price * 100);
//     const paymentIntent = await stripe.paymentIntents.create({
//       amount: amount,
//       currency: 'usd',
//       payment_method_types: ['card']
//     });

//     res.send({
//       clientSecret: paymentIntent.client_secret
//     })
//   })

const setReview = async (req, res) => {
    const reviewData = req.body;

  try {
    const newReview = new Review(reviewData);
    await newReview.save();
    console.log('Review saved:', newReview);
   return res.status(201).json({ message: 'Review added and saved successfully' });
  } catch (error) {
    console.error('Error saving review:', error);
   return res.status(500).json({ message: 'Error adding review' });
  }
  };

  const getReview = async (req, res) => {
    try {
        const reviews = await Review.find();
       return res.status(200).json(reviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
       return res.status(500).json({ message: 'Error fetching reviews' });
      }
  };

 

  module.exports ={
    // setPost,
    setReview,
    getReview
    // getUserPost
  }