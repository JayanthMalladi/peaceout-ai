'use server'

export async function getAIResponse(input: string) {
  try {
    const response = await fetch('http://localhost:3000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input })
    })

    const data = await response.json()
    
    if (!response.ok) {
      console.error('API error:', data.error)
      throw new Error(data.error || 'Failed to get AI response')
    }

    return data.response
  } catch (error) {
    console.error('Error getting AI response:', error)
    throw error
  }
}

