import React, { useState } from 'react';
import { Card, Typography } from "@material-tailwind/react";
import { doc, deleteDoc, getFirestore } from "firebase/firestore";
import { app } from '../config/firebase';
import Inputform from './Inputform';

const TABLE_HEAD = ["Title", "Body", "Description", "Discount", "Edit"];

const truncateText = (text, wordLimit) => {
  const words = text.split(' ');
  return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
};




const Table = ({ eventsData, setEventData }) => {
  const [edit, setEdit] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const firestore = getFirestore(app);

  const handleDelete = async (id) => {
    try {
      const ref = doc(firestore, "product", id);
      await deleteDoc(ref);
      setEventData(eventsData.filter((data) => data.id !== id));
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  const handleEdit = (event) => {
    setSelectedEvent(event);
    setEdit(true);
  };

  return (
    <Card className="h-full w-full overflow-scroll">
      {edit && selectedEvent && (
        <Inputform
          setProducts={setEdit}
          initialData={selectedEvent}
          includeFrequent={selectedEvent.data.frequent}
          onClose={() => setEdit(false)}
          onUpdate={(updatedEvent) => {
            const updatedEventsData = eventsData.map(event =>
              event.id === updatedEvent.id ? updatedEvent : event
            );
            setEventData(updatedEventsData);
            setEdit(false);
          }}
        />
      )}

      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {eventsData.map((data, index) => (
            <tr key={index} className="even:bg-blue-gray-50/50">
              <td className="p-4 capitalize">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {data.data.title || 'N/A'}
                </Typography>
              </td>
              <td className="p-4 capitalize">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {truncateText(data.data.body || 'N/A', 3)}
                </Typography>
              </td>
              <td className="p-4 capitalize">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {truncateText(data.data.description || 'N/A', 3)}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {data.data.percentageOff || '0'}%
                </Typography>
              </td>
              <td className="p-4">
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                  <div className='flex gap-1'>
                    <button
                      className='hover:scale-110 active:scale-125'
                      onClick={() => handleEdit(data)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                      </svg>
                    </button>
                    <button
                      className='hover:scale-110 active:scale-125'
                      onClick={() => handleDelete(data.id)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </button>
                  </div>
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default Table;
