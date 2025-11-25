import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, unique: true, required: true},
  password: {type: String, required: true },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User'
    },
});

export default mongoose.model('User', UserSchema);
