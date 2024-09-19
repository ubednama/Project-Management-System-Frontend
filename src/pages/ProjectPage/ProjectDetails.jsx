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
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchProjectById } from "@/redux/Project/Action";
import { capitalizeFirstLetter } from "@/utils/Capitalize";
import { fetchIssues } from "@/redux/Issue/Action";

const ProjectDetails = () => {
  const dispatch = useDispatch();
  const { project, issue } = useSelector((store) => store);
  const { id } = useParams();

  const handleProjectInvitation = () => {
    console.log("handleProjectInvitation not implemented yet");
  };

  const { issues } = issue;

  const filteredIssues = (status) => {
    return issues.filter((issue) => issue.status === status);
  };

  useEffect(() => {
    dispatch(fetchProjectById(id));
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(fetchIssues(id));
  }, [id, dispatch]);

  return (
    <div className="mt-5 px-4 lg:px-10 ">
      <div className="md:flex gap-2 justify-between pb-4 ">
        <ScrollArea className="h-screen min-w-[60%] w-full pr-2">
          <div className="text-gray-400 pb-10 w-full">
            <h1 className="text-2xl font-semibold pb-1">
              {project?.projectDetails?.name}
            </h1>
            <div className=" space-y-3 pb-10">
              <p className="w-full md:max-w-lg lg:max-w-xl mb-5">
                {project?.projectDetails?.description}
              </p>

              <div className="flex">
                <p className="w-28 sm:w-36">Project Lead: </p>
                <Badge>{project?.projectDetails?.owner.fullName}</Badge>
              </div>
              <div className="flex items-center">
                <p className="w-28 sm:w-36">Members: </p>
                <div className="flex items-center gap-2 max-w-[50%] overflow-auto">
                  {project?.projectDetails?.team.map((item) => (
                    <Avatar className="cursor-pointer" key={item.id}>
                      <AvatarFallback>{item.fullName[0]}</AvatarFallback>
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
                <p>
                  {capitalizeFirstLetter(project?.projectDetails?.category)}
                </p>
              </div>
              <div className="flex">
                <p className="w-28 sm:w-36">Status: </p>
                <Badge variant="secondary">In progress</Badge>
              </div>
            </div>
            <section>
              <p className="sm:py-5 border-b text-lg -tracking-wider">Tasks</p>
              <div className="py-5 md:flex gap-3 justify-between">
                <IssueList
                  status="pending"
                  title="ToDo list"
                  issues={filteredIssues("pending")}
                />
                <IssueList
                  status="in_progress"
                  title="In Progress"
                  issues={filteredIssues("in_progress")}
                />
                <IssueList
                  status="done"
                  title="Done"
                  issues={filteredIssues("done")}
                />
              </div>
            </section>
          </div>
        </ScrollArea>
        <div className="max-w-[35%]">
          <ChatBox />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;