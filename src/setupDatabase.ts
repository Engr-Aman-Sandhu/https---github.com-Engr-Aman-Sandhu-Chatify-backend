import mongoose from 'mongoose';
import { config } from './config';

export default () => {
  const connect = () => {
    mongoose
      .connect(`${config.DATABASE_URL}`)
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
