import { NextResponse } from 'next/server'

const MIRA_API_URL = 'https://flow-api.mira.network/v1/flows/flows/karoly/human-like-chat-bot'
const FLOW_VERSION = "0.0.4"

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

    const { input } = await request.json()
    console.log('Received input:', input)

    const miraResponse = await fetch(MIRA_API_URL, {
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

    const responseText = await miraResponse.text()
    console.log('Mira API raw response:', responseText)

    if (!miraResponse.ok) {
      console.error('Mira API error:', responseText)
      return NextResponse.json(
        { error: 'External API error' },
        { status: miraResponse.status }
      )
    }

    try {
      const result = JSON.parse(responseText)
      const responses = JSON.parse(result.result)
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]
      return NextResponse.json({ response: randomResponse })
    } catch (parseError) {
      console.error('Parse error:', parseError)
      return NextResponse.json(
        { error: 'Response parsing error' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 