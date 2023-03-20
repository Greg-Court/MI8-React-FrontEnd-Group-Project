export const ChatBubbleSend = () => {
  return (
    <div className="p-3 max-w-xl mx-auto bg-white rounded-xl shadow-lg flex items-center justify-end space-x-4 mt-10 text-right">
      <div className="shrink-0"></div>
      <div>
        <div className="text-xl font-medium text-black">You</div>
        <p className="text-slate-500">I just entered the Lobby</p>
      </div>
      <img
        src="https://cryptologos.cc/logos/chatcoin-chat-logo.svg?v=024"
        alt="ChitChat Logo"
        className="h-12 w-12"
      />
    </div>
  );
};
