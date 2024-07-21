import React from 'react';
import {
  Card,
  Typography,
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
import { NavbarDefault } from './NavbarDefault';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const Layout = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  if (!isAuthenticated) {
    // Redirect or show a message if not authenticated
    return <p>You need to be logged in to view this content.</p>;
  }

  return (
    <div>
      <div className="relative mx-auto max-w-screen-xl h-auto md:grid md:grid-cols-4 flex flex-col">
        <div className="col-span-4 top-0 md:z-30 z-50 ">
          <NavbarDefault />
        </div>
        <div className="col-span-1 py-2 lg:px-2 lg:py-4 hidden lg:block row-span-3 md:z-40 ">
          <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-white">
            <div className="mb-2 p-4">
              <Typography variant="h5" color="blue-gray">
                Sidebar
              </Typography>
            </div>
            <List>
              <button onClick={() => navigate('/dashboard')}>
                <ListItem>
                  <ListItemPrefix>
                    <PresentationChartBarIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Dashboard
                </ListItem>
              </button>
              <button onClick={() => navigate('/frequentevents')}>
                <ListItem>
                  <ListItemPrefix>
                    <ShoppingBagIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Frequent Products
                </ListItem>
              </button>
              <button onClick={() => navigate('/events')}>
                <ListItem>
                  <ListItemPrefix>
                    <InboxIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Products
                  <ListItemSuffix>
                    <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                  </ListItemSuffix>
                </ListItem>
              </button>
              <button onClick={() => navigate('/pagetext')}>
                <ListItem>
                  <ListItemPrefix>
                    <UserCircleIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Headings
                </ListItem>
              </button>
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
              <button onClick={handleSignOut}>
                <ListItem>
                  <ListItemPrefix>
                    <PowerIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  Log Out
                </ListItem>
              </button>
            </List>
          </Card>
        </div>
        <div className="col-span-3 row-span-3 md:z-50 z-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
