const express = require("express");
const cors = require("cors");
const globalErrorHandler = require("./lib/globalErrorHandler");
const userRoute = require("./routes/usersRoute");
const leaderRoute = require("./routes/leaderRoute");
const categoryRoute = require("./routes/categoryRoute");
const countryRoute = require("./routes/countryRoute");
const customerRoute = require("./routes/customerRoute");
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "https://softronixs.web.app",
      "https://softronixs.firebaseapp.com",
    ],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("softronixs is running....");
});

app.use("/api/users", userRoute);
app.use("/api/leaders", leaderRoute);
app.use("/api/customers", customerRoute);
app.use("/api/category", categoryRoute);
app.use("/api/country", countryRoute);

// handling all route which is not found
app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});

// error handling middleware
app.use(globalErrorHandler);

module.exports = app;
