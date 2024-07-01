import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import CreateCommentForm from "./CreateCommentForm";
import CommentCard from "./CommentCard";

const IssueDetails = () => {
    const handleUpdateIssueStatus =(issue) => {
        console.log(issue)
    }
  return (
    <div className="px-20 py-8 text-gray-400">
      <div className="flex justify-between border p-10 rounded-lg ">
        <ScrollArea className="h-[80vh] w-[60%] ">
          <div>
            <h1 className="text-lg font-semibold text-gray-400">
              Create Navbar
            </h1>
            <div className="py-5">
              <h2 className="font-semibold text-gray-400">Description</h2>
              <p className="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
                atque! Est molestias enim quis ea voluptatum aliquam. Maxime
                alias laborum asperiores animi ipsa voluptas saepe quos iste.
                Necessitatibus quae saepe quod quam
              </p>
            </div>
            <div className="mt-3">
              <h1 className="pb-1">Activity</h1>
              <Tabs defaultValue="comments" className="w-[28rem]">
                <TabsList className="mb-2">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="comments">Comments</TabsTrigger>
                  <TabsTrigger value="history">History</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                  All change to your account
                </TabsContent>
                <TabsContent value="comments" className="border p-2 rounded-md">
                  <CreateCommentForm />
                  <div className="">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} id={item}>
                        <CommentCard />
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="history">History stuff here</TabsContent>
              </Tabs>
            </div>
          </div>
        </ScrollArea>
        <div className="w-full lg:w-1/3 space-y-2">
          <Select
            onValueChange={handleUpdateIssueStatus}
            defaultValue="pending"
          >
            <SelectTrigger className="">
              <SelectValue placeHolder="To Do" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">To Do</SelectItem>
              <SelectItem value="in_progress">In Progress</SelectItem>
              <SelectItem value="done">Done</SelectItem>
            </SelectContent>
          </Select>
          <div className="border rounded-lg">
            <p className="border-b py-3 px-5">Details</p>
            <div className="p-5">
              <div className="space-y-3">
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Assignee:</p>
                  <div className="flex items-center gap-1">
                    <Avatar className="size-8">
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <p>Ubed</p>
                  </div>
                </div>
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Labels:</p>
                  <p>Ubed</p>
                </div>
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Status:</p>
                  <Badge variant="destructive">In Progress</Badge>
                </div>
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Release:</p>
                  <p>30-06-2024</p>
                </div>
                <div className="flex gap-10 items-center">
                  <p className="w-[7rem]">Reporter :</p>
                  <div className="flex items-center gap-1">
                    <Avatar className="size-8">
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <p>Someone</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueDetails;
