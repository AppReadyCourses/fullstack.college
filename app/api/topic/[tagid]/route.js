import connectMongoDB from "../../../libs/mongodb";
import { Topic, Tag } from "../../../model/model";
import { NextResponse } from "next/server";

//Find topic based on Tag ID
export async function GET(request, { params }) {
  await connectMongoDB();

  const tag = await Tag.findById(params.tagid);
  // console.log("topics id in 1 tag", tag.topics);

  const records = await Topic.find({ _id: { $in: tag.topics } });
  // console.log('get topics and tag', records)

  // return NextResponse.json({ tags });

  return NextResponse.json({ records });
}
