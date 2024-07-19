import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

export function DropdownButton({ name, item1, item2 }) {
  return (
    <Menu>
      <MenuHandler>
        <Button variant="outlined" className=" py-2">{name}</Button>
      </MenuHandler>
      <MenuList>
        <MenuItem>{item1}</MenuItem>
        <MenuItem>{item2}</MenuItem>

      </MenuList>
    </Menu>
  );
}