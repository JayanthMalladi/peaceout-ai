'use server'

export async function getAIResponse(input: string) {
  try {
    // Use absolute URL for production
    const baseUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : process.env.NODE_ENV === 'development' 
        ? 'http://localhost:3000'
        : 'https://peaceout-ai.vercel.app'
    
    console.log('Making request to:', `${baseUrl}/api/chat`)
    
    const response = await fetch(`${baseUrl}/api/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input }),
      cache: 'no-store'
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('API Error:', errorText)
      throw new Error('API request failed')
    }

    const data = await response.json()
    console.log('Response data:', data)
    
    if (data.error) {
      throw new Error(data.error)
    }

    return data.response
  } catch (error) {
    console.error('Detailed error:', error)
    throw new Error(`Request failed: ${error.message}`)
  }
}

