import mongoose from 'mongoose';

interface IUser extends mongoose.Document {
  name: string,
  username: string,
  password: string
}

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true},
  username: { type: String, required: true, minlength: [5, 'Username muber be 5 characters or more']},
  password: { type: String, required: true, minlength: [8, 'Password muber be 8 characters or more']},
});

export default mongoose.model<IUser>('User', UserSchema);