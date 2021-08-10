import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import "dotenv/config";
import userRoute from "./routes/userRoute.js";

const app = express();

//midlewares
app.use(cors());
app.use(bodyParser.json());

//routes midlewares
app.use("/user", userRoute);

// set
// mongoose.set({
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// });

mongoose
  .connect(process.env.DB_CONNECTIONS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000);
