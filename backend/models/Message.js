import mongoose from 'mongoose';
const msgSchema = new mongoose.Schema({
  from: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  to: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  text: String
}, { timestamps:true });

export default mongoose.model('Message', msgSchema);
