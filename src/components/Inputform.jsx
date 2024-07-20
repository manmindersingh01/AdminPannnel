import React, { useState } from 'react';
import {
  Input, Button, Checkbox, Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import CardInput from './CardInput';
import { app } from "../config/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const Inputform = ({ setProducts, includeFrequent }) => {
  const [open, setOpen] = useState(true);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [description, setDescription] = useState('');
  const [frequent, setFrequent] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const firestore = getFirestore(app);
  const storage = getStorage(app);

  const handleClose = () => {
    setOpen(false);
    setProducts(false);
  };

  const submitData = async (e) => {
    e.preventDefault();
    let imageUrl = '';
    if (imageFile) {
      const imageRef = ref(storage, `images/${imageFile.name}`);
      await uploadBytes(imageRef, imageFile);
      imageUrl = await getDownloadURL(imageRef);
    }

    const productData = {
      title,
      body,
      description,
      imageUrl,
      frequent: includeFrequent
    };
    // if (includeFrequent) {
    //   productData.frequent = frequent;
    // }

    await addDoc(collection(firestore, "product"), {
      data: productData,
    });
    handleClose();
    setOpen(false)
  };

  return (
    <>
      <Dialog open={open} handler={handleClose} animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
        className='  max-w-screen-xl p-2' >
        {open && (
          <div className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 h-auto border border-gray-300 shadow-sm rounded-xl mt-10">
            <div>
              <button onClick={handleClose}>
                <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
                </svg>
              </button>
            </div>
            <form onSubmit={submitData} className='flex-col md:flex md:flex-row justify-center md:items-center md:justify-center items-center '>
              <div className='pb-28'>
                <CardInput onImageSelect={setImageFile} />
              </div>

              <div className=' md:flex md:flex-col gap-2 m-2 flex  flex-col items-center   '>
                <div className="w-72 ">
                  <Input label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="w-72 ">
                  <Input label="Body" value={body} onChange={(e) => setBody(e.target.value)} />
                </div>
                <div className="w-72 ">
                  <Input label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                {/* {includeFrequent && (
                  <div className="w-72 ">
                    <Checkbox label="Frequent Event" checked={frequent} onChange={(e) => setFrequent(e.target.checked)} />
                  </div>
                )} */}
                <div className='flex items-center justify-between m-4'>
                  <Button type="submit" className='' variant="filled">Add Event</Button>
                </div>
              </div>
            </form>
          </div>
        )}
      </Dialog>
    </>
  );
};

export default Inputform;
