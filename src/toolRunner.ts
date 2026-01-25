import type OpenAI from "openai";
import { 
    generateImage,
    generateImageToolDefinition,
 } from "./tools/generateImage";
 import { reddit, redditToolDefinition } from "./tools/reddit";
 import { dadJoke, dadJokeToolDefinition } from "./tools/dadJoke";

const getWeather = () => `hot, 90deg`

export const runTool = async (
    toolCall: OpenAI.Chat.Completions.ChatCompletionMessageToolCall,
    userMessage: string
) => {
    const input = {
        userMessage,
        toolArgs: JSON.parse(toolCall.function.arguments || '{}'),
    }

    switch (toolCall.function.name) {
        case 'get_weather':
            return getWeather(input)
        default:
            throw new Error(`Unknown tool: ${toolCall.function.name}`)
    }
}