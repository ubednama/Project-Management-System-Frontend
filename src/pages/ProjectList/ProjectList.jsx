import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MagnifyingGlassIcon,
  MixerHorizontalIcon,
} from "@radix-ui/react-icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ProjectCard from "../Project/ProjectCard";
import { category, tags } from "../../utils/Constants";
import { capitalizeFirstLetter } from "../../utils/Capitalize";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects, searchProjects } from "@/redux/Project/Action";
import ClipLoader from "react-spinners/ClipLoader"; // Import the loading spinner

const ProjectList = () => {
  const [keyword, setKeyword] = useState("");

  const { project } = useSelector((store) => store);
  const dispatch = useDispatch();

  const handleFilterCategoryChange = (value) => {
    console.log("category: ", value);
    if (value === "all") {
      dispatch(fetchProjects({ category: [] }));
      return;
    }
    dispatch(fetchProjects({ category: value }));
  };

  const handleFilterTagChange = (value) => {
    console.log("tag:", value);
    if (value === "all") {
      dispatch(fetchProjects({ tags: [] }));
      return;
    }
    dispatch(fetchProjects({ tags: value }));
  };

  console.log(project);

  const handleSearchChange = (e) => {
    setKeyword(e.target.value);
    dispatch(searchProjects(e.target.value));
  };

  return (
    <div className="relative px-5 lg:px-0 lg:flex gap-2 xl:gap-5 justify-center pt-5">
      <section className="filterSection h-fit mb-4 lg:mb-0">
        <Card className="p-5 !pb-0 sticky top-10">
          <div className="flex justify-between lg:w-[20rem]">
            <p className="text-xl -tracking-wider">Filters</p>
            <Button variant="ghost" size="icon">
              <MixerHorizontalIcon />
            </Button>
          </div>

          <CardContent className="mt-4">
            <ScrollArea className="h-[70vh] text-left">
              <div>
                <h1 className="pb-1 text-gray-400 border-b">Category</h1>
                <div className="pt-5">
                  <RadioGroup
                    className="space-y-1 pt-2"
                    defaultValue="all"
                    onValueChange={(value) => handleFilterCategoryChange(value)}
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="all" id="all" />
                      <Label htmlFor="all" className="">
                        All
                      </Label>
                    </div>
                    {category.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <RadioGroupItem value={item} id={item} />
                        <Label htmlFor={item} className="">
                          {capitalizeFirstLetter(item)}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>

              <div className="pt-9">
                <h1 className="pb-1 text-gray-400 border-b">Tag</h1>
                <div className="pt-5">
                  <RadioGroup
                    className="space-y-1 pt-2"
                    defaultValue="all"
                    onValueChange={(value) => handleFilterTagChange(value)}
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="all" id="all" />
                      <Label htmlFor="all" className="">
                        All
                      </Label>
                    </div>
                    {tags.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <RadioGroupItem value={item} id={item} />
                        <Label htmlFor={item} className="">
                          {item}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </section>
      <section className="projectListSection w-full lg:w-[48rem] min-h-[80vh] max-h-[90vh]">
        <div className="flex gap-2 items-center pb-2 lg:pb-4 xl:pb-5 justify-between">
          <div className="relative p-0 w-full">
            <Input
              onChange={handleSearchChange}
              placeholder="Search Project"
              className="40% rounded-lg px-9"
            />
            <MagnifyingGlassIcon className="absolute top-3 left-4" />
          </div>
        </div>
        <div>
          <ScrollArea className="max-h-[80vh] overflow-y-auto border rounded-xl p-2">
            {project.loading ? (
              <div className="w-full h-full flex justify-center items-center">
                <ClipLoader color="white" size={40} />
              </div>
            ) : (
              <div className="space-y-5">
                {keyword
                  ? project.searchProjects?.map((item) => (
                      <ProjectCard key={item.id} project={item} />
                    ))
                  : project.projects?.map((item) => (
                      <ProjectCard key={item.id} project={item} />
                    ))}
              </div>
            )}
          </ScrollArea>
        </div>
      </section>
    </div>
  );
};

export default ProjectList;
