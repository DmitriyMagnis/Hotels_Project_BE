import cors from "cors"
import "dotenv/config"
import express from "express"
import mongoose from "mongoose"
import { loggerMiddleware, MyLogger } from "./logger"
import { hotelRouter } from "./controllers/Hotels/controller"
import { citiesRouter } from "./controllers/Cities/controller"

const app = express()

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
}

const main = async () => {
  console.log(process.env.MONGO_APP_NAME)
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGO_USENAME}:${process.env.MONGO_PWR}@todocluster.zouc62x.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.MONGO_APP_NAME}`
    )
    MyLogger.info("Connection to db successfull!")
  } catch (err: any) {
    MyLogger.dir(err)
    MyLogger.error(err?.errmsg)
  }
}

app.use(express.static("assets"))
app.use(cors(corsOptions))
app.use(express.json())
app.use(loggerMiddleware)
app.use("/hotels", hotelRouter)
app.use("/cities", citiesRouter)

app.listen(process.env.SERVER_PORT || 5000, () => {
  main()
  console.log(`Server is runing at port ${process.env.SERVER_PORT || 5000}`)
})
