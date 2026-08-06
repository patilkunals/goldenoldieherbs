import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    // Log on the server terminal for diagnosis
    // eslint-disable-next-line no-console
    console.warn('Received extension log from client:', JSON.stringify(body))
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Failed to parse extension log payload', e)
  }

  return NextResponse.json({ ok: true })
}
