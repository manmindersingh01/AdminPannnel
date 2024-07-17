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
      <Card shadow={false} className=' '>
        <Typography variant="h4" color="blue-gray">
          Page text
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          here you can add and modify all the different sections of a page
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              heading-1
            </Typography>
            <Input
              size="lg"
              placeholder="xyz"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              heading-2
            </Typography>
            <Input
              size="lg"
              placeholder="xyz"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              heading-3
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="xyz"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              heading-4
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="xyz"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              heading-5
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="xyz"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>


          <Button className="mt-6" fullWidth>
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="#" className="font-medium text-gray-900">
              Sign In
            </a>
          </Typography>
        </form>
      </Card>
    </div>
  )
}

export default PageText