export const ChatBubbleRecieve = () => {
  return (
    <div className="p-3 max-w-xl mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4 mt-10 justify-start">
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
          There is a reception desk with a bored looking
          receptionist. By the elevators you see some guards."
        </p>
      </div>
    </div>
  );
};
