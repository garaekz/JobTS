import 'dotenv/config'

export const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017',
  mongoDB: process.env.MONGO_DB || 'test',
  APIKey: process.env.API_KEY,
  JWTSecret: process.env.JWT_SECRET
}