import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";

export function DropdownButton({ name, item1, item2, handleEdit, handleDelete, item }) {
  return (
    <Menu>
      <MenuHandler>
        <Button variant="outlined" className="py-2">{name}</Button>
      </MenuHandler>
      <MenuList>
        <MenuItem onClick={() => handleEdit(item)}>
          {item1}
        </MenuItem>
        <MenuItem onClick={() => handleDelete(item.id)}>
          {item2}
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
