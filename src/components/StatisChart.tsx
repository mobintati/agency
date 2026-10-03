import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";


const StatisChart = () => {
    const data = [
  { month: "مهر", value: 5 },
  { month: "آبان", value: 10 },
  { month: "آذر", value: 8 },
  { month: "دی", value: 7 },
  { month: "بهمن", value: 9 },
  { month: "اسفند", value: 15 },
  { month: "فروردین", value: 16 },
  { month: "اردیبهشت", value: 20 },
  { month: "خرداد", value: 18 },
  { month: "تیر", value: 14 },
  { month: "مرداد", value: 12 },
  { month: "شهریور", value: 17 },
];
  return (
    <div className=''>
         <Card className="rounded-2xl max-md:text-xs bg-transparent shadow-none border-none   ">
     

      <CardContent className="h-[250px] w-123 max-md:w-80 ">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month"  interval={0} tick={{ fontSize: 6 }} />
            <YAxis />
            <Tooltip />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#A855F7"
              strokeWidth={2}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
      
    </div>
  )
}

export default StatisChart
