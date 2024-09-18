import { useForm } from 'react-hook-form'
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
// import "react-datepicker/dist/react-datepicker.css";
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import { DialogClose } from "@/components/ui/dialog";
import { useDispatch } from 'react-redux';
import { createIssue } from '@/redux/Issue/Action';
import { useParams } from 'react-router-dom';
import { priority } from '@/utils/Constants';

// "assignee": null
const CreateIssueForm = () => {

  const { id } = useParams();
  const dispatch = useDispatch();

  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      dueDate: "",
      priority: "",
    }
  })

  const onSubmit = (data) => {
    dispatch(
      createIssue({
        ...data, 
        projectId: id,
        status: "pending",
      })
    );
    console.log("create issue", data)
  }
  return (
    <div>
      <Form {...form}>
        <form
          action=""
          className="space-y-2"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type="text"
                    className="border w-full border-gray-700 py-5 px-5"
                    placeholder="Issue"
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
                    placeholder="description"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex space-x-6 items-center">
            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      defaultValue="Low"
                      value={field.value}
                      onValueChange={(value) => {
                        field.onChange(value);
                      }}
                      type="text"
                      className="border w-full border-gray-700 py-5 px-5"
                      placeholder="Enter Project Priority"
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Priority" />
                      </SelectTrigger>
                      <SelectContent>
                        {priority.map((item) => (
                          <SelectItem key={item} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-1">
              <div className="text-sm">Due Date:</div>
              <FormField
                control={form.control}
                name="dueDate"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        type="date"
                        className="border w-full border-gray-700 px-5"
                        placeholder="Due Date"
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <DialogClose>
            <Button type="submit" className="mt-2 w-full">
              Create Issue
            </Button>
          </DialogClose>
        </form>
      </Form>
    </div>
  );
}

export default CreateIssueForm
