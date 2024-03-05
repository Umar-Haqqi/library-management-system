import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  ISBN: { type: String, required: true },
  publishYear: { type: Number, required: true },
  coverPrice: { type: Number, required: true },
  available: { type: Boolean, default: true, required: true },
  checkoutBy: {
    name: String,
    phoneNumber: Number,
    nationalId: Number,
    checkOutDate: String,
    returnDate: String,
  }
});

export const Book = mongoose.model("books", schema);
