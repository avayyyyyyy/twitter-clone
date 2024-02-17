import SubscribeCard from "@/components/SubscribeCard";
import Trending from "@/components/Trending";
import TweetCard from "@/components/TweetCard";
import WhoToFollow from "@/components/WhoToFollow";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Bell,
  BookmarkCheck,
  ClipboardList,
  HomeIcon,
  Mail,
  MoreHorizontal,
  Search,
  SlashSquare,
  Twitter,
  User,
  Users,
} from "lucide-react";
import React from "react";

interface optionNav {
  title: string;
  icon: React.ReactNode;
}

const option: optionNav[] = [
  {
    title: "Home",
    icon: <HomeIcon />,
  },
  {
    title: "Explore",
    icon: <Search />,
  },
  {
    title: "Notification",
    icon: <Bell />,
  },
  {
    title: "Messages",
    icon: <Mail />,
  },
  {
    title: "Grok",
    icon: <SlashSquare />,
  },
  {
    title: "Lists",
    icon: <ClipboardList />,
  },
  {
    title: "Bookmarks",
    icon: <BookmarkCheck />,
  },
  {
    title: "Communities",
    icon: <Users />,
  },
  {
    title: "Premium",
    icon: <Twitter />,
  },
  {
    title: "Profile",
    icon: <User />,
  },
  {
    title: "Options",
    icon: <MoreHorizontal />,
  },
];

export default function Home() {
  return (
    <div className="grid grid-cols-12 h-screen border">
      <div className="ml-36 pt-5 col-span-3 justify-end pr-5">
        <div className="p-3 cursor-pointer hover:bg-zinc-800 h-fit w-fit rounded-full transition-all">
          <Twitter size={35} />
        </div>
        <div>
          <ul className="list-none ">
            {option.map((e) => (
              <li
                className="flex hover:bg-zinc-800 cursor-pointer w-fit p-3 transition-all rounded-full gap-x-2 items-center"
                key={e.title}
              >
                <span className="">{e.icon}</span>
                <span className=" text-lg">{e.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <button className="bg-sky-400 w-full rounded-full hover:bg-sky-300 transition-all h-fit p-3">
          Tweet
        </button>
        <div className="cursor-pointer my-4 px-3 py-2 rounded-full hover:bg-zinc-800 transition-all items-center h-fit  flex gap-x-2">
          <Avatar>
            <AvatarImage
              src={"https://avatars.githubusercontent.com/u/111121419?v=4"}
              alt="@user-image"
            />
            <AvatarFallback>SJ</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-sm text-zinc-100">Shubhankit Jain</h1>
            <h1 className="text-xs text-zinc-400">@shubhcodes</h1>
          </div>
        </div>
      </div>
      <div className="border overflow-y-scroll h-screen col-span-6 ">
        <div>
          <div className="w-full flex items-center justify-evenly p-2 cursor-pointer">
            <div className="border-b-4 px-1 border-sky-500">For You</div>
            <div>Following</div>
          </div>
          <div className="grid grid-cols-12 py-3 h-fit border-t-2">
            <div className="col-span-1 ml-4">
              <Avatar>
                <AvatarImage
                  src={"https://avatars.githubusercontent.com/u/111121419?v=4"}
                  alt="@user-image"
                />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
            </div>
            <div className="col-span-9">
              <div>
                <input
                  type="text"
                  className="bg-transparent py-2 w-[90%] outline-none"
                  placeholder="what is happening?"
                />
              </div>
              <div>Some icons</div>
            </div>
          </div>
        </div>
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
        <TweetCard />
      </div>
      <div className="col-span-2  m-3">
        <div className="flex gap-x-2 h-fit w-full items-center mb-4 rounded-full p-3 bg-zinc-800 ">
          <span>
            <Search size={20} className="text-zinc-400" />
          </span>
          <input
            type="text"
            className="bg-transparent outline-none"
            placeholder="Search"
          />
        </div>
        <SubscribeCard />
        <Trending />
        <WhoToFollow />
      </div>
    </div>
  );
}
