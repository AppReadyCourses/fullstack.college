

import connectMongoDB from "../../libs/mongodb"
import {Course, Tag} from "../../model/model"
import { NextResponse } from "next/server";

export async function GET() {
    await connectMongoDB();
  const tags = await Tag.find();
  return NextResponse.json({ tags });
}

export async function POST(request) {
    const {name} = await request.json();
    await connectMongoDB();

    await Tag.create({
        name
    });

    return NextResponse.json({ message: "Tag created" }, { status: 201 });
}