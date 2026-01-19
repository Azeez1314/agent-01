import type { AIMessage } from "../types";
import { openai } from "./ai";

export const runLLM = async ({ 
  messages,
  tools,
 }: { 
  messages: AIMessage[] 
  tools: any[]
}) => {
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    temperature: 0.1,
    messages,
    tools,
  })

  return response.choices[0].message.content
}
