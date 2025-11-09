"use client";

import React, { useState, useEffect } from 'react';
import { ResponsiveContainer, ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Line } from 'recharts';
import { startOfYear, format, subMonths } from 'date-fns';

interface SpendingData {
  month: string;
  essential: number;
  discretionary: number;
  waste: number;
  total: number;
  savings?: number;
  deficit?: number;
  dateTime: string;
  isPast: boolean;
}

interface SpendingTimelineProps {
  chartData?: SpendingData[];
  yAxisMin?: number;
  yAxisMax?: number;
  wasteReductionAmount?: number;
  CustomTooltip?: React.FC<any>;
  monthlyIncome?: number;
}

// Generate sample data with your actual spending (consistent each month)
const generateSampleData = (monthlyIncome: number) => {
    const data: SpendingData[] = [];
    const now = new Date();
    
    // Your actual monthly spending - consistent
    const essential = 4300;
    const discretionary = 300;
    const waste = 182.65;
    const total = 4782.65;
    
    for (let i = 11; i >= 0; i--) {
      const date = subMonths(now, i);
      const netAmount = monthlyIncome - total;
      
      data.push({
        month: format(date, 'MMM'),
        essential: essential,
        discretionary: discretionary,
        waste: waste,
        total: total,
        savings: netAmount > 0 ? netAmount : 0,
        deficit: netAmount < 0 ? Math.abs(netAmount) : 0,
        dateTime: date.toISOString(),
        isPast: true
      });
    }
    
    return data;
  };

