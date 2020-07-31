import path from "path";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import bodyParser from "body-parser";
import config,{ serviceAccountKey } from "./config/config.js";
import tasksRouter from "./routes/tasksRouter.js";
import postsRouter from "./routes/postsRouter.js";
import userRouter from "./routes/userRouter.js";
import firebaseAdmin from "firebase-admin";
import {checkAuth} from './authentication/authentication.js';
import cors from "cors";
import reviewsRouter from "./routes/reviewsRouter.js";

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccountKey),
  databaseURL: "https://gator-delivery.firebaseio.com"
});


//connect to database
mongoose
  .connect(config.db.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log(`Successfully connected to mongoose database.`);
  });

//initialize app
const app = express();



//enable request logging for development debugging
app.use(morgan("dev"));

app.use(cors());
//body parsing middleware
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

// https://auth0.com/blog/cors-tutorial-a-guide-to-cross-origin-resource-sharing/
app.use(function (req, res, next) {
  //res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Credentials", "true");
  // res.header("Access-Control-Max-Age", "1800");
  // res.header("Access-Control-Allow-Headers", "content-type");
  // res.header(
  //   "Access-Control-Allow-Methods",
  //   "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  // );
  next();
});

/* serve static files - see http://expressjs.com/en/starter/static-files.html */
app.use("/", express.static("./../../client"));

app.use("/tasks", tasksRouter);

app.use("/posts", postsRouter);

app.use("/users", userRouter);

app.use("/reviews", reviewsRouter);


app.listen(config.port, () =>
  console.log(`App now listening on port ${config.port}`)
);
