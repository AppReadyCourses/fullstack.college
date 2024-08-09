


import Posts from "./components/Posts";
import  PostsLists  from "./components/PostsLists";
import Menu from "./components/Menu";

export default function Home() {

  return (
    <div className="flex gap-x-2 bg-slate-100  ">
     
      <div className="flex-none w-42"><Menu /></div>
      <div className="flex-1 "><Posts /></div>
      <div className="flex-none w-64"><PostsLists /></div>
    </div>
  );
}
