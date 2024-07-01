import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  DialogClose,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "../../components/ui/button";
import { category, tags } from "../../utils/Constants";
import { capitalizeFirstLetter } from "../../utils/Capitalize";
import { Cross1Icon } from "@radix-ui/react-icons";

const CreateProjectForm = () => {
    const handleTagsChange=(newVal) => {
        const currentTags =form.getValues("tags");
        const updatedTags = currentTags.includes(newVal)?currentTags.filter(tag=>tag!=newVal):[...currentTags, newVal];
        form.setValue("tags", updatedTags);
    }
    const onSubmit = (data) => {
        console.log("hey", data)
    }
  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      category: "",
      tags:[]
    },
  });
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 mt-1">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border w-full border-gray-700 py-5 px-5"
                    placeholder="Enter Project Name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border w-full border-gray-700 py-5 px-5"
                    placeholder="Enter Project Description"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    defaultValue="fullstack"
                    value={field.value}
                    onValueChange={(value) => {
                      field.onChange(value);
                    }}
                    type="text"
                    className="border w-full border-gray-700 py-5 px-5"
                    placeholder="Enter Project Category"
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {category.map((item) => (
                        <SelectItem key={item} value={item}>
                          {capitalizeFirstLetter(item)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    onValueChange={(value) => {
                      handleTagsChange(value);
                    }}
                    type="text"
                    className="border w-full border-gray-700 py-5 px-5"
                    placeholder="Enter Project Category"
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Tags" />
                    </SelectTrigger>
                    <SelectContent>
                      {tags.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <div className="flex gap-1 flex-wrap">
                    {field.value.map((item) => <div key={item} onClick={()=>handleTagsChange(item)} className="cursor-pointer flex rounded-full items-center border gap-2 px-2 py-1">
                        <span className="text-xs">{item}</span>
                        <Cross1Icon className="size-2" />
                    </div>)}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogClose>
            {false ? (
              <div>
                <p>
                  You can add only 3 Projects with free plan, Please upgrade to
                  add more projects
                </p>
              </div>
            ) : (
              <Button type="submit" className="w-full mt-1">
                Add Project
              </Button>
            )}
          </DialogClose>
        </form>
      </Form>
    </div>
  );
};

export default CreateProjectForm;
