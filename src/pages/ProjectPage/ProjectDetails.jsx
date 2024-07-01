import { ScrollArea } from "@/components/ui/scroll-area";
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
import InviteUserForm from "./InviteUserForm";
import IssueList from "./IssueList";
import ChatBox from "./ChatBox";

const ProjectDetails = () => {
  const handleProjectInvitation = () => {
    console.log("hey")
  }

  return (
    <div className="mt-5 px-4 lg:px-10 ">
      <div className="md:flex gap-5 justify-between pb-4 ">
        <ScrollArea className="h-screen max-w-[60%] pr-2">
          <div className="text-gray-400 pb-10 w-full">
            <h1 className="text-lg font-semibold pb-5">
              Create E-commerce Website
            </h1>
            <div className=" space-y-5 pb-10">
              <p className="w-full md:max-w-lg lg:max-w-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                placeat qui quidem culpa eaque voluptas, corporis ut rem fugit
                illum dolore amet sed minus similique assumenda, neque dolorum,
                non dicta?
              </p>
              <div className="flex">
                <p className="w-28 sm:w-36">Project Lead: </p>
                <p>Ubednama</p>
              </div>
              <div className="flex items-center">
                <p className="w-28 sm:w-36">Members: </p>
                <div className="flex items-center gap-2 max-w-[50%] overflow-auto">
                  {[1, 1, 1, 1].map((item) => (
                    <Avatar className="cursor-pointer" key={item}>
                      <AvatarFallback>{item}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <Dialog>
                  <DialogTrigger>
                    <DialogClose>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={handleProjectInvitation}
                        className="ml-4 flex items-center justify-center gap-1"
                      >
                        <span className="hidden sm:block">Invite </span>
                        <PlusIcon className="sm:size-3" />
                      </Button>
                    </DialogClose>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>Invite User</DialogHeader>
                    <InviteUserForm />
                  </DialogContent>
                </Dialog>
              </div>
              <div className="flex">
                <p className="w-28 sm:w-36">Category: </p>
                <p>FullStack</p>
              </div>
              <div className="flex">
                <p className="w-28 sm:w-36">Project Lead: </p>
                <Badge>Ubed</Badge>
              </div>
              <div className="flex">
                <p className="w-28 sm:w-36">Status: </p>
                <Badge variant="secondary">In progress</Badge>
              </div>
            </div>
            <section>
              <p className="sm:py-5 border-b text-lg -tracking-wider">Tasks</p>
              <div className="py-5 md:flex gap-3 justify-between">
                <IssueList status="pending" title="ToDo list" />
                <IssueList status="in_progress" title="In Progress" />
                <IssueList status="done" title="Done" />
                {/* <IssueList status="pending" title="ToDo list" /> */}
              </div>
            </section>
          </div>
        </ScrollArea>
        <div className="">
          <ChatBox />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails
