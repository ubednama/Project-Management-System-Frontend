import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DotsVerticalIcon, PersonIcon } from "@radix-ui/react-icons";
import UserList from "./UserList";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteIssueById } from "@/redux/Issue/Action";

const IssueCard = ({issue, projectId}) => {
  const dispatch = useDispatch();
  // const history = useHistory();

  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(deleteIssueById(issue.id));
  };
  return (
    <Card className="rounded-md py-1 pb-2">
      <CardHeader className="pb-1 py-0">
        <div className="flex justify-between items-center">
          <CardTitle
            onClick={() => navigate(`/api/issues/${issue.id}`, {replace: true})}
            className="cursor-pointer"
          >
            {issue.title}
          </CardTitle>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button className="rounded-full" size="icon" variant="ghost">
                <DotsVerticalIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>In Progress</DropdownMenuItem>
              <DropdownMenuItem>Done</DropdownMenuItem>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem onClick={handleDelete}>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="py-0">
        <div className="flex items-center justify-between">
          <p>{issue.description}</p>
          <DropdownMenu className="w-[30rem] border border-red-400">
            <DropdownMenuTrigger>
              <Button
                size="icon"
                className="bg-gray-900 hover:text-black text-white rounded-full"
              >
                <Avatar>
                  <AvatarFallback>
                    <PersonIcon />
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <UserList />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );
};

export default IssueCard;
