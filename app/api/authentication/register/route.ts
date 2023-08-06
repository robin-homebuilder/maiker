import { NextResponse } from 'next/server'

import dbConnect from "@/libs/dbConnect";
import User from "@/models/Users";

import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const { name, email, password, role, phone, status } = await req.json();
    
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    await dbConnect();

    const newUser = new User({
      display_name: name,
      user_email: email,
      user_pass: passwordHash,
      user_role: role,
      phone: phone,
      status: status
    });
    
    await newUser.save();

    return NextResponse.json(1)
  } catch (e) {
    return NextResponse.json(`error: ${e}`, {
      status: 500
    })
  }
}