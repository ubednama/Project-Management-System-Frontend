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
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  //   CardFooter,
} from "@/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  //   DropdownMenuContent,
  //   DropdownMenuItem,
  //   CardFooter,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DotsVerticalIcon, PersonIcon } from "@radix-ui/react-icons";
import UserList from "./UserList";
import { useNavigate } from "react-router-dom";

const IssueCard = () => {
  const navigate = useNavigate()
  return (
    <Card className="rounded-md py-1 pb-2">
      <CardHeader className="pb-1 py-0">
        <div className="flex justify-between items-center">
          <CardTitle onClick={()=>navigate("/project/3/issue/10")}>Create Navbar</CardTitle>
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
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="py-0">
        <div className="flex items-center justify-between">
          <p>FBP - 1</p>
          <DropdownMenu className="w-[30rem] border border-red-400">
            <DropdownMenuTrigger>
              <Button size="icon" className="bg-gray-900 hover:text-black text-white rounded-full"><Avatar><AvatarFallback><PersonIcon /></AvatarFallback></Avatar></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent><UserList /></DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );
};

export default IssueCard;
