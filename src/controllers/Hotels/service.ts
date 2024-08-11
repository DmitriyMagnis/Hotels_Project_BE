import mongoose from "mongoose"
import { HotelModel } from "./schema"
import { omitUndefined } from "../../helpers"

export class HotelsService {
  async getAllHotels(data = {}) {
    try {
      const hotels = await HotelModel.find(omitUndefined(data))
      console.log(hotels)
      return hotels
    } catch (error) {
      console.log(error)
      throw error
    }
  }
  async createHotel(hotelData: any) {
    try {
      const hotel = new HotelModel({
        _id: new mongoose.Types.ObjectId(),
        ...hotelData,
      })
      await hotel.save()
      return hotel
    } catch (error) {
      console.log(error)
      throw error
    }
  }
  async deleteHotel(id: string) {
    try {
      const todo = await HotelModel.findByIdAndDelete(id)
      return todo
    } catch (error) {
      console.log(error)
      throw error
    }
  }
  async updateSingleHotel(data: any) {
    try {
      const todo = await HotelModel.findByIdAndUpdate(data._id, data, {
        new: true,
      })
      await todo?.save()
      return todo
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
