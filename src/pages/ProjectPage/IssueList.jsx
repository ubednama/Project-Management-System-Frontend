import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import IssueCard from "./IssueCard";
import { PlusIcon } from "@radix-ui/react-icons";
import CreateIssueForm from "./CreateIssueForm";
import { useParams } from "react-router-dom";

const IssueList = ({ title, status, issues}) => {
  const {id} = useParams();

  return (
    <div className="w-full mt-2 sm:mt-0 min-w-80">
      <Dialog>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent className="!pb-2 px-2">
            <div className="space-y-1">
              {issues?.map((issue) => (
                <IssueCard key={issue.id} issue={issue} projectId={id} />
              ))}
            </div>
          </CardContent>
          {status == "pending" && (
            <CardFooter className="!pt-4">
              <DialogTrigger>
                <Button
                  variant="outline"
                  className="w-full flex items-center gap-2"
                >
                  <PlusIcon /> Create Issue
                </Button>
              </DialogTrigger>
            </CardFooter>
          )}
        </Card>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Create New Issue</DialogTitle>
          </DialogHeader>
          <CreateIssueForm status={status} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IssueList;
