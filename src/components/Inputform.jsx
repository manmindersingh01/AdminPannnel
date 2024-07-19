import React, { useState } from 'react'
import { Input, Textarea, Button, Checkbox } from "@material-tailwind/react";
import CardInput from './CardInput';

const Inputform = ({ setProducts }) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    setProducts(false);
  };

  return (
    <>
      {open && (
        <div className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 h-auto border border-gray-300 shadow-sm rounded-xl mt-10">
          <div>
            <button onClick={handleClose}>
              <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
              </svg>
            </button>
          </div>
          <form action="" className='flex-col md:flex md:flex-row justify-center md:items-center md:justify-center items-center'>
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
              <div className='flex items-center justify-between m-4'>
                {/* <div className='flex justify-center items-center'>
                  <span>frequent event</span>
                  <Checkbox defaultChecked />
                </div> */}
                <Button className='' variant="filled">add event</Button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default Inputform
