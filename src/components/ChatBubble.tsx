interface IChatProps {
  sender: "Human" | "AI";
  message: string;
}

const ChatBubble = ({ sender, message }: IChatProps) => {
  return (
    <div>
      {sender !== "Human" ? (
        <div className="my-4">
          <p className="pl-4 bg-gray-300 p-2 rounded-md inline-block max-w-[70%] text-sm">
            {message}
          </p>
        </div>
      ) : (
        <div className="flex justify-end">
          <p className="pr-4 bg-blue-500 text-white p-2 rounded-lg inline-block text-sm">
            {message}
          </p>
        </div>
      )}
    </div>
  );
};

export default ChatBubble;
