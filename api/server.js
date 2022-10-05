const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
// const swaggerJsDoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");
const authRouter = require("../routes/index").auth;
const userRouter = require("../routes/index").user;
const workStationRouter = require("../routes/index").workstation;
const scheduleRouter = require("../schedule/schedule-router");

const server = express();
server.use(
  cors({
    origin: "https://localhost:3000",
  })
);
server.use(helmet());
server.use(express.json());

server.post("/", (req, res) => {
  res.send("Welcome to your workstation app!");
});
server.use("/api/v1/auth", authRouter);
server.use("/api/v1/user", userRouter);

server.use("/api/v1/workstation", workStationRouter);
server.use("/api/v1/schedule", scheduleRouter);

module.exports = server;
