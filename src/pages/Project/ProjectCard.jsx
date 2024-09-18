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
import { useDispatch } from "react-redux";
import { deleteProjectById, fetchProjectById } from "@/redux/Project/Action";
import { capitalizeFirstLetter } from "@/utils/Capitalize";
import { useEffect } from "react";

const ProjectCard = ({project}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProjectById(project.id));
    console.log("delete project");
  };

  return (
    <div className="cursor-pointer">
      <Card className="p-5 w-full lg:max-w-3xl ">
        <div className="space-y-5 px-2">
          <div className="space-y-2">
            <div className="flex justify-between">
              <div className="flex items-center">
                <h1
                  className="cursor-pointer font-bold"
                  onClick={() => navigate("/project/" + project.id)}
                >
                  {project.name}
                </h1>
                <DotFilledIcon />
                <p className="text-sm text-gray-400">
                  {capitalizeFirstLetter(project.category)}
                </p>
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
                    <DropdownMenuItem onClick={handleDelete}>
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <p className="text-gray-500 text-sm text-left">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;
