"use client"

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface BarChartProps {
  data: any[];
}

export const SimpleBarChart = ({ data }: BarChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" animationDuration={500}/>
      </BarChart>
    </ResponsiveContainer>
  );
};
