require("dotenv").config()
// const express = require("express");
// const app = express();
// const authRouter = require("./routes/auth-route");
// const connectDb = require("./utils/db")
// const errorMiddleware = require("./middlewares/error-middleware")
// const contactRoute = require("./routes/contact-route");

// app.use(express.json())
// // Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
// app.use("/api/auth", authRouter);
// app.use("/api/form", contactRoute);


// app.use(errorMiddleware)

// const PORT = 5000;


// connectDb().then(()=>{

// app.listen(PORT, () => {
//   console.log(`server is running at port: ${PORT}`);
// });
// })require("dotenv").config();
const express = require("express");
const app = express();
const authRoute = require("./routes/auth-route");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const contactRoute = require("./routes/contact-route");

// to get the json data in express app.
app.use(express.json());

// Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);

app.use(errorMiddleware);

const PORT = 5000;
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
});