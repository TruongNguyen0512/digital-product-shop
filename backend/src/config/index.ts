export const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  mongoUri: process.env.NODE_ENV === 'production' 
    ? process.env.MONGO_URI_PROD 
    : process.env.MONGO_URI_DEV,
  jwtSecret: process.env.JWT_SECRET,
  redis: {
    uri: process.env.REDIS_URI
  },
  services: {
    user: { port: 3001 },
    product: { port: 3002 },
    order: { port: 3003 },
    payment: { port: 3004 }
  }
}
