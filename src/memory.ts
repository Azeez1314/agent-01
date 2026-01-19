import { JSONFilePreset } from "lowdb/node";
import type { AIMessage } from "../types";
import { v4 as uuidv4 } from 'uuid'

export type MessageWithMetadata = AIMessage & {
    id: string
    createdAt: string
}

export const addMetadata = (message: AIMessage): MessageWithMetadata => ({
    ...message,
    id: uuidv4(),
    createdAt: new Date().toDateString(),
})

export const removeMetadata = (message: MessageWithMetadata): AIMessage => {
  const { id, createdAt, ...messageWithoutMetadata } = message
  return messageWithoutMetadata
}