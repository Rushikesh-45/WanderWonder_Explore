import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function BarChart01() {


    const data=[
        { name: 'Tourists', value: 10000},
        { name: 'Travel Agency', value:5000},
        {name: 'visitors', value:20000},
        { name: 'Bookings', value:10000},
    ]
  return (
    <>
            {/* <ResponsiveContainer width="80%" height="100%"> */}
            <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      {/* </ResponsiveContainer> */}
    </>
  )
}

export default BarChart01
