import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Heart,
  MessageCircle,
  MoreHorizontal,
  Repeat2,
  Upload,
} from "lucide-react";
import React from "react";

type Props = {};

const TweetCard = (props: Props) => {
  return (
    <div className="grid grid-cols-12 py-2 border-t-2 h-fit hover:bg-zinc-900 cursor-pointer">
      <div className="mx-auto mt-1 col-span-1">
        <Avatar>
          <AvatarImage
            src={"https://avatars.githubusercontent.com/u/111121419?v=4"}
            alt="@shadcn"
          />
          <AvatarFallback>SJ</AvatarFallback>
        </Avatar>
      </div>
      <div className="col-span-11 mr-5 ">
        <div className="flex justify-between items-center">
          <div className="flex items-baseline">
            <div>Shubhankit Jain</div>
            <div className="text-zinc-400 ml-2 text-sm">@shubhcodes</div>
          </div>
          <div className="hover:bg-zinc-800 p-1 rounded-full ">
            <MoreHorizontal />
          </div>
        </div>
        <div className="text-sm mt-1">
          <p>
            I recently got an Offer as a Remote but on Contract MERN Developer
            for an Ad-hoc startup. It is just 400 USD per Month. Currently in my
            3rd year of college and it is a Tier-IV college. What guys do you
            suggest should I say yes? Or is it just desperate me? @kirat_tw
          </p>
        </div>
        <div className="flex w-[80%] text-sm justify-between mt-3">
          <div className="cursor-pointer p-2 transition-all  rounded-full hover:bg-zinc-700">
            <MessageCircle width={20} height={20} />
          </div>
          <div className="cursor-pointer p-2 transition-all  rounded-full hover:bg-zinc-700">
            <Repeat2 width={20} height={20} />
          </div>
          <div className="cursor-pointer p-2 transition-all  rounded-full hover:bg-zinc-700">
            <Heart width={20} height={20} />
          </div>
          <div className="cursor-pointer p-2 transition-all  rounded-full hover:bg-zinc-700">
            <Upload width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
