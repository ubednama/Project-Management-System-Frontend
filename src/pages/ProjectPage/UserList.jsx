import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";

const UserList = () => {
  return (
    <div className="space-y-2">
      <div className="border-b">
        <p className="py-2 px-3">Ubed</p>
      </div>
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="py-1 group hover:bg-slate-800 cursor-pointer flex items-center space-x-4 rounded-md px-4"
        >
          <Avatar size="icon">
            <AvatarFallback>Z</AvatarFallback>
          </Avatar>
          <div className="">
            <p className="text-sm leading-none">Ubed</p>
            <p className="text-sm text-muted-foreground">@ubednama</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
