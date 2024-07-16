import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const CardInput = () => {
  const onDrop = useCallback(acceptedFiles => {
    // Handle file upload
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className="mx-auto w-72 px-4 py-2 lg:px-8 lg:py-4 h-72 border border-gray-300 shadow-sm rounded-3xl mt-10 bg-gray-200"
    >
      <input {...getInputProps()} />
      <div className='w-full flex justify-center items-center h-32'>
        {isDragActive ? (
          <p className='text-gray-500 text-center font-thin tracking-wide'>Drop the files here ...</p>
        ) : (
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
              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
            />
          </svg>
        )}
      </div>
      <div>
        <p className='text-gray-500 text-center font-thin tracking-wide'>
          You can add image or drag and drop it here
        </p>
      </div>
    </div>
  );
};

export default CardInput;
