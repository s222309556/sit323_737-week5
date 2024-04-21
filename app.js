const express = require("express");
const app = express();
const http = require("http").Server(app);
const port = process.env.PORT || 3000;
const winston = require("winston");

// Configure Winston logger
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "calculator-microservice" },
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
    new winston.transports.File({ filename: "logs/error.log", level: "error" }),
    new winston.transports.File({ filename: "logs/combined.log" }),
  ],
});

app.use(express.json());

// Endpoint for addition
app.get("/add", (req, res) => {
  const { num1, num2 } = req.query;
  const operation = "addition";
  logger.info(
    `New ${operation} operation requested: ${num1} ${operation} ${num2}`
  );
  if (isNaN(num1) || isNaN(num2)) {
    logger.error("Parameters are not valid numbers");
    return res.status(400).json({ error: "Parameters are not valid numbers" });
  }
  const result = parseFloat(num1) + parseFloat(num2);
  res.json({ result });
});

// Endpoint for subtraction
app.get("/sub", (req, res) => {
  const { num1, num2 } = req.query;
  const operation = "subtraction";
  logger.info(
    `New ${operation} operation requested: ${num1} ${operation} ${num2}`
  );
  if (isNaN(num1) || isNaN(num2)) {
    logger.error("Parameters are not valid numbers");
    return res.status(400).json({ error: "Parameters are not valid numbers" });
  }
  const result = parseFloat(num1) - parseFloat(num2);
  res.json({ result });
});

// Endpoint for multiplication
app.get("/multi", (req, res) => {
  const { num1, num2 } = req.query;
  const operation = "multiplication";
  logger.info(
    `New ${operation} operation requested: ${num1} ${operation} ${num2}`
  );
  if (isNaN(num1) || isNaN(num2)) {
    logger.error("Parameters are not valid numbers");
    return res.status(400).json({ error: "Parameters are not valid numbers" });
  }
  const result = parseFloat(num1) * parseFloat(num2);
  res.json({ result });
});

// Endpoint for division
app.get("/divide", (req, res) => {
  const { num1, num2 } = req.query;
  const operation = "division";
  logger.info(
    `New ${operation} operation requested: ${num1} ${operation} ${num2}`
  );
  if (isNaN(num1) || isNaN(num2)) {
    logger.error("Parameters are not valid numbers");
    return res.status(400).json({ error: "Parameters are not valid numbers" });
  }
  if (parseFloat(num2) === 0) {
    logger.error("Cannot divide by zero");
    return res.status(400).json({ error: "Cannot divide by zero" });
  }
  const result = parseFloat(num1) / parseFloat(num2);
  res.json({ result });
});

// Health Check Endpoint
app.get("/health", (req, res) => {
  console.log("Health check success");
  res.status(200).send("OK");
});

http.listen(port, () => {
  console.log(`listening on port ${port}`);
});
