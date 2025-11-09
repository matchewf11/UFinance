"use client";

import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Line } from 'recharts';
import { startOfYear, format } from 'date-fns';

interface SpendingData {
  month: string;
  essential: number;
  discretionary: number;
  waste: number;
  total: number;
  savings?: number;
  dateTime: string;
  isPast: boolean;
}

interface SpendingTimelineProps {
  chartData: SpendingData[];
  yAxisMin: number;
  yAxisMax: number;
  wasteReductionAmount: number;
  CustomTooltip?: React.FC<any>;
  monthlyIncome?: number;
}

// New Savings-focused Tooltip
const SavingsTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const savings = data.savings || 0;
    const total = data.total || 0;
    
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
        <p className="font-bold text-gray-900 mb-2">{label}</p>
        <div className="space-y-1">
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm text-green-600 font-semibold">💰 Saved:</span>
            <span className="text-sm font-bold text-green-600">${savings.toFixed(0)}</span>
          </div>
          <div className="border-t border-gray-200 my-2"></div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm text-gray-600">Total Spent:</span>
            <span className="text-sm font-medium text-gray-900">${total.toFixed(0)}</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm text-green-600">Essential:</span>
            <span className="text-sm text-gray-700">${data.essential?.toFixed(0)}</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm text-blue-600">Discretionary:</span>
            <span className="text-sm text-gray-700">${data.discretionary?.toFixed(0)}</span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="text-sm text-red-600">Waste:</span>
            <span className="text-sm text-gray-700">${data.waste?.toFixed(0)}</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default function SpendingTimeline({
  chartData,
  yAxisMin,
  yAxisMax,
  wasteReductionAmount,
  CustomTooltip,
  monthlyIncome = 3404
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
        // Last 7 days - show as days
        const last7Days = chartData.slice(-7);
        return last7Days.map(d => ({
          ...d,
          month: format(new Date(d.dateTime), 'EEE') // Mon, Tue, Wed, etc.
        }));
      case '1M':
        // Last 30 days - show as days with dates
        const last30Days = chartData.slice(-30);
        return last30Days.map(d => ({
          ...d,
          month: format(new Date(d.dateTime), 'MMM d') // Jan 1, Jan 2, etc.
        }));
      case '3M':
        // Last 90 days - aggregate by week (should show ~12-13 weeks)
        return aggregateByWeek(chartData.slice(-90), monthlyIncome);
      case 'YTD':
        // Year to date - aggregate by month
        const ytdData = chartData.filter(d => new Date(d.dateTime) >= startOfYear(now));
        return aggregateByMonth(ytdData, monthlyIncome);
      case '1Y':
      default:
        // Full year - aggregate by month (12 months)
        return aggregateByMonth(chartData, monthlyIncome);
    }
  };

  const aggregateByWeek = (data: SpendingData[], income: number) => {
    const result: SpendingData[] = [];
    const dailyIncome = income / 30; // Approximate daily income
    
    for(let i = 0; i < data.length; i += 7) {
      const week = data.slice(i, Math.min(i + 7, data.length));
      if (week.length === 0) continue;
      
      const weekIncome = dailyIncome * week.length;
      const weekTotal = week.reduce((a, b) => a + b.total, 0);
      const weekStartDate = new Date(week[0].dateTime);
      
      result.push({
        month: `${format(weekStartDate, 'MMM d')}`, // "Jan 1", "Jan 8", etc.
        essential: week.reduce((a, b) => a + b.essential, 0),
        discretionary: week.reduce((a, b) => a + b.discretionary, 0),
        waste: week.reduce((a, b) => a + b.waste, 0),
        total: weekTotal,
        savings: Math.max(0, weekIncome - weekTotal),
        dateTime: week[0].dateTime,
        isPast: week[0].isPast
      });
    }
    return result;
  };

  const aggregateByMonth = (data: SpendingData[], income: number) => {
    const monthsMap = new Map<string, SpendingData>();
    
    data.forEach(d => {
      const monthKey = format(new Date(d.dateTime), 'yyyy-MM');
      const monthLabel = format(new Date(d.dateTime), 'MMM'); // Jan, Feb, Mar, etc.
      
      if (!monthsMap.has(monthKey)) {
        monthsMap.set(monthKey, {
          month: monthLabel,
          essential: 0,
          discretionary: 0,
          waste: 0,
          total: 0,
          savings: 0,
          dateTime: d.dateTime,
          isPast: d.isPast
        });
      }
      
      const monthData = monthsMap.get(monthKey)!;
      monthData.essential += d.essential;
      monthData.discretionary += d.discretionary;
      monthData.waste += d.waste;
      monthData.total += d.total;
    });
    
    // Calculate savings for each month
    const result = Array.from(monthsMap.values()).map(m => ({
      ...m,
      savings: Math.max(0, income - m.total)
    }));
    
    return result;
  };

  const dataWithSavings = filteredData.map(d => ({
    ...d,
    savings: d.savings !== undefined ? d.savings : Math.max(0, monthlyIncome - d.total)
  }));

  // Use the new SavingsTooltip instead of CustomTooltip
  const TooltipComponent = CustomTooltip || SavingsTooltip;

  // Dynamic subtitle based on active range
  const getSubtitle = () => {
    switch(activeRange) {
      case '1W': return 'Last 7 days';
      case '1M': return 'Last 30 days';
      case '3M': return 'Last 12 weeks';
      case 'YTD': return 'Year to date by month';
      case '1Y': return '12-month journey';
      default: return '12-month journey to financial wellness';
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 mb-6 border border-gray-100">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-1">Smart Spending Timeline</h2>
          <p className="text-sm text-gray-600">{getSubtitle()}</p>
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
          <ComposedChart data={dataWithSavings}>
            <XAxis 
              dataKey="month" 
              tick={{ fill: '#374151', fontSize: 12 }} 
              axisLine={{ stroke: '#e5e7eb' }} 
              tickLine={{ stroke: '#e5e7eb' }}
              angle={activeRange === '1M' ? -45 : 0}
              textAnchor={activeRange === '1M' ? 'end' : 'middle'}
              height={activeRange === '1M' ? 80 : 60}
            />
            <YAxis yAxisId="spending" domain={[yAxisMin, yAxisMax]} tick={{ fill: '#374151' }} axisLine={{ stroke: '#e5e7eb' }} tickLine={{ stroke: '#e5e7eb' }} tickFormatter={(value)=>`$${Math.round(value)}`} width={80} />
            <Tooltip content={<TooltipComponent />} />
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

            <Bar dataKey="essential" yAxisId="spending" stackId="spending" fill="#22c55e" />
            <Bar dataKey="discretionary" yAxisId="spending" stackId="spending" fill="#60a5fa" />
            <Bar dataKey="waste" yAxisId="spending" stackId="spending" fill="#f87171" />
            <Bar dataKey="savings" yAxisId="spending" stackId="spending" fill="#a78bfa" radius={[4,4,0,0]} />

            <Line type="monotone" dataKey="total" stroke="#1f2937" yAxisId="spending" dot={{ fill: '#1f2937', r: 4 }} strokeWidth={2} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center gap-6 mb-4">
        <LegendDot color="bg-green-500" label="Essential" />
        <LegendDot color="bg-blue-400" label="Discretionary" />
        <LegendDot color="bg-red-400" label="Waste" />
        <LegendDot color="bg-purple-400" label="Savings" />
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