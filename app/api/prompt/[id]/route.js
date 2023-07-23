import Prompt from "@models/prompt"
import { connectToDB } from "@utils/database"

const DELETE = async ({ params }) => {

    try {
        await connectToDB()
        const filteredResult = await Prompt.findByIdAndDelete(params?.id)
        return new Response(JSON.stringify(filteredResult, { status: 200 }))
    }

    catch (error) {
        console.log(error)
        return new Response("Failed to delete", { status: 200 })
    }
}

const PATCH = async (req, { params }) => {
    const { tag, prompt } = await req.json()
    try {
        await connectToDB()
        const existingPrompt = await Prompt.findById(params.id)
        if (!existingPrompt) {
            return new Response("Prompt not found", { status: 404 });
        }
        existingPrompt.tag = tag
        existingPrompt.prompt = prompt
        await existingPrompt.save()
        return new Response(JSON.stringify(filteredResult, { status: 200 }))
    }

    catch (error) {
        console.log(error)
        return new Response("Failed to delete", { status: 200 })
    }
}

export { DELETE, PATCH }