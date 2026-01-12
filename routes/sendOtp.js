const express = require('express')
const router = express.Router();

const generateOtp = () =>{
    return Math.floor(100000 + Math.random() * 900000).toString()
}