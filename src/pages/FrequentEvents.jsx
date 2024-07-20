import React, { useState, useEffect } from 'react'
import Inputform from '../components/Inputform'
import Table from '../components/Table'
import { Button } from "@material-tailwind/react"
import { collection, query, getDocs, where, getFirestore } from "firebase/firestore"
import { app } from "../config/firebase"

const firestore = getFirestore(app);


const FrequentEvents = () => {
  const [products, setProducts] = useState(false)
  const [eventsData, setEventsData] = useState([]);
  const fetchEvents = async () => {
    // fetch frequent events logic here
    const coll = collection(firestore, "product");
    const eventsQuery = query(coll, where('data.frequent', "==", true));
    const eventsSnapshot = await getDocs(eventsQuery);
    const eventsList = eventsSnapshot.docs.map(doc => doc.data());
    setEventsData(eventsList)
    console.log("frequent", eventsList);
  }
  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className=' w-full'>
      <div className=' relative'>
        {products && (
          <div className="absolute top-0 left-0 w-full bg-white p-4 z-10 shadow-lg">
            <Inputform setProducts={setProducts} includeFrequent={true} />
          </div>
        )}
        <div className='w-full h-10 mt-10 px-4 flex justify-between items-center mb-4'>
          <div>
            <span className=' w-40   p-2 rounded-md text-gray-700  md:tracking-wide text-xl underline underline-offset-8 '>Here you can add your frequent products</span>
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

        <Table eventsData={eventsData} />
      </div>
    </div>
  )
}

export default FrequentEvents