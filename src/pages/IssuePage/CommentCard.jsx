import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@radix-ui/react-icons";

const CommentCard = () => {
  return (
    <div className="flex justify-between items-center mt-2 ml-3 border-b pb-1 mr-11">
      <div className="flex items-center gap-2">
        <Avatar className="size-9">
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-center">
          <div className="text-sm">User</div>
          <div className="">Comment Message</div>
        </div>
      </div>
      <Button className="rounded-full" variant="ghost" size="icon">
        <TrashIcon />
      </Button>
    </div>
  );
};

export default CommentCard;