import { Schema, model } from "mongoose"

const hotelSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
    description: { type: String, default: "" },
  },
  city: Schema.Types.ObjectId,
  adults: {
    type: Number,
    required: true,
    default: 0,
  },
  children: {
    type: Number,
    default: 0,
  },
  checkInTime: {
    type: Date,
    required: true,
    default: null,
  },
  checkOutTime: {
    type: Date,
    default: null,
  },
  imageId: {
    type: String,
    default: null,
  },
  description: {
    type: String,
    required: true,
    default: null,
  },
  rooms: {
    type: Number,
    required: true,
    default: 1,
  },
})
export const HotelModel = model("Hotels", hotelSchema, "Hotels")
