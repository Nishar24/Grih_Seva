import mongoose from 'mongoose';

const helperSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required:true },
  category: String,
  experience: Number,
  location: String,
  salaryExpectation: Number,
  availability: String,
  rating: { type:Number, default:0 },
  reviews: [{ customer: String, comment: String, rating: Number }]
}, { timestamps:true });

export default mongoose.model('Helper', helperSchema);
