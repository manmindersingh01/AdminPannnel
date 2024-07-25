import Inputform from '../components/Inputform'
import Table from '../components/Table'
import { Button } from "@material-tailwind/react";
import React, { useState, useEffect } from 'react'
import { app } from "../config/firebase"
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { Checkbox } from "@material-tailwind/react";

const Events = () => {
  const firestore = getFirestore(app);
  const [products, setProducts] = useState(false);
  const [eventsData, setEventsData] = useState([]);
  const [showFrequent, setShowFrequent] = useState(false);

  const fetchEvents = async () => {
    const coll = collection(firestore, "product");
    const eventsSnapshot = await getDocs(coll);
    const eventsList = eventsSnapshot.docs.map(doc => (
      {
        ...doc.data(), id: doc.id
      }
    ));
    setEventsData(eventsList);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const toggleFrequent = () => {
    setShowFrequent(!showFrequent);
  };

  const filteredEventsData = eventsData.filter(event => event.data.frequent === showFrequent);

  return (
    <div className="relative">
      {products && (
        <div className="absolute top-0 left-0 w-full bg-white p-4 z-10 shadow-lg">
          <Inputform setProducts={setProducts} includeFrequent={false} />
        </div>
      )}
      <div className='w-full h-10 mt-10 px-4 flex  items-center justify-between mb-1'>
        <div>
          <span className=' w-40 font-bold p-2 rounded-md text-gray-700  md:tracking-wide text-xl '>Products</span>
          {/* <p className=' text-sm text-gray-600'>Here is the list of all the products with their title, body, description</p> */}
        </div>
        <div className="flex gap-4 ">
          <Button
            onClick={() => setProducts(true)}
            variant="outlined"
            className='flex justify-center items-center h-8  gap-2 my-2'
          >
            Create Product
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
          <Button
            onClick={toggleFrequent}
            variant="outlined"
            className='flex justify-center items-center h-8 bg-blue-gray-50 gap-2 my-2'
          >
            {showFrequent ? "Show Non-Frequent" : "Show Frequent"}
          </Button>
        </div>
      </div>
      <Table eventsData={filteredEventsData} />
    </div>
  );
}

export default Events;
