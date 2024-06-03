import { Link, NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import { useAuth } from "@/hooks/useAuth";
// import { motion } from "framer-motion";
import Logo from "@/assets/cat-logo.png";
import Avatar from "boring-avatars";
import BookList from "@/assets/booklist.png";
import {
  LogOut,
  Settings,
  User,
  Users,
  BookHeart,
  CircleHelp,
  Moon,
  BookMinus,
  BookCheck,
  BookUser,
  Calendar,
  CalendarMinus2,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const { user } = useAuth({});
  const { handleLogout } = useAuth({});
  return (
    <header className="flex justify-between items-center p-4 border-b border-b-black bg-white/60">
      {user ? (
        <Link to="/home">
          <div className="flex items-center">
            <img src={Logo} className="h-8" alt="" />
            <div className="font-semibold text-2xl">Miawbrary.</div>
          </div>
        </Link>
      ) : (
        <Link to="/">
          <div className="font-semibold text-lg">Miawbrary.</div>
        </Link>
      )}
      <div className="hidden md:block">
        {user ? (
          <ul className="flex gap-4">
            <NavLink
              to="/home"
              title="Home"
              className="uppercase font-semibold tracking-widest text-black/90 relative group"
            >
              <li className="">
                Home
                <div className="nav-line" />
              </li>
            </NavLink>
            <NavLink
              to="/books"
              title="Books"
              className="uppercase font-semibold tracking-widest text-black/90 relative group"
            >
              <li>
                Books
                <div className="nav-line" />
              </li>
            </NavLink>
            <NavLink
              to="/events"
              title="Events"
              className="uppercase font-semibold tracking-widest text-black/90 relative group"
            >
              <li>
                Events
                <div className="nav-line" />
              </li>
            </NavLink>
          </ul>
        ) : (
          <ul className="flex gap-4">
            <NavLink
              to="/about"
              className="uppercase font-semibold tracking-widest text-black/90 relative group"
            >
              <li className="nav-line">About Us</li>
            </NavLink>
            <NavLink
              to="/register"
              className="uppercase font-semibold tracking-widest text-black/90 relative group"
            >
              <li>
                Books
                <div className="nav-line" />
              </li>
            </NavLink>
            <NavLink
              to="/events"
              className="uppercase font-semibold tracking-widest text-black/90 relative group"
            >
              <li>
                Events
                <div className="nav-line" />
              </li>
            </NavLink>
            <NavLink
              to="/faq"
              className="uppercase font-semibold tracking-widest text-black/90 relative group"
            >
              <li>
                FaQ
                <div className="nav-line" />
              </li>
            </NavLink>
          </ul>
        )}
      </div>

      <div className="flex justify-between items-center gap-2">
        <Moon className="w-6 h-6" />
        {user ? (
          <div className="flex items-center gap-2">
            <Link to="#" title="My Reading List">
              <div className="relative  hover:scale-105 hover:transition-all hover:duration-2000">
                <img src={BookList} className="h-8" alt="Reading List" />
                <div className="absolute -top-3 -right-1">
                  <div className="relative">
                    {/* <FaHeart className="text-red-500" /> */}
                    <p className="px-1 h-fit bg-red-500 text-white rounded-xl shadow-md text-sm">
                      1
                    </p>
                  </div>
                </div>
              </div>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  title={`${user.name}`}
                  className="flex items-center hover:scale-105 hover:transition-all hover:duration-2000"
                >
                  <Avatar
                    name={user.name}
                    size={32}
                    variant="bauhaus"
                    colors={[
                      "#92A1C6",
                      "#146A7C",
                      "#F0AB3D",
                      "#C271B4",
                      "#C20D90",
                    ]}
                  />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-slate-100 rounded-xl">
                <Link to="/profile">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <Link to="/profile">
                    <DropdownMenuItem className="cursor-pointer hover:font-semibold">
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                    </DropdownMenuItem>
                  </Link>
                  <Link to="/settings">
                    <DropdownMenuItem className="cursor-pointer hover:font-semibold">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                  </Link>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="cursor-pointer hover:font-semibold">
                      <BookUser className="mr-2 h-4 w-4" />
                      <span>Reading Log</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="bg-slate-100 rounded-xl">
                        <DropdownMenuItem>
                          <BookMinus className="mr-2 h-4 w-4" />
                          <span>Currently Reading (0)</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <BookHeart className="mr-2 h-4 w-4" />
                          <span>Want to Read (0)</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <BookCheck className="mr-2 h-4 w-4" />
                          <span>Already Read (0)</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>My Loan</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <CalendarMinus2 className="mr-2 h-4 w-4" />
                          <span>Loan History</span>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <Link to="/admin">
                    <DropdownMenuItem className="cursor-pointer hover:font-semibold">
                      <Users className="mr-2 h-4 w-4" />
                      <span>Admin</span>
                    </DropdownMenuItem>
                  </Link>
                  <Link to="/events">
                    <DropdownMenuItem className="cursor-pointer hover:font-semibold">
                      <BookUser className="mr-2 h-4 w-4" />
                      <span>Events</span>
                    </DropdownMenuItem>
                  </Link>
                  <Link to="/faq">
                    <DropdownMenuItem className="cursor-pointer hover:font-semibold">
                      <CircleHelp className="mr-2 h-4 w-4" />
                      <span>FaQ</span>
                    </DropdownMenuItem>
                  </Link>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <button onClick={handleLogout}>
                  <DropdownMenuItem className="cursor-pointer hover:font-semibold">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </button>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <Link to="/login">
              <div>Login</div>
            </Link>
            <Link to="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
