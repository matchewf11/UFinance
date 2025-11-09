"use client";

import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Line } from 'recharts';
import { startOfYear } from 'date-fns';

interface SpendingData {
  month: string;
  essential: number;
  discretionary: number;
  waste: number;
  total: number;
  dateTime: string;
  isPast: boolean;
}

interface SpendingTimelineProps {
  chartData: SpendingData[];
  yAxisMin: number;
  yAxisMax: number;
  wasteReductionAmount: number;
  CustomTooltip: React.FC<any>;
}

export default function SpendingTimeline({
  chartData,
  yAxisMin,
  yAxisMax,
  wasteReductionAmount,
  CustomTooltip
}: SpendingTimelineProps) {
  const [activeRange, setActiveRange] = useState<'1W' | '1M' | '3M' | 'YTD' | '1Y'>('1M');
  const [filteredData, setFilteredData] = useState<SpendingData[]>(chartData);

  useEffect(() => {
    setFilteredData(getFilteredChartData(activeRange));
  }, [activeRange, chartData]);

  const getFilteredChartData = (range: typeof activeRange) => {
    const now = new Date();

    switch(range) {
      case '1W':
        return chartData.slice(-7);
      case '1M':
        return chartData.slice(-30);
      case '3M':
        return aggregateByWeek(chartData.slice(-90));
      case 'YTD':
        return chartData.filter(d => new Date(d.dateTime) >= startOfYear(now));
      case '1Y':
      default:
        return chartData;
    }
  };

  const aggregateByWeek = (data: SpendingData[]) => {
    const result: SpendingData[] = [];
    for(let i=0; i<data.length; i+=7){
      const week = data.slice(i, i+7);
      result.push({
        month: `Week ${i/7 + 1}`,
        essential: week.reduce((a,b)=>a+b.essential,0),
        discretionary: week.reduce((a,b)=>a+b.discretionary,0),
        waste: week.reduce((a,b)=>a+b.waste,0),
        total: week.reduce((a,b)=>a+b.total,0),
        dateTime: week[0].dateTime,
        isPast: week[0].isPast
      });
    }
    return result;
  };

  return (
    <div className="bg-white rounded-xl p-6 mb-6 border border-gray-100">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-1">Smart Spending Timeline</h2>
          <p className="text-sm text-gray-600">12-month journey to financial wellness</p>
        </div>
        <div className="flex gap-2">
          {['1W','1M','3M','YTD','1Y'].map(range => (
            <button
              key={range}
              onClick={() => setActiveRange(range as typeof activeRange)}
              className={`px-3 py-1 rounded text-sm font-medium transition ${
                activeRange === range ? 'bg-gray-900 text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart data={filteredData}>
            <XAxis dataKey="month" tick={{ fill: '#374151', fontSize: 12 }} axisLine={{ stroke: '#e5e7eb' }} tickLine={{ stroke: '#e5e7eb' }} />
            <YAxis yAxisId="spending" domain={[yAxisMin, yAxisMax]} tick={{ fill: '#374151' }} axisLine={{ stroke: '#e5e7eb' }} tickLine={{ stroke: '#e5e7eb' }} tickFormatter={(value)=>`$${Math.round(value)}`} width={80} />
            <Tooltip content={<CustomTooltip />} />
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

            <Bar dataKey="essential" yAxisId="spending" stackId="spending" fill="#22c55e" />
            <Bar dataKey="discretionary" yAxisId="spending" stackId="spending" fill="#60a5fa" />
            <Bar dataKey="waste" yAxisId="spending" stackId="spending" fill="#f87171" radius={[4,4,0,0]} />

            <Line type="monotone" dataKey="total" stroke="#1f2937" yAxisId="spending" dot={{ fill: '#1f2937', r: 4 }} strokeWidth={2} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center gap-6 mb-4">
        <LegendDot color="bg-green-500" label="Essential" />
        <LegendDot color="bg-blue-400" label="Discretionary" />
        <LegendDot color="bg-red-400" label="Waste" />
        <LegendDot color="bg-gray-900" label="Total Trend" />
      </div>

      {wasteReductionAmount > 0 && (
        <div className="bg-green-50 border border-green-100 rounded-lg py-3 px-4 text-center">
          <p className="text-sm font-medium text-green-800">
            You've cut ${wasteReductionAmount}/mo waste since January! 🎉
          </p>
        </div>
      )}
    </div>
  );
}

const LegendDot = ({ color, label }: { color: string; label: string }) => (
  <div className="flex items-center gap-2">
    <div className={`w-3 h-3 rounded-full ${color}`}></div>
    <span className="text-sm text-gray-700">{label}</span>
  </div>
);
