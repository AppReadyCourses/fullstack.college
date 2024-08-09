import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import { Topic, Tag } from "../../../../model/model";

export async function POST(request, { params }) {
  // console.log("params tag", params);
  await connectMongoDB();
  const topic = await Topic.findOne({ _id: params.topic });
  const tag = await Tag.findOne({ _id: params.tag.replace("\n", "") });
  // console.log("find topic", topic);
  // console.log("find topic tags", topic.tags);
  // console.log("find tag", tag);
  // console.log("find tag topics", tag.topics);
  // console.log("checck if same", topic.tags.includes(tag._id));

  if (topic && tag) {
    if (topic.tags.includes(tag._id) && tag.topics.includes(topic._id)) {
      return NextResponse.json(
        { message: "Relation existed" },
        { status: 201 }
      );
    }

    await topic.tags.push([tag._id]);
    await tag.topics.push([topic._id]);
    // console.log('tag._id', tag._id)
    await topic.save();
    await tag.save();

    return NextResponse.json({ message: "Relation created" }, { status: 500 });
  }
}
