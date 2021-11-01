import { useState } from "react";
import {
  ImageIcon,
  GIFIcon,
  PollIcon,
  EmojiIcon,
  ScheduleIcon,
} from "../icons/Icons";
import firebase from "firebase";
import db from "../firebase";

const TweetBox = () => {
  const [content, setContent] = useState("");

  const sendTweet = () => {
    if (content !== "") {
      db.collection("feed").add({
        displayName: "Muhammed B",
        username: "@emuhammedb",
        content,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        avatar:
          "https://pbs.twimg.com/profile_images/1444207456536735746/ABCsDyOp_400x400.jpg",
      });
      setContent("")
    }
  };


  return (
    <div className="flex flex-col flex-1 mt-2 px-2">
      <textarea
        className="w-full text-lg placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent"
        placeholder="What's happening?"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      />
      <div className="flex items-center justify-between">
        <div className="flex -ml-3">
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-primary-lightest cursor-pointer">
            <ImageIcon className="w-6 h-6 text-primary-base" />
          </div>

          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-primary-lightest cursor-pointer">
            <GIFIcon className="w-6 h-6 text-primary-base" />
          </div>

          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-primary-lightest cursor-pointer">
            <PollIcon className="w-6 h-6 text-primary-base" />
          </div>

          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-primary-lightest cursor-pointer">
            <EmojiIcon className="w-6 h-6 text-primary-base" />
          </div>

          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-primary-lightest cursor-pointer">
            <ScheduleIcon className="w-6 h-6 text-primary-base" />
          </div>
        </div>

        <button
          className="bg-primary-base text-white rounded-full px-4 py-2 font-bold"
          onClick={sendTweet}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TweetBox;
