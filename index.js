const express = require("express");
const app = express();
const cors = require('cors');
const connectDB = require('./database/db');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const allowedOrigins = [
  'http://localhost:3000',
  'https://bd-mart-manufacture-client.vercel.app'
];

app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      return callback(new Error("Not allowed by CORS"), false);
    }
    return callback(null, true);
  },
  credentials: true
}));

app.use('/api/tools', require('./routes/toolRoutes'));
app.use('/api/bookings', require('./routes/bookingsRoutes'));
app.use('/api/user', require('./routes/userRoutes'));
app.use('/', require('./routes/PaymentRoutes'));
app.use('/api/review', require('./routes/reviewRoutes'));

app.get('/', (req,res) =>{
    res.send("pronob");
});

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});
