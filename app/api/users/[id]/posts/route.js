import Prompt from "@models/prompt";

const { connectToDB } = require("@utils/database")

const GET = async (req, { params }) => {

    try {
        await connectToDB();
        const currentUserPrompts = await Prompt.find({ creator: params.id }).populate("creator")
        return new Response(JSON.stringify(currentUserPrompts), { status: 200 })
    }

    catch (error) {
        console.log(error)
        return new Response("Failed to fetch", { status: 500 })
    }
}

export { GET }