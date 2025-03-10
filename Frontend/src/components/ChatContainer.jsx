import { useRef } from "react";
import { useChatStore } from "../store/useChatStore";
import { useEffect } from "react";
import MessageInput from "./MessageInput";
import ChatHeader from "./ChatHeader";
import MessageSkeleton from "./skeletons/MessageSkeleton";
import { useAuthStore } from "../store/useAuthStore";
import { formatMessageTime } from "../lib/utils";
const ChatContainer = () => {
  const {
    messages,
    getMessages,
    isMessagesLoading,
    selectedUser,
    subToMessages,
    unSubToMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);
  useEffect(() => {
    getMessages(selectedUser._id);
    subToMessages();
    return () => {
      unSubToMessages();
    };
  }, [selectedUser._id, getMessages, subToMessages, unSubToMessages]);
  useEffect(() => {
    if (messageEndRef.current && messages) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  if (isMessagesLoading)
    return (
      <div className="flex-1 flex flex-col overflow-auto">
        <ChatHeader />
        <MessageSkeleton />
        <MessageInput />
      </div>
    );
  return (
    <div className="flex-1  flex flex-col overflow-auto">
      <ChatHeader />
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((messages) => {
          return (
            <div
              key={messages._id}
              className={`chat ${
                messages.senderId === authUser._id ? "chat-end" : "chat-start "
              }`}
              ref={messageEndRef}
            >
              <div className="chat-image avatar">
                <div className="size-10 rounded-full border">
                  <img
                    src={
                      messages.senderId === authUser._id
                        ? authUser.profilePic || "/avatar.png"
                        : selectedUser.profilePic || "/avatar.png"
                    }
                    alt="profile pic"
                  />
                </div>
              </div>
              <div className="chat-header mb-1">
                <time className="text-xs opacity-50 ml-1">
                  {formatMessageTime(messages.createdAt)}
                </time>
              </div>
              <div
                className={`chat-bubble ${
                  messages.senderId === authUser._id
                    ? "bg-primary"
                    : "bg-base-200"
                } flex flex-col`}
              >
                {messages.image && (
                  <img
                    src={messages.image}
                    alt="Attachment"
                    className="sm:max-w-[200px] rounded-md mb-2"
                  />
                )}
                {messages.text && (
                  <p
                    className={` ${
                      messages.senderId === authUser._id
                        ? "bg-primary text-primary-content"
                        : "text-secondary-content"
                    } }`}
                  >
                    {messages.text}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <MessageInput />
    </div>
  );
};

export default ChatContainer;
