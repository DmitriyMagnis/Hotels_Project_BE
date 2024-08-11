import { Request, Response, Router } from "express"
import { CitiesService } from "./service"

const citiesRouter = Router()
const citiesRepository = new CitiesService()

citiesRouter.get("/all", async (req: Request, res: Response) => {
  try {
    const todos = await citiesRepository.getAllCities()
    res.json(todos)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Can`t get todos" })
  }
})

export { citiesRouter }
