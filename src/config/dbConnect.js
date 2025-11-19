const mongoose = require('mongoose');
const {MONGO_URI} = require('./envconfig');
 
const DBconection = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('database connected successfully');
        
    } catch (error) {
        console.log(error);
        
    }
};

module.exports = DBconection;