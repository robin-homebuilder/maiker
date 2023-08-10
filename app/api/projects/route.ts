import { NextResponse } from 'next/server'

import dbConnect from "@/libs/dbConnect";
import Project from '@/models/Projects';

export async function POST(req: Request) {
  try {
    const { title, main_image, other_image} = await req.json();

    await dbConnect();

    const newProject = new Project({
      title,
      image_base_url: `/projects/project-4`,
      main_image,
      other_image
    });
    
    await newProject.save();

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

    const projects = await Project.find({}).select("-_id title image_base_url main_image other_image");

    return NextResponse.json(projects)
  } catch (e) {
    return NextResponse.json(`error: ${e}`, {
      status: 500
    })
  }
}