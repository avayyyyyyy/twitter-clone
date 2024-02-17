import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import React from "react";

type Props = {};

const WhoToFollow = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col gap-y-4 my-2 px-2 bg-zinc-800 h-fit py-4 rounded-xl">
        <div className="font-bold"> Who to follow</div>
        <div className="flex h-fit items-center gap-3">
          <div className="cursor-pointer my-1  hover:bg-zinc-800 transition-all items-center h-fit  flex gap-x-2">
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
          <div className="bg-white h-fit text-black px-2 rounded-full font-semibold">
            follow
          </div>
        </div>
        <div className="flex h-fit items-center gap-3">
          <div className="cursor-pointer my-1  hover:bg-zinc-800 transition-all items-center h-fit  flex gap-x-2">
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
          <div className="bg-white h-fit text-black px-2 rounded-full font-semibold">
            follow
          </div>
        </div>
        <div className="flex h-fit items-center gap-3">
          <div className="cursor-pointer my-1  hover:bg-zinc-800 transition-all items-center h-fit  flex gap-x-2">
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
          <div className="bg-white h-fit text-black px-2 rounded-full font-semibold">
            follow
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoToFollow;
