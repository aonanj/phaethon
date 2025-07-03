import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const publicDir = path.join(process.cwd(), 'public')
    const files = fs.readdirSync(publicDir, { recursive: true })
    
    return NextResponse.json({
      cwd: process.cwd(),
      publicFiles: files,
      nodeEnv: process.env.NODE_ENV,
    })
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 })
  }
}