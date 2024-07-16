import Inputform from '../components/Inputform'
import Table from '../components/Table'

import React from 'react'

const Events = () => {
  return (
    <div>
      <span className=' border-2 border-gray-300 p-2 rounded-md'>Here you can add all  of your events</span>
      <div>
        <Inputform />
        <Table />
      </div>
    </div>
  )
}

export default Events