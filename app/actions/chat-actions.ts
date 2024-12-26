'use server'

export async function getAIResponse(input: string) {
  try {
    const baseUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : 'http://localhost:3000'
    
    console.log('Making request to:', `${baseUrl}/api/chat`)
    
    const response = await fetch(`${baseUrl}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input }),
      cache: 'no-store'
    })

    const data = await response.json()
    console.log('Response data:', data)
    
    if (!response.ok || data.error) {
      throw new Error(data.error || 'API request failed')
    }

    return data.response
  } catch (error) {
    console.error('Detailed error:', error)
    throw new Error(`Request failed: ${error.message}`)
  }
}

