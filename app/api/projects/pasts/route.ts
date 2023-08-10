import { NextResponse } from 'next/server'

import dbConnect from "@/libs/dbConnect";
import Project from '@/models/Projects';

export async function GET() {
  try {
    await dbConnect();

    const projects = await Project.find({}).select("-_id title image_base_url main_image other_image").sort({ createdAt: -1 }).limit(4);

    return NextResponse.json(projects)
  } catch (e) {
    return NextResponse.json(`error: ${e}`, {
      status: 500
    })
  }
}