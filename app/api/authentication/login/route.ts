import { NextResponse } from 'next/server'

import dbConnect from "@/libs/dbConnect";
import User from "@/models/Users";


export async function GET() {
  try {
    await dbConnect();

    const user = await User.find()
    return NextResponse.json({user})
  } catch {
    return NextResponse.json('error', {
      status: 500
    })
  }
}