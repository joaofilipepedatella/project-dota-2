import { FlagIcon, HeadsetIcon, UserRoundIcon } from "lucide-react";

const ActualGroup = () => {
  return (
    <>
      <div className="flex justify-around items-center absolute bottom-5 left-10 z-10 bg-stone-700 w-96">
        {/* full */}
        <div className="flex justify-between items-center p-1 m-2 bg-stone-600 gap-1">
          {/* group */}
          <div className="bg-slate-500 p-2">
            <UserRoundIcon />
          </div>
          <div className="bg-slate-500 p-2">
            <UserRoundIcon />
          </div>
          <div className="bg-slate-500 p-2">
            <UserRoundIcon />
          </div>
          <div className="bg-slate-500 p-2">
            <UserRoundIcon />
          </div>
          <div className="bg-slate-500 p-2">
            <UserRoundIcon />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-center p-1 h-7 w-7 rounded-full  border border-white bg-slate-500 text-white">
            <HeadsetIcon />
          </div>
          <div className="bg-slate-500 p-2 ml-1 border-2 border-white rounded">
            <FlagIcon />
          </div>
        </div>
        {/* chat / clan */}
      </div>
    </>
  );
};

export default ActualGroup;
