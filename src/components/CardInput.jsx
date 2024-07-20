import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const CardInput = ({ onImageSelect }) => {
  const [image, setImage] = useState(null);

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      onImageSelect(file);
    }
  }, [onImageSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: false,
  });

  const removeImage = () => {
    setImage(null);
    onImageSelect(null);
  };

  return (
    <div
      {...getRootProps()}
      className="mx-auto w-40 px-4 py-2 lg:px-8 lg:py-4  h-40 border  border-gray-300 shadow-sm rounded-3xl mt-10 bg-gray-200"
    >
      <input {...getInputProps()} />
      <div className='w-full flex justify-center items-center h-32'>
        {image ? (
          <div className='relative w-full h-full'>
            <img src={image} alt="Uploaded Preview" className='w-full h-32 object-cover rounded-xl' />
            <button
              onClick={removeImage}
              className='absolute top-0 right-0 mt-2 mr-2 text-red-600'
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div className='flex flex-col items-center'>
            {isDragActive ? (
              <p className='text-gray-500 text-center text-sm tracking-wide'>Drop the files here ...</p>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 mb-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                <p className='text-gray-500 text-center text-sm  tracking-wide'>
                  You can add image or drag and drop it here
                </p>
              </>
            )}
          </div>
        )}
      </div>
      {image && (
        <div className='mt-4 flex justify-center'>
          <button
            onClick={removeImage}
          // className='px-4 py-2 bg-red-500 text-white rounded-xl'
          >

          </button>
        </div>
      )}
    </div>
  );
};

export default CardInput;
