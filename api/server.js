const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const authRouter = require("../routes/index").auth;
const userRouter = require("../routes/index").user;
const workStationRouter = require("../routes/index").workstation;
const scheduleRouter = require("../schedule/schedule-router");

const server = express();
server.use(cors());
server.use(helmet());
server.use(express.json());

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Workstation API",
      version: "1.0.0",
    },
    servers: [{ url: "http://localhost:7000" }],
  },
  apis: ["./routes/*.js"],
};
const swaggerSpec = swaggerJsDoc(options);
server.post("/", (req, res) => {
  console.log(req.body, "POST REQ");
  res.send("Welcome to your workstation app!");
});
server.use("/api/v1/auth", authRouter);
server.use("/api/v1/user", userRouter);

server.use("/api/v1/workstation", workStationRouter);
server.use("/api/v1/schedule", scheduleRouter);
server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = server;
