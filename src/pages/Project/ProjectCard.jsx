import { Card } from "@/components/ui/card";
import { DotFilledIcon, DotsVerticalIcon } from "@radix-ui/react-icons";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

const ProjectCard = () => {
    const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/project/3")} className="cursor-pointer">
      <Card className="p-5 w-full lg:max-w-3xl">
        <div className="space-y-5 px-2">
          <div className="space-y-2">
            <div className="flex justify-between">
              <div className="flex items-center">
                <h1 className="cursor-pointer font-bold">
                  Create E-commerce Website
                </h1>
                <DotFilledIcon />
                <p className="text-sm text-gray-400">Full-Stack</p>
              </div>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
                    >
                      <DotsVerticalIcon />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Update</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <p className="text-gray-500 text-sm text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
              deserunt sequi blanditiis cupiditate provident repudiandae esse,
              voluptatum ducimus exercitationem earum.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            {[1, 1, 1, 1].map((item) => (
              <Badge key={item} variant="outline">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;
