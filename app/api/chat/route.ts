import { NextResponse } from 'next/server'

// Remove hardcoded API key
const API_KEY = process.env.MIRA_API_KEY

export async function POST(req: Request) {
  try {
    const { input } = await req.json()
    
    const response = await fetch('https://api.mira-ai.io/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        messages: [{ role: 'user', content: input }]
      })
    })

    const responseText = await response.text()
    console.log('Mira API response:', responseText)

    if (!response.ok) {
      return NextResponse.json(
        { error: `Mira API error: ${responseText}` }, 
        { status: response.status }
      )
    }

    const result = JSON.parse(responseText)
    // Parse the result and get a random response from the array
    const responses = JSON.parse(result.result)
    const randomResponse = responses[Math.floor(Math.random() * responses.length)]
    
    return NextResponse.json({ response: randomResponse })
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: error.message || 'Internal server error' }, 
      { status: 500 }
    )
  }
} 