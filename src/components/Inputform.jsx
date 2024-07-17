import React from 'react'
// import CardInput from './CardInput'
import { Input } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Checkbox } from "@material-tailwind/react";
import CardInput from './CardInput';
const Inputform = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 h-auto border border-gray-300  shadow-sm rounded-xl mt-10 " >
      <form action="" className=' flex-col md:flex md:flex-row justify-center md:items-center md:justify-center items-center '>
        <CardInput />
        <div>
          <div className="w-72 m-4">
            <Input label="Title" />
          </div>
          <div className="w-72 m-4">
            <Input label="body" />
          </div>
          <div className="w-72 m-4">
            <Input label="description" />
          </div>
          <div className=' flex items-center justify-between m-4'>
            <div className=' flex justify-center items-center'>
              <span>frequent event</span>
              <Checkbox defaultChecked />
            </div>
            <Button className='' variant="filled">add event</Button>
          </div>
          {/* <div className=' flex justify-end'>
            <Button className='' variant="filled">add event</Button>
          </div> */}

        </div>
      </form>



    </div>
  )
}

export default Inputform