import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";
import { assignIssueToUser } from "@/redux/Issue/Action";
import { useDispatch, useSelector } from "react-redux";

const UserList = ({issuer}) => {
  const {project} = useSelector((store) => store);
  const dispatch = useDispatch();
  const handleAssignIssueToUser = (userId) => {
    dispatch(assignIssueToUser({issueId:issuer.id, userId}));
  }
  return (
    <div className="space-y-2">
      <div className="border-b">
        <p className="py-2 px-3">{issuer.fullName}</p>
      </div>
      {project.projectDetails?.team.map((item) => (
        <div
          key={item}
          className="py-1 group hover:bg-slate-800 cursor-pointer flex items-center space-x-4 rounded-md px-4"
        >
          <Avatar size="icon">
            <AvatarFallback>{item.fullName[0]}</AvatarFallback>
          </Avatar>
          <div className="">
            <p className="text-sm leading-none">{item.fullName}</p>
            <p className="text-sm text-muted-foreground">{item.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
