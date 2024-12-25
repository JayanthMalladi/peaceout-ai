'use server'

export async function getAIResponse(input: string) {
  try {
    const response = await fetch(`/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input }),
    })

    if (!response.ok) {
      throw new Error('Failed to get AI response')
    }

    const data = await response.json()
    return data.response
  } catch (error) {
    console.error('Error in getAIResponse:', error)
    throw error
  }
}

