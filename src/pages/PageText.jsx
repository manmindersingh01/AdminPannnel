import React from 'react'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const PageText = () => {
  return (
    <div className=' h-full w-full flex items-center justify-center pb-24'>
      <div className='w-full h-full mt-10'>
        <span className='border border-black p-2 rounded-lg text-xl'>Here you can edit text of all you page</span>
        <form >

          <div className=' grid grid-cols-2 m-5 mt-10 gap-4'>
            <Input variant="outlined" label="headings" placeholder="headings" />
            <Input variant="outlined" label="headings" placeholder="headings" />
            <Input variant="outlined" label="headings" placeholder="headings" />
            <Input variant="outlined" label="headings" placeholder="headings" />
            <Input variant="outlined" label="headings" placeholder="headings" />
            <Input variant="outlined" label="headings" placeholder="headings" />
            <Input variant="outlined" label="headings" placeholder="headings" />
            <Input variant="outlined" label="headings" placeholder="headings" />
            <Input variant="outlined" label="headings" placeholder="headings" />
            <Input variant="outlined" label="headings" placeholder="headings" />
            <Input variant="outlined" label="headings" placeholder="headings" />
            <Input variant="outlined" label="headings" placeholder="Outlined" />
          </div>
          <div className='flex justify-end mx-6'>
            <Button variant="gradient">submit</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PageText