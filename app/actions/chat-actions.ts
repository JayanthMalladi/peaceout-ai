'use server'

import { getMiraResponse } from '../lib/mira-client'

export async function getAIResponse(input: string) {
  try {
    // Call Mira API directly instead of going through our API route
    const response = await getMiraResponse(input)
    return response
    
  } catch (error) {
    console.error('Detailed error:', error)
    throw new Error(`Request failed: ${error.message}`)
  }
}

