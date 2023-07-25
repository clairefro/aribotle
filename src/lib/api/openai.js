import systemMsg from "./systemMsg";

class OpenAiClient {
  async chat(apiKey, prompt) {
    const url = `https://api.openai.com/v1/chat/completions`;
    const headers = {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    };

    const messages = [
      {
        role: 'system',
        content: systemMsg
      },
      {
        role: 'user',
        content: prompt
      }
    ]

    const body = JSON.stringify({
      model: "gpt-4",
      messages,
      temperature: 1,
      n: 1
    });

    const response = await fetch(url, {
      method: "POST",
      headers,
      body,
    });

    const data = await response.json();

    if (response.status === 200) {
      return data.choices[0].message.content;
    } else {
      console.error(data.error)
      throw new Error(data.error);
    }
  }
}
const openaiClient = new OpenAiClient()
export { openaiClient }
