import { Schema, model } from "mongoose"

const citiesSchema = new Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    required: true,
    description: { type: String, default: "" },
  },
})
export const CitiesModel = model("Cities", citiesSchema, "Cities")
