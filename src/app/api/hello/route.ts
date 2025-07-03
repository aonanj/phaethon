import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: 'Hello from Phaethon API!' })
}

export async function POST(request: NextRequest) {
  const data = await request.json()
  return NextResponse.json({ message: 'Data received', data })
}
