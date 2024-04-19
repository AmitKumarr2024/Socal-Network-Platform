import winston from "winston";

// Write your code here
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [new winston.transports.File({ filename: "combined.log" })],
});

export const loggerMiddleware = async (req, res, next) => {
  if (!req.url.includes("login")&&!req.url.includes("signup")) {
    const data_to_log = `${new Date().toString()}\n req URL: ${
      req.originalUrl
    }\n reqBody: ${JSON.stringify(req.body)}`;
    await logger.info(data_to_log);
  }
  next();
};
export default loggerMiddleware;
