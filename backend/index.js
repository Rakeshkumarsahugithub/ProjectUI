import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import cookieParser from 'cookie-parser'



const app = express();
mongoose.connect('mongodb://localhost:27017/vuexy-ecommerce', { useNewUrlParser: true });

app.get('/api/referrals', (req, res) => {
    // Fetch data from MongoDB or MySQL and send back to frontend
});


app.listen(8000,()=>{
    console.log('server is running on port 8000')
});