"use client";

import { useParams } from "next/navigation";
import React from "react";
import parser from "html-react-parser";
import SideNavBar from "@/app/components/SideNavBar";
import PostsLists from "@/app/components/PostsLists";
import Navbar from "@/app/components/Navbar";
import Menu from "@/app/components/Menu";

async function gettopics(topicid) {
  const res = await fetch(`http://localhost:3000/api/topic/read/${topicid}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  // console.log("get topics",await res.json());
  return res.json();
}

const page = async () => {
  const params = useParams();
  console.log("params", params.topicid);
  const getTopicData = await gettopics(params.topicid);
  console.log("front get topic ", getTopicData);
  return (
    <div>
      <div className="flex">
        <div className="flex-none w-32">
          <Menu />
        </div>
        <div className="flex-1 w-80 px-5">
          <div>
            <img
              src={getTopicData.records.titleImageUrl}
              className=" rounded-lg shadow-2xl "
            />
          </div>
          <div></div>
          <h1 className="ml-5 font-semibold text-5xl p-5">
            {getTopicData.records.title}
          </h1>
          {getTopicData.records.tags.map((t) => (
            <div className="ml-10 mt-1">
              <div className="badge badge-neutral mx-1 font-medium">
                <>{t === "668b30e281c95c808f8bfb32" && `React`}</>
                <>{t === "669687ef136d1eb20a951de9" && `NodeJS`}</>
                <>{t === "668c490607f6274dfc0d4996" && `Angular`}</>
              </div>
            </div>
          ))}
          <div className="p-10">{parser(getTopicData.records.codes)}</div>
        </div>
        {/* <div className="flex-1 w-32">
          <PostsLists />
        </div> */}
      </div>
    </div>
  );
};

export default page;
