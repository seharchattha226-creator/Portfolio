const mongoose = require('mongoose');

/**
 * Connect to MongoDB Atlas using the URI from environment variables.
 * Uses Mongoose to manage the connection and log status.
 */
const connectDB = async () => {
  try {
    // Attempt connection
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      dbName: 'portfolio' // Ensure data is stored in the 'portfolio' database
    });

    console.log(`🚀 MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Database Connection Error: ${error.message}`);
    console.log('⚠️  Database not connected, using fallback data');
    // Don't crash the server, just log the error
  }
};

module.exports = connectDB;
