import connectMongoDB from "../../../libs/mongodb"
import {Topic, Tag} from "../../../model/model"
import { NextResponse } from "next/server";

//Get newest single post only
export async function GET() {
    await connectMongoDB();
  const topic = await Topic.find().sort({createdAt: -1}).limit(1)
  return NextResponse.json({ topic });
}