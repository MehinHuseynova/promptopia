const { default: Prompt } = require('@models/prompt')
const { connectToDB } = require('@utils/database')

const GET = async (req, res) => {
  try {
    connectToDB()
    const result = await Prompt.find()
    return new Response(JSON.stringify(result), { status: 201 })
  } catch (error) {
    console.log(error)
    return new Response(error, { status: 500 })
  }
}

export { GET }
