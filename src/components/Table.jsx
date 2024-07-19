import React from 'react';
import { Card, Typography } from "@material-tailwind/react";
import { DropdownButton } from './DropdownButton';
const TABLE_HEAD = ["Title", "Body", "Description", "Edit"];
const TABLE_ROWS = [
  { title: "Title 1", body: "Body 1", description: "Description 1" },
  { title: "Title 2", body: "Body 2", description: "Description 2" },
  { title: "Title 3", body: "Body 3", description: "Description 3" },
  { title: "Title 4", body: "Body 4", description: "Description 4" },
  { title: "Title 5", body: "Body 5", description: "Description 5" },
];

const Table = () => {
  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ title, body, description }, index) => (
            <tr key={index} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {title}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {body}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {description}
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                  {<DropdownButton name="edit" item1="modify" item2="delete" />}
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default Table;
