import "dotenv/config";
import { config } from "./config";
import logger from "./config/logger";
import createServer from "server";
import mongoose from "mongoose";

// const startServer = () => {
//   try {
//     const app = createServer();
//     const port = config.port;
//     app.listen(port, () => {
//       console.log(`[server]: 🚀 Server is running at port ${port}`);
//     }); 
//   } catch (error) {
//     throw new Error("Server failed to start");
//   }
// };

const databaseURI = `${config.mongoURL}/${config.mongoDB}`

logger.debug(databaseURI)
logger.info('Trying to connect to MongoDB')

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: true,
  maxPoolSize: 10,
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000,
}

mongoose
.connect(databaseURI, options)
.then(() => {
  logger.info('Mongoose connection done')
  const app = createServer();
  app.listen(config.port, () => {
    logger.info(`[server]: 🚀 Server is running at port ${config.port}`)
  })
})
.catch((e) => {
  logger.info('Mongoose connection error')
  logger.error(e)
});
