import { puter } from "@heyputer/puter.js";

export async function generateAudit(
  prompt: string
): Promise<string> {
  const response = await puter.ai.chat(prompt, {
    model: "x-ai/grok-4-fast",
  });

  if (typeof response.message?.content === "string") {
    return response.message.content;
  }

  return JSON.stringify(response.message.content);
}