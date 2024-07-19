import Inputform from '../components/Inputform'
import Table from '../components/Table'
import { Button } from "@material-tailwind/react";
import React, { useState } from 'react'

const Events = () => {
  const [products, setProducts] = useState(false)

  return (
    <div className="relative">
      {products && (
        <div className="absolute top-0 left-0 w-full bg-white p-4 z-10 shadow-lg">
          <Inputform setProducts={setProducts} />
        </div>
      )}
      <div className='w-full h-10 mt-10 px-4 flex  items-center justify-between mb-4'>
        <div>
          <span className=' w-40 border border-black p-2 rounded-md md:font-bold md:tracking-wide text-sm'>Here you can add your products</span>
        </div>
        <Button
          onClick={() => setProducts(true)}
          variant="outlined"
          className='flex justify-center items-center px-10 gap-2 my-2'
        >
          create product
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </Button>
      </div>
      <Table />
    </div>
  )
}

export default Events
