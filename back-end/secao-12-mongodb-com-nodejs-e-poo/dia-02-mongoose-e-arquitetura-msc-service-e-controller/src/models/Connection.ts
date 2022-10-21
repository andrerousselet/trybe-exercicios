import mongoose from 'mongoose';
import 'dotenv/config';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
    || 'mongodb://root:example@localhost:27017/glassesStore?authSource=admin',
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;