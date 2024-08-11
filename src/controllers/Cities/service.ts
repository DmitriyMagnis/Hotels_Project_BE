import mongoose from "mongoose"
import { CitiesModel } from "./schema"

export class CitiesService {
  async getAllCities() {
    try {
      const hotels = await CitiesModel.find({})
      console.log(hotels)
      return hotels
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
