import React from "react";

type Props = {};

const Trending = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-4 my-2 bg-zinc-800 h-fit px-3 py-4 rounded-xl">
      <div className="font-bold">Whats happening?</div>
      <div className="text-sm flex flex-col gap-5">
        <div>
          <div className="font-bold cursor-pointer">Trending 1</div>
          <div className="text-xs text-zinc-400">35.4k</div>
        </div>
        <div>
          <div className="font-bold cursor-pointer">Trending 2</div>
          <div className="text-xs text-zinc-400">35.4k</div>
        </div>
        <div>
          <div className="font-bold cursor-pointer">Trending 3</div>
          <div className="text-xs text-zinc-400">35.4k</div>
        </div>
        <div>
          <div className="font-bold cursor-pointer">Trending 4</div>
          <div className="text-xs text-zinc-400">35.4k</div>
        </div>
        <div>
          <div className="font-bold cursor-pointer">Trending 5</div>
          <div className="text-xs text-zinc-400">35.4k</div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
