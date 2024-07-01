import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

const ChatBox = () => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    console.log("message", message)
    setMessage("");
  }

  const handleChangeMessage=(e)=>{
    setMessage(e.target.value);
  }
  return (
    <div className="sticky lg:min-w-72 xl:min-w-80 max-w-96">
      <div className="border rounded-lg">
        <h1 className="border-b p-5">Chat</h1>
        <ScrollArea className="h-[38rem] p-2 xl:pt-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, idx) =>
            idx % 2 === 0 ? (
              <div
                className="flex gap-1 mb-2 justify-start items-start mr-14"
                key={item}
              >
                <Avatar>
                  <AvatarFallback>R</AvatarFallback>
                </Avatar>
                <div className="py-1 px-3 border rounded-ss-2xl rounded-e-xl">
                  <p className="text-xs">x</p>
                  <p className="text-gray-300">How are you</p>
                </div>
              </div>
            ) : (
              <div className="flex mb-2 justify-end ml-14 " key={item}>
                <div className="py-1 px-3 border rounded-se-2xl rounded-s-xl border-zinc-600">
                  <p className="text-gray-300">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quia aut unde autem nisi deleniti dolor nesciunt minima
                    porro eligendi aliquid!
                  </p>
                </div>
              </div>
            )
          )}
        </ScrollArea>
        <div className="relative p-0">
          <Input
            placeHolder="Send message..."
            className="py-7 border-t outline-none focus:outline-none focus:ring-0 rounded-none border-b-0 border-x-0"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            onClick={handleSendMessage}
            className="absolute right-2 top-3 rounded-full"
            size="icon"
            variant="ghost"
          >
            <PaperPlaneIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
