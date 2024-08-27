import { useState } from "react";
import { BiSolidChat } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { FiSend } from "react-icons/fi";
import { ScrollArea } from "@/components/ui/scroll-area";
import { aiResponses } from "../data/aiResponses";

interface Chat {
  sender: "Human" | "Ai";
  message: string;
}

const ChatComponent = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState<Chat[]>([]);
  const [reply, setReply] = useState("");

  const startConversation = () => {
    setChatOpen(true);
    if (!chatHistory.length) {
      const newChat = {
        sender: "AI",
        message: "Hello, how can I assist you today?",
      };
      setTimeout(() => {
        setChatHistory([...chatHistory, newChat]);
      }, 1000);
    }
  };

  const getRandomMessage = () => {
    const shuffledArray = [...aiResponses];

    // Shuffle the array using Fisher-Yates algorithm
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    const message = shuffledArray.pop();
    return message;
  };

  const replyMessage = () => {
    if (!reply.trim()) return;
    setChatHistory([...chatHistory, { sender: "Human", message: reply }]);
    setReply("");
    const message =
      getRandomMessage(aiResponses) ??
      "Looks like I've run out of things to say—I'm all out of chat fuel! Guess it's time for a reboot or a cup of coffee! ☕😄";
    setTimeout(() => {
      setChatHistory([...chatHistory, { sender: "Human", message: reply }, { sender: "AI", message }]);
    }, 1500);
  };

  return (
    <div className="flex justify-end sticky md:absolute right-[1rem] bottom-[1rem]">
      {chatOpen && (
        <div className="bg-gray-100 h-[30rem] w-full md:w-[30rem] shadow-md">
          <ul className="flex items-center justify-between bg-teal-600 text-white p-4">
            <li className="font-semibold flex items-center gap-1">
              <span className="text-lg">
                <BiSolidChat />
              </span>{" "}
              AquaSense Ai
            </li>
            <li
              className="cursor-pointer text-lg"
              onClick={() => setChatOpen((prev) => !prev)}>
              <IoClose />
            </li>
          </ul>
          <ScrollArea className="h-[23rem] w-full p-4">
            {chatHistory.map((chat, index) => (
              <p key={index} className="flex justify-between mb-2">
                {chat.message}
              </p>
            ))}
          </ScrollArea>

          <div className="bg-white px-2 py-4">
            <div className="bg-white flex items-center justify-between">
              <input
                type="text"
                placeholder="Write a message"
                className="w-full bg-white px-2 outline-none"
                value={reply}
                onChange={(e) => setReply(e.target.value)}
              />
              <button className="pr-2 text-gray-600" onClick={replyMessage}>
                <FiSend />
              </button>
            </div>
          </div>
        </div>
      )}
      {!chatOpen && (
        <div
          className="h-[4rem] w-[4rem] bg-teal-600 flex justify-center items-center text-4xl rounded-full shadow-lg text-white absolute bottom-0"
          onClick={startConversation}>
          <BiSolidChat />
        </div>
      )}
    </div>
  );
};

export default ChatComponent;
