import { NextResponse } from 'next/server'

import dbConnect from "@/libs/dbConnect";
import Package from '@/models/Package';

export async function POST(req: Request) {
  try {
    const { 
      title,
      sub_title,
      short_description,
      slug,
      price,
      inclusions,
      note
    } = await req.json();

    await dbConnect();

    const newPackage = new Package({
      title,
      sub_title,
      short_description,
      slug,
      price,
      inclusions,
      note
    });
    
    await newPackage.save();

    return NextResponse.json(1)
  } catch (e) {
    return NextResponse.json(`error: ${e}`, {
      status: 500
    })
  }
}

export async function GET() {
  try {
    await dbConnect();

    const projects = await Package.find({}).select("-_id title image_base_url main_image other_image");

    return NextResponse.json(projects)
  } catch (e) {
    return NextResponse.json(`error: ${e}`, {
      status: 500
    })
  }
}