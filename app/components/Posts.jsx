import React from "react";
import Link from "next/link";
import {
  FaReact,
  FaAngular,
  FaVuejs,
  FaNodeJs,
  FaAndroid,
  FaBootstrap,
  FaAppStore,
} from "react-icons/fa";

async function gettopics() {
  const res = await fetch("http://localhost:3000/api/topic", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  // console.log("get topics",await res.json());
  return res.json();
}
async function getTagsbyTagId(tagId) {
  const res = await fetch(`http://localhost:3000/api/tag${tagId}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  // console.log("get topics",await res.json());
  return res.json();
}

async function getNewstPost() {
  const res = await fetch("http://localhost:3000/api/topic/newest", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Posts() {
  const topics = await gettopics();
  const newestPost = await getNewstPost();

  // console.log("posts in posts.jsx", posts);
  // console.log("newestPost in posts.jsx", newestPost.topic[0]);
  return (
    <div>
      <div>
        <div className="">
          <div
            className=" hero min-h-80 rounded-md"
            style={{
              backgroundImage:
                "url(https://i.makeagif.com/media/9-15-2018/gD2iml.gif)",
            }}
          >
            <div className="hero-overlay bg-opacity-10 rounded-md"></div>
            <div className="text-neutral-content  p-10">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">
                  Build full stack web apps for free!
                </h1>
                <p className="mb-5">
                  Learn all the modern web frameworks and how to use them!
                </p>
                <div className="flex">
                  <FaReact className="size-7 mr-5" />
                  <FaAngular className="size-7 mr-5" />
                  <FaVuejs className="size-7 mr-5" />
                  <FaNodeJs className="size-7 mr-5" />
                  <FaAppStore className="size-7 mr-5" />
                  <FaAndroid className="size-7 mr-5" />
                  <FaBootstrap className="size-7 mr-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />

        <div className="">
          <img
            className="h-auto max-w-full rounded-t-lg"
            src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F3wnqxmno8an85kdmfgzb.jpg"
            alt="image description"
          ></img>
        </div>

        <div className=" bg-base-200 min-h-40">
          <div className=" text-left">
            <div className="p-4 max-w-md">
              <h1 className="text-3xl font-bold">
                {newestPost.topic[0].title}
              </h1>
              <p className="py-6">{newestPost.topic[0].subTitle}</p>
              <button className="btn btn-primary">View more</button>
            </div>
          </div>
        </div>
      </div>
      <div>Posts Lists</div>
      {topics.topics.map((post) => {
        return (
          <div>
            <Link href="/">
              <h1 className="text-3xl font-bold">{post.title}</h1>
              <p className="py-6">{post.subTitle}</p>
              {post.tags.map((t) => (
                // <div className="flex">
                //   <h3 className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 ">
                //     {t === "668b30e281c95c808f8bfb32" && `React`}
                //   </h3>
                //   <h3 className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                //     {t === "669687ef136d1eb20a951de9" && `NodeJS`}
                //   </h3>
                //   <h3 className=" inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                //     {t === "668c490607f6274dfc0d4996" && `Angular`}
                //   </h3>
                // </div>
                <div className="badge badge-neutral mx-1 font-medium">
                  <>{t === "668b30e281c95c808f8bfb32" && `React`}</>
                  <>{t === "669687ef136d1eb20a951de9" && `NodeJS`}</>
                  <>{t === "668c490607f6274dfc0d4996" && `Angular`}</>
                </div>
              ))}
              <div className="divider"></div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
