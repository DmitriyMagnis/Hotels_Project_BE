import { Request, Response, Router } from "express"
import { HotelsService } from "./service"

const hotelRouter = Router()
const hotelRepository = new HotelsService()

hotelRouter.get("/all", async (req: Request, res: Response) => {
  const { destination, checkInTime, checkOutTime, rooms } = req.query

  try {
    const todos = await hotelRepository.getAllHotels({
      city: destination,
      checkInTime,
      checkOutTime,
      rooms,
    })
    res.json(todos)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Can`t get todos" })
  }
})

hotelRouter.post("/create", async (req: Request, res: Response) => {
  const data = req.body
  console.log(data)
  try {
    const todos = await hotelRepository.createHotel(data)
    console.log(todos)
    res.json(todos)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Can`t get todos" })
  }
})
hotelRouter.post("/update", async (req: Request, res: Response) => {
  const data = req.body
  console.log(data)
  try {
    const todos = await hotelRepository.updateSingleHotel(data)
    res.json(todos)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "cant find record" })
  }
})
hotelRouter.delete("/delete/:id", async (req: Request, res: Response) => {
  const id = req.params.id

  try {
    const todos = await hotelRepository.deleteHotel(id)
    res.json(todos)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Some error" })
  }
})
export { hotelRouter }
