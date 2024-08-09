import React from "react";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000/api/topic");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
async function getTopicsByTagId(tagid) {
  const res = await fetch(`http://localhost:3000/api/topic/${tagid}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function PostsLists() {
  const getReactJSTag = await getTopicsByTagId("668b30e281c95c808f8bfb32");
  const getNodeJSTag = await getTopicsByTagId("669687ef136d1eb20a951de9");
  const getAngularTag = await getTopicsByTagId("668c490607f6274dfc0d4996");

  return (
    <div className="">
      <div className=" m-2 font-bold text-xl">#React</div>
      <div className="">
        <div className="bg-base-100 rounded-box mx-2">
          {getReactJSTag.records.map((topic) => (
            <div className=" first:pt-5">
              <Link href='http://localhost:3000/readtopics/'>
                <ul className="" key={topic._id}>
                  <li className="font-medium text-lg  mx-0.5 px-1 ">
                    {topic.title}
                  </li>
                  <li className="text-sm mx-0.5 px-1 text-slate-500">
                    {topic.subTitle}
                  </li>
                  <div className="divider "></div>
                </ul>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className=" m-2 font-bold text-xl">#NodeJS</div>
      <div className="">
        <div className="bg-base-100 rounded-box mx-2">
          {getNodeJSTag.records.map((topic) => (
            <div className=" first:pt-5">
              <ul className="" key={topic._id}>
                <li className="font-medium text-lg  mx-0.5 px-1 ">
                  {topic.title}
                </li>
                <li className="text-sm mx-0.5 px-1 text-slate-500">
                  {topic.subTitle}
                </li>
                <div className="divider "></div>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className=" m-2 font-bold text-xl">#Angular</div>
      <div className="">
        <div className="bg-base-100 rounded-box mx-2">
          {getAngularTag.records.map((topic) => (
            <div className=" first:pt-5">
              <ul className="" key={topic._id}>
                <li className="font-medium text-lg  mx-0.5 px-1 ">
                  {topic.title}
                </li>
                <li className="text-sm mx-0.5 px-1 text-slate-500">
                  {topic.subTitle}
                </li>
                <div className="divider "></div>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
