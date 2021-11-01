import { useEffect } from "react";
import { PopulerIcon } from "../icons/Icons";
import TweetBox from "../components/TweetBox";
import Divider from "../components/Divider";

const Content = () => {
  return (
    <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight">
      <header className=" sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray-extraLight bg-wihte">
        <span className="font-bold text-xl text-gray-900">Home</span>
        <PopulerIcon className="w-5 h-5" />
      </header>

      <div className="flex space-x-4 px-4 py-3">
        <img
          src="https://pbs.twimg.com/profile_images/1444207456536735746/ABCsDyOp_400x400.jpg"
          alt="Profile"
          className="w-11 h-11 rounded-full"
        />
        <TweetBox />
      </div>
      <Divider />
    </main>
  );
};

export default Content;
