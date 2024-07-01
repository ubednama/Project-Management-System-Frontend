import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button'
import { MagnifyingGlassIcon, MixerHorizontalIcon } from '@radix-ui/react-icons'
import { ScrollArea } from "@/components/ui/scroll-area";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ProjectCard from '../Project/ProjectCard';
import { category, tags } from '../../utils/Constants';
import { capitalizeFirstLetter } from '../../utils/Capitalize';
import { useState } from "react";

const ProjectList = () => {

    const [keyword, setKeyword] = useState("");

    const handleFilterChange = (section, val) => {
        console.log("value: ", val, section)
    }

    const handleSearchChange = (e) => {
        setKeyword(e.target.value);
    }
  return (
    <div className="relative px-5 lg:px-0 lg:flex gap-5 justify-center py-5">
      <section className="filterSection">
        <Card className="p-5 sticky top-10">
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
                    onValueChange={(value) =>
                      handleFilterChange("category", value)
                    }
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
                    onValueChange={(value) => handleFilterChange("tag", value)}
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
      <section className="projectListSection w-full lg:w-[48rem]">
        <div className="flex gap-2 items-center pb-5 justify-between">
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
          <div className="space-y-5 min-h-[74vh]">
            {keyword
              ? [0, 1, 2].map((item, index) => (
                  <ProjectCard key={index} project={item} />
                ))
              : [0, 1, 2, 3].map((item, index) => (
                  <ProjectCard key={index} project={item} />
                ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectList
