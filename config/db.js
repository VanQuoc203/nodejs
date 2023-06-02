const mongoose = require('mongoose');

async function connect(){
try {
    await mongoose.connect('mongodb://127.0.0.1:27017/nodejs_dev')      
    console.log('ket noi thanh cong!')
} catch (error) {
    console.log('Dont connect')
}
}
module.exports ={connect}