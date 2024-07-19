import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

export function NavbarDefault() {
  const navigate = useNavigate();
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          Admin Panel
        </Typography>
        <div className="flex items-center gap-x-1">
          <Button variant="text" size="sm" className="hidden lg:inline-block">
            <span>Log In</span>
          </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <div className="">
        {openNav ? <div>

          <MobileNav open={openNav}>
            <div className="container mx-auto absolute z-20   ">
              <div className="flex items-center gap-x-1">
                <div className="bg-white bg-opacity-100">
                  <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-white">
                    <div className="mb-2 p-4">
                      <Typography variant="h5" color="blue-gray">
                        Sidebar
                      </Typography>
                    </div>
                    <List>
                      <ListItem>
                        <ListItemPrefix>
                          <PresentationChartBarIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <button onClick={() => navigate('/dash')}>Dashboard</button>
                      </ListItem>
                      <ListItem>
                        <ListItemPrefix>
                          <ShoppingBagIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <button onClick={() => navigate('/frequentevents')}>Frequent events</button>
                      </ListItem>
                      <ListItem>
                        <ListItemPrefix>
                          <InboxIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <button onClick={() => navigate('/events')}>Events</button>
                        <ListItemSuffix>
                          <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                        </ListItemSuffix>
                      </ListItem>
                      <ListItem>
                        <ListItemPrefix>
                          <UserCircleIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <button onClick={() => navigate('/text')}>Headings</button>
                      </ListItem>
                      <ListItem>
                        <ListItemPrefix>
                          <UserCircleIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Profile
                      </ListItem>
                      <ListItem>
                        <ListItemPrefix>
                          <Cog6ToothIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Settings
                      </ListItem>
                      <ListItem>
                        <ListItemPrefix>
                          <PowerIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Log Out
                      </ListItem>
                    </List>
                  </Card>
                </div>
              </div>
            </div>
          </MobileNav>
        </div> : <div></div>}

      </div>

    </Navbar>
  );
}
