'use server'

export async function getAIResponse(input: string) {
  try {
    // Get the deployment URL from environment or use localhost as fallback
    const baseUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : 'http://localhost:3000'
    
    const response = await fetch(`${baseUrl}/api/chat`, {
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

