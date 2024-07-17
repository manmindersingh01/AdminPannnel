import React from 'react'
import ReachGraph from '../components/ReachGraph'
import BarChart from '../components/BarChart'

const Dashboard = () => {
  return (
    <div className='flex-col justify-center items-center  gap-3 flex  md:flex md:justify-center md:items-center w-full h-full'>
      <div>
        <ReachGraph />

      </div>

      <div>
        <BarChart />
      </div>

    </div>
  )
}

export default Dashboard