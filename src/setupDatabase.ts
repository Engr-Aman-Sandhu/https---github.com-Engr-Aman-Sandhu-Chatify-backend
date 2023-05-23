import mongoose from 'mongoose';

export default () => {
  const connect = () => {
    mongoose
      .connect('mongodb://127.0.0.1:27017/chatify-backend')
      .then(() => {
        console.log('Connected to MongoDB');
        // Your database operations here
      })
      .catch((error) => {
        console.error('Error connecting to MongoDB', error);
      });
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};
