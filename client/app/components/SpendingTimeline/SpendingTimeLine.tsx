"use client";

import React from 'react';
import { TrendingDown } from 'lucide-react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Brush } from 'recharts';

interface SpendingData {
  month: string;
  dateTime: string;
  essential: number;
  discretionary: number;
  waste: number;
  isPast: boolean;
  total: number;
}

interface SpendingTimelineProps {
  chartData: SpendingData[];
  yAxisMin: number;
  yAxisMax: number;
  wasteReductionAmount: number;
  CustomTooltip: React.ComponentType<any>;
}

export default function SpendingTimeline({
  chartData,
  yAxisMin,
  yAxisMax,
  wasteReductionAmount,
  CustomTooltip
}: SpendingTimelineProps) {
  return (
    <div className="bg-white rounded-xl p-6 mb-6 border border-gray-100">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <TrendingDown size={20} className="text-gray-900" />
          <h2 className="text-lg font-bold text-gray-900">Spending Timeline</h2>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-600">Waste reduced by</span>
          <span className="font-bold text-green-600">${wasteReductionAmount}</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="month"
            tick={{ fill: '#374151', fontSize: 12 }}
            axisLine={{ stroke: '#e5e7eb' }}
            tickLine={{ stroke: '#e5e7eb' }}
          />
          <YAxis 
            domain={[yAxisMin, yAxisMax]}
            tick={{ fill: '#374151' }}
            axisLine={{ stroke: '#e5e7eb' }}
            tickLine={{ stroke: '#e5e7eb' }}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Brush 
            dataKey="month" 
            height={30} 
            stroke="#9ca3af"
            fill="#f3f4f6"
          />
          
          {/* Stacked bars for spending categories */}
          <Bar dataKey="essential" stackId="spending" fill="#22c55e" radius={[0, 0, 0, 0]} />
          <Bar dataKey="discretionary" stackId="spending" fill="#60a5fa" radius={[0, 0, 0, 0]} />
          <Bar dataKey="waste" stackId="spending" fill="#f87171" radius={[4, 4, 0, 0]} />
          
          {/* Trend line for total spending */}
          <Line 
            type="monotone" 
            dataKey="total" 
            stroke="#6366f1" 
            strokeWidth={2}
            dot={false}
          />
        </ComposedChart>
      </ResponsiveContainer>

      <div className="flex items-center justify-center gap-6 mt-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-gray-600">Essential</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-400" />
          <span className="text-gray-600">Discretionary</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <span className="text-gray-600">Waste</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-indigo-500" />
          <span className="text-gray-600">Total Trend</span>
        </div>
      </div>
    </div>
  );
}
