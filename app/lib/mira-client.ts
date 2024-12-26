const MIRA_API_URL = 'https://flow-api.mira.network/v1/flows/flows/jaymalladi/mood-analysis-chatbot'
const FLOW_VERSION = "1.0.9"

export async function getMiraResponse(input: string) {
  const apiKey = process.env.MIRA_API_KEY
  if (!apiKey) {
    throw new Error('MIRA_API_KEY not configured')
  }

  const response = await fetch(MIRA_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'MiraAuthorization': apiKey
    },
    body: JSON.stringify({
      input: {
        mood: input
      },
      version: FLOW_VERSION
    })
  })

  const responseText = await response.text()
  const result = JSON.parse(responseText)
  return result.result // Assuming the response format matches your flow
}


