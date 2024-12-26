const MIRA_API_URL = 'https://flow-api.mira.network/v1/flows/flows/karoly/human-like-chat-bot'
const FLOW_VERSION = "0.0.4"

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
        data: input,
        answersLength: ""
      },
      version: FLOW_VERSION
    })
  })

  const responseText = await response.text()
  const result = JSON.parse(responseText)
  const responses = JSON.parse(result.result)
  return responses[Math.floor(Math.random() * responses.length)]
}


