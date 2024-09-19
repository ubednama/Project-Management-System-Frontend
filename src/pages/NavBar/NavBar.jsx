import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../../components/ui/button";
import CreateProjectForm from "../Project/CreateProjectForm";
import { PersonIcon, PlusIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/Auth/Action";

const NavBar = () => {
  const auth = useSelector((store) => store.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout())
  }
  return (
    <div className="border-b py-4 px-2 sm:px-5 flex items-center justify-between gap-2">
      <div className="flex items-center gap-1 sm:gap-3">
        <p onClick={()=>navigate('/')} className="cursor-pointer">Project Management System</p>

        <Dialog>
          <DialogTrigger>
            <Button variant="outline" className="hidden sm:block">
              Add Project
            </Button>
            <Button variant="outline" size="icon" className="sm:hidden">
              <PlusIcon />
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogTitle>Add New Project</DialogTitle>
            <CreateProjectForm />
          </DialogContent>
        </Dialog>
        <Button variant="secondary" className='bg-blue-500' onClick={()=>navigate("/upgrade")}>Upgrade</Button>
      </div>

      <div className="flex gap-3 items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="secondary" className="rounded-full" size="icon">
              <PersonIcon className="size-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <p className="hidden sm:block">{auth.user.fullName}</p>
      </div>
    </div>
  );
}

export default NavBar
