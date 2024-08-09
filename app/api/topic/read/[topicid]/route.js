import connectMongoDB from "../../../../libs/mongodb";
import { Topic, Tag } from "../../../../model/model";
import { NextResponse } from "next/server";

//Find topic based on Tag ID
export async function GET(request, { params }) {
    // console.log('get single topic params', params)
  await connectMongoDB();

//   const tag = await Tag.findById(params.tagid);
  // console.log("topics id in 1 tag", tag.topics);

  const records = await Topic.findOne({_id: params.topicid});
  // console.log('get topics and tag', records)

  // return NextResponse.json({ tags });
  // console.log('get single topic', records)

  return NextResponse.json({ records });
} 
