import connectMongoDB from "../../libs/mongodb";
import { Topic, Tag } from "../../model/model";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
//   console.log('topics topics', topics)

  return NextResponse.json({ topics });
}

export async function POST(request) {
  const { title, subTitle, slug, codes, pageUrl, titleImageUrl, videoUrl } =
    await request.json();
  await connectMongoDB();

  await Topic.create({
    title,
    subTitle,
    slug,
    codes,
    pageUrl,
    titleImageUrl,
    videoUrl,
  });

  return NextResponse.json({ message: "Topic created" }, { status: 201 });
}
