import bond from "../assets/other/bond.png" 

export const ChatBubbleSend = ({text}) => {
  return (
    <div className="p-3 max-w-xl bg-white rounded-xl shadow-lg flex items-center space-x-4 mt-5 mx-0 justify-end">
      <div className="shrink-0"></div>
      <div>
        <div className="text-xl font-medium text-black">You</div>
        <p className="text-slate-500">{text}</p>
      </div>
      <img
        src={bond}
        alt="ChitChat Logo"
        className="h-12 w-12"
      />
    </div>
  );
};
