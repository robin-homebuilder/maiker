import { NextResponse } from 'next/server'

import dbConnect from "@/libs/dbConnect";
import Package from '@/models/Package';

export async function GET(req: Request) {
  const slug = req.url.split("package/")[1];
  
  try {
    await dbConnect();

    const packageData = await Package.findOne({ slug: slug });
    
    return NextResponse.json(packageData)
  } catch (e) {
    return NextResponse.json(`error: ${e}`, {
      status: 500
    })
  }
}