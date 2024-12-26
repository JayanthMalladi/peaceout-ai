import { NextResponse } from 'next/server'

const MIRA_API_URL = 'https://flow-api.mira.network/v1/flows/flows/jaymalladi/mindfulness-guide'
const FLOW_VERSION = "1.0.5"

export async function POST(request: Request) {
  try {
    const apiKey = process.env.MIRA_API_KEY
    if (!apiKey) {
      console.error('MIRA_API_KEY not configured')
      return NextResponse.json(
        { error: 'API configuration error' },
        { status: 500 }
      )
    }

    const { stress_level, time_available } = await request.json()
    console.log('Received input:', { stress_level, time_available })

    const miraResponse = await fetch(MIRA_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'MiraAuthorization': apiKey
      },
      body: JSON.stringify({
        input: {
          stress_level,
          time_available
        },
        version: FLOW_VERSION
      })
    })

    const responseText = await miraResponse.text()
    console.log('Mira API raw response:', responseText)

    if (!miraResponse.ok) {
      console.error('Mira API error:', responseText)
      return NextResponse.json(
        { error: 'External API error' },
        { status: miraResponse.status }
      )
    }

    const result = JSON.parse(responseText)
    return NextResponse.json({ response: result.result })
    
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 