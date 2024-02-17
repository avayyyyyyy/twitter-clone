import React from "react";

type Props = {};

const SubscribeCard = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-4 my-2 bg-zinc-800 h-fit px-3 py-4 rounded-xl">
      <div className="font-bold">Subscribe to Premium</div>
      <div className="text-sm">
        Subscribe to unlock new features and if eligible, receive a share of ads
        revenue.
      </div>
      <button className="bg-sky-400 w-fit rounded-full hover:bg-sky-300 transition-all h-fit px-3 py-2">
        Subscribe
      </button>
    </div>
  );
};

export default SubscribeCard;
