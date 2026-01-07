import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  helperId: { type: mongoose.Schema.Types.ObjectId, ref: "Helper", required: true },
  date: { type: Date, default: Date.now },
  hours: { type: Number, default: 4 },
  amount: { type: Number, default: 0 },
  status: { type: String, enum: ["pending","accepted","rejected","completed"], default: "pending" },
  paymentStatus: { type: String, enum: ["pending","paid","failed"], default: "pending" }
}, { timestamps: true });

export default mongoose.model("Request", requestSchema);
