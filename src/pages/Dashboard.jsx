import React from 'react'
import ReachGraph from '../components/ReachGraph'
import BarChart from '../components/BarChart'

const Dashboard = () => {
  return (
    <div className=' flex justify-center items-center w-full h-full g'>
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