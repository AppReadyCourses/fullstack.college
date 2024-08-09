import React from "react";
import Menu from "../components/Menu";
import moment from "moment";

async function gettopics(topicid) {
  const res = await fetch(`http://localhost:3000/api/topic/`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const page = async () => {
  const topics = await gettopics();
  // const timeAgo = moment("2024-07-14T07:39:31.915Z").fromNow();
  // console.log("DATES", timeAgo);
  return (
    <div>
      <div>
        <div className="flex ">
          <div className="flex-none w-32">
            <Menu />
          </div>
          <div className="flex-1 w-80 px-5">
            <div>
              {topics.topics.map((topic) => (
                <div key={topic._id}>
                  <div className="flex justify-between">
                    <div className="mx-2">
                      <h1 className="ml-5 font-semibold text-xl p-1 ">
                        {topic.title}
                      </h1>
                      <p className="ml-5 px-1">{topic.subTitle}</p>
                    </div>
                    <div>
                      <div className="text-sm p-1 text-slate-500">{moment(topic.createdAt).fromNow()}</div>
                    </div>
                  </div>
                  <div className="divider mx-3"></div>
                </div>
              ))}
            </div>
            <div></div>
            <h1 className="ml-5 font-semibold text-5xl p-5"></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
