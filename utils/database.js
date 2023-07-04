import mongoose from 'mongoose'

let isConnected = false //track the connection
console.log('h')
export const connectToDB = async () => {
  mongoose.set('strictQuery', true)

  if (isConnected) {
    console.log('MongoDB is already connected')
    return
  }

  try {
    console.log('he')
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'share_prompt',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    isConnected = true
    console.log('Mongo DB connected')
  } catch (error) {
    console.log('errr')
    console.log(error)
  }
}
