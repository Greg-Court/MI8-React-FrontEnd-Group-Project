export const ChatBubbleReceive = ({text}) => {
  return (
    <div className="p-3 max-w-xl bg-white rounded-xl shadow-lg flex items-center space-x-4 mt-5 mx-0 justify-start">
      <div className="shrink-0">
        <img
          src="https://cryptologos.cc/logos/chatcoin-chat-logo.svg?v=024"
          alt="ChitChat Logo"
          className="h-12 w-12"
        />
      </div>
      <div>
        <div className="text-xl font-medium text-black">M</div>
        <p className="text-slate-500">
          {text}
        </p>
      </div>
    </div>
  );
};