// Savings-focused Tooltip
const SavingsTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    const savings = data.savings || 0;
    const deficit = data.deficit || 0;
    const total = data.total || 0;
    
    return (
      <div style={{
        backgroundColor: '#1e1f20',
        border: '1px solid #adadad',
        borderRadius: '8px',
        padding: '12px',
        color: '#fff'
      }}>
        <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>{label}</p>
        
        {/* Savings or Deficit - Main Focus */}
        <div style={{ 
          backgroundColor: savings > 0 ? '#22c55e' : '#ef4444', 
          borderRadius: '6px', 
          padding: '8px', 
          marginBottom: '12px',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '11px', opacity: 0.9, marginBottom: '2px' }}>
            {savings > 0 ? '💰 Money Saved' : '⚠️ Monthly Deficit'}
          </p>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
            ${savings > 0 ? savings.toLocaleString() : deficit.toLocaleString()}
          </p>
        </div>

        {/* Spending Breakdown */}
        <p style={{ fontSize: '11px', opacity: 0.7, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          Spending Breakdown
        </p>
        
        <div style={{ fontSize: '12px', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '8px', height: '8px', backgroundColor: '#22c55e', borderRadius: '50%' }}></div>
          <span>Essential: ${data.essential.toLocaleString()}</span>
        </div>
        <div style={{ fontSize: '12px', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '8px', height: '8px', backgroundColor: '#60a5fa', borderRadius: '50%' }}></div>
          <span>Discretionary: ${data.discretionary.toLocaleString()}</span>
        </div>
        {data.waste > 0 && (
          <div style={{ fontSize: '12px', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', backgroundColor: '#f87171', borderRadius: '50%' }}></div>
            <span>Waste: ${data.waste.toLocaleString()}</span>
          </div>
        )}
        
        {/* Total Spent */}
        <div style={{ 
          borderTop: '1px solid #444', 
          paddingTop: '8px', 
          fontSize: '13px',
          display: 'flex',
          justifyContent: 'space-between',
          fontWeight: '600'
        }}>
          <span>Total Spent:</span>
          <span>${data.total.toLocaleString()}</span>
        </div>
      </div>
    );
  }
  return null;
};

export default function SpendingTimeline({
  chartData,
  yAxisMin = 0,
  yAxisMax = 6000,
  wasteReductionAmount = 0,
  CustomTooltip,
  monthlyIncome = 3526 // Your actual income
}: SpendingTimelineProps) {
  const [activeRange, setActiveRange] = useState<'1W' | '1M' | '3M' | 'YTD' | '1Y'>('1Y');
  const [filteredData, setFilteredData] = useState<SpendingData[]>([]);

  // Use provided data or generate sample data
  const baseData = chartData || generateSampleData(monthlyIncome);

  useEffect(() => {
    setFilteredData(getFilteredChartData(activeRange));
  }, [activeRange, baseData]);

  const getFilteredChartData = (range: typeof activeRange) => {
    const now = new Date();

    switch(range) {
      case '1W':
        const last7Days = baseData.slice(-7);
        return last7Days.map(d => ({
          ...d,
          month: format(new Date(d.dateTime), 'EEE')
        }));
      case '1M':
        const last30Days = baseData.slice(-30);
        return last30Days.map(d => ({
          ...d,
          month: format(new Date(d.dateTime), 'MMM d')
        }));
      case '3M':
        return aggregateByWeek(baseData.slice(-90), monthlyIncome);
      case 'YTD':
        const ytdData = baseData.filter(d => new Date(d.dateTime) >= startOfYear(now));
        return aggregateByMonth(ytdData, monthlyIncome);
      case '1Y':
      default:
        return baseData;
    }
  };

  const aggregateByWeek = (data: SpendingData[], income: number) => {
    const result: SpendingData[] = [];
    const dailyIncome = income / 30;
    
    for(let i = 0; i < data.length; i += 7) {
      const week = data.slice(i, Math.min(i + 7, data.length));
      if (week.length === 0) continue;
      
      const weekIncome = dailyIncome * week.length;
      const weekTotal = week.reduce((a, b) => a + b.total, 0);
      const weekStartDate = new Date(week[0].dateTime);
      const netAmount = weekIncome - weekTotal;
      
      result.push({
        month: `${format(weekStartDate, 'MMM d')}`,
        essential: week.reduce((a, b) => a + b.essential, 0),
        discretionary: week.reduce((a, b) => a + b.discretionary, 0),
        waste: week.reduce((a, b) => a + b.waste, 0),
        total: weekTotal,
        savings: netAmount > 0 ? netAmount : 0,
        deficit: netAmount < 0 ? Math.abs(netAmount) : 0,
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
      const monthLabel = format(new Date(d.dateTime), 'MMM');
      
      if (!monthsMap.has(monthKey)) {
        monthsMap.set(monthKey, {
          month: monthLabel,
          essential: 0,
          discretionary: 0,
          waste: 0,
          total: 0,
          savings: 0,
          deficit: 0,
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
    
    const result = Array.from(monthsMap.values()).map(m => {
      const netAmount = income - m.total;
      return {
        ...m,
        savings: netAmount > 0 ? netAmount : 0,
        deficit: netAmount < 0 ? Math.abs(netAmount) : 0
      };
    });
    
    return result;
  };

  const dataWithSavings = filteredData.map(d => {
    const netAmount = monthlyIncome - d.total;
    return {
      ...d,
      savings: netAmount > 0 ? netAmount : 0,
      deficit: netAmount < 0 ? Math.abs(netAmount) : 0
    };
  });

  const TooltipComponent = CustomTooltip || SavingsTooltip;

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

  // Check if user has any deficits
  const hasDeficit = dataWithSavings.some(d => (d.deficit || 0) > 0);

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
            {/* Only show savings bar if positive */}
            <Bar dataKey="savings" yAxisId="spending" stackId="spending" fill="#a78bfa" radius={[4,4,0,0]} />
            {/* Show deficit bar if negative - in red/orange */}
            <Bar dataKey="deficit" yAxisId="spending" stackId="spending" fill="#fb923c" radius={[4,4,0,0]} />

            <Line type="monotone" dataKey="total" stroke="#1f2937" yAxisId="spending" dot={{ fill: '#1f2937', r: 4 }} strokeWidth={2} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center gap-6 mb-4">
        <LegendDot color="bg-green-500" label="Essential" />
        <LegendDot color="bg-blue-400" label="Discretionary" />
        <LegendDot color="bg-red-400" label="Waste" />
        {hasDeficit ? (
          <LegendDot color="bg-orange-400" label="Deficit" />
        ) : (
          <LegendDot color="bg-purple-400" label="Savings" />
        )}
        <LegendDot color="bg-gray-900" label="Total Trend" />
      </div>

      {hasDeficit ? (
        <div className="bg-blue-50 border border-blue-100 rounded-lg py-3 px-4 text-center">
            <p className="text-sm font-medium text-blue-800">
            💪 Cut just ${Math.abs(monthlyIncome - dataWithSavings[0].total).toFixed(0)}/mo in spending to break even - you've got this!
            </p>
        </div>
        ) : wasteReductionAmount > 0 ? (
        <div className="bg-green-50 border border-green-100 rounded-lg py-3 px-4 text-center">
            <p className="text-sm font-medium text-green-800">
            You've cut ${wasteReductionAmount}/mo waste since January! 🎉
            </p>
        </div>
        ) : null}
    </div>
  );
}

const LegendDot = ({ color, label }: { color: string; label: string }) => (
  <div className="flex items-center gap-2">
    <div className={`w-3 h-3 rounded-full ${color}`}></div>
    <span className="text-sm text-gray-700">{label}</span>
  </div>
);
