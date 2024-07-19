import React from 'react'
import ReachGraph from '../components/ReachGraph'
import BarChart from '../components/BarChart'

const Dashboard = () => {
  return (
    <div className='flex-col justify-center items-center  gap-3 flex  md:flex md:flex-row md:justify-center md:items-start w-full h-full mt-10 '>

      <ReachGraph />

      <BarChart />


    </div>
  )
}

export default Dashboard