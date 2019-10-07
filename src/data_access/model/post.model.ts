import { IUser } from './user.model';
import mongoose from 'mongoose';

interface IPost extends mongoose.Document {
  title: string,
  link: string,
  text: string,
  isDeleted: boolean,
  createdAt: Date,
  _creator: IUser
};

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  link: String,
  text: String,
  isDeleted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now() },
  _creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

export default mongoose.model<IPost>('Post', PostSchema);