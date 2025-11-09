"use client";

import React, { useState } from 'react';
import { Calendar, Filter, ChevronDown, Eye, Info, CreditCard, Gift, TrendingUp, DollarSign, Award, Brain, AlertTriangle, CheckCircle, XCircle, Zap, Plus, Target, Trash2, ShoppingBag, Utensils, Package } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, ComposedChart, Line, Brush } from 'recharts';
import Sidebar from './components/sidebar/sidebar';
import FinanceCarousel from './components/FinanceCarousel/FinanceCarousel';
import YourBenefits from './components/Yourbenefits/Yourbenefits';
import WatchThese from './components/watchthese/watchthese';
import SpendingTimeline from "./components/SpendingTimeline/SpendingTimeLine";
import YourGoals from './components/YourGoals/YourGoals';

interface SpendingData {
  month: string;
  essential: number;
  discretionary: number;
  waste: number;
  total: number;
  savings?: number; // Keep it optional
  dateTime: string;
  isPast: boolean;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: SpendingData;
    value: number;
  }>;
}

interface MonthlyWin {
  icon: string;
  amount: number;
  label: string;
  sublabel: string;
}

interface PlanStep {
  step: number;
  title: string;
  current: number;
  target: number;
  progress: number;
  timeLeft: string;
  action: string;
  actionType: 'primary' | 'warning' | 'success';
}

interface BigGoal {
  title: string;
  description: string;
  current: number;
  target: number;
  progress: number;
  icon: string;
  timeframe: string;
  milestone: string;
}

interface SpendingAlert {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  name: string;
  current: number;
  baseline: number;
  increase: number;
  goal: number;
  strategy: string;
  sparkline: number[];
}

export default function FinanceDashboard() {
  const [activeTimeRange, setActiveTimeRange] = useState<string>('1M');
  
  // AI-Analyzed Spending Data
  const currentMonth = 1; // February (0-indexed from Jan)
  const baselineEssentialSpending = 1850;
  const baselineDiscretionary = 890;
  const baselineWaste = 152;
  
  // Wellness Score
  const wellnessScore = 68;
  const wellnessIncrease = 12;
  const sixMonthSavingsProjection = 1660;
  
  // This Month's Wins
  const monthlyWins: MonthlyWin[] = [
    { icon: '💰', amount: 41, label: 'Interest', sublabel: 'Saved' },
    { icon: '📺', amount: 15, label: 'Netflix', sublabel: 'Canceled' },
    { icon: '🎁', amount: 18, label: 'Rewards', sublabel: 'Earned' },
    { icon: '🍔', amount: 112, label: 'Takeout', sublabel: 'Reduced' }
  ];
  const totalWins = monthlyWins.reduce((sum, win) => sum + win.amount, 0);
  
  // Your Plan Steps
  const planSteps: PlanStep[] = [
    {
      step: 1,
      title: 'Emergency Fund',
      current: 300,
      target: 500,
      progress: 60,
      timeLeft: '2 months left',
      action: '+Add $83',
      actionType: 'primary'
    },
    {
      step: 2,
      title: 'Cut Waste',
      current: 61,
      target: 152,
      progress: 40,
      timeLeft: '3 items to cancel',
      action: 'Cancel Now',
      actionType: 'warning'
    },
    {
      step: 3,
      title: 'Smart Rewards',
      current: 18,
      target: 18,
      progress: 100,
      timeLeft: 'On autopilot',
      action: 'View Cards',
      actionType: 'success'
    }
  ];
  
  // Big Goal
  const bigGoal: BigGoal = {
    title: 'Dream Vacation Fund',
    description: 'Europe trip for 2 weeks',
    current: 4250,
    target: 8000,
    progress: 53,
    icon: '✈️',
    timeframe: '8 months away',
    milestone: '$5,000 by March'
  };
  
  const spendingTimeline: Omit<SpendingData, 'total'>[] = [
    { month: 'JAN', dateTime: '2025-01', essential: 1300, discretionary: 300, waste: 3182.65, isPast: true },
    { month: 'FEB', dateTime: '2025-02', essential: 1300, discretionary: 300, waste: 2682.65, isPast: true },
    { month: 'MAR', dateTime: '2025-03', essential: 1300, discretionary: 300, waste: 2282.65, isPast: false },
    { month: 'APR', dateTime: '2025-04', essential: 1300, discretionary: 300, waste: 2182.65, isPast: false },
    { month: 'MAY', dateTime: '2025-05', essential: 1300, discretionary: 300, waste: 1882.65, isPast: false },
    { month: 'JUN', dateTime: '2025-06', essential: 1300, discretionary: 300, waste: 1482.65, isPast: false },
    { month: 'JUL', dateTime: '2025-07', essential: 1300, discretionary: 300, waste: 1182.65, isPast: false },
    { month: 'AUG', dateTime: '2025-08', essential: 1300, discretionary: 300, waste: 882.65, isPast: false },
    { month: 'SEP', dateTime: '2025-09', essential: 1300, discretionary: 300, waste: 682.65, isPast: false },
    { month: 'OCT', dateTime: '2025-10', essential: 1300, discretionary: 300, waste: 582.65, isPast: false },
    { month: 'NOV', dateTime: '2025-11', essential: 1300, discretionary: 300, waste: 282.65, isPast: false },
    { month: 'DEC', dateTime: '2025-12', essential: 1300, discretionary: 300, waste: 182.65, isPast: false }
  ];
  
  // Calculate total spending for each month
  const chartData: SpendingData[] = spendingTimeline.map(data => ({
    ...data,
    total: data.essential + data.discretionary + data.waste
  }));
  
  const maxSpending = Math.max(...chartData.map(d => d.total));
  const wasteReductionAmount = spendingTimeline[0].waste - spendingTimeline[currentMonth].waste;
  
  // Calculate Y-axis domain with padding
  const yAxisPadding = maxSpending * 0.05;
  const yAxisMax = maxSpending + yAxisPadding;
  const yAxisMin = 0;
  
  const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const savings = data.savings || 0;
      
      return (
        <div style={{
          backgroundColor: '#1e1f20',
          border: '1px solid #adadad',
          borderRadius: '8px',
          padding: '12px',
          color: '#fff'
        }}>
          <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>{data.month}</p>
          
          {/* Savings - Main Focus */}
          <div style={{ 
            backgroundColor: '#22c55e', 
            borderRadius: '6px', 
            padding: '8px', 
            marginBottom: '12px',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '14px', opacity: 0.9, marginBottom: '2px' }}>
              💰 Money Saved
            </p>
            <p style={{ fontSize: '30px', fontWeight: 'bold' }}>
              ${savings.toLocaleString()}
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
  
  // Spending Alerts
  const spendingAlerts: SpendingAlert[] = [
    {
      icon: Utensils,
      name: 'DoorDash',
      current: 280,
      baseline: 120,
      increase: 133,
      goal: 120,
      strategy: 'Meal prep',
      sparkline: [20, 25, 30, 45, 60]
    },
    {
      icon: Package,
      name: 'Amazon',
      current: 340,
      baseline: 180,
      increase: 89,
      goal: 180,
      strategy: '24hr rule',
      sparkline: [30, 35, 40, 50, 70]
    }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6">
        
        {/* Header with Time Range */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex items-center gap-3">
            <div className="flex bg-white rounded-lg border border-gray-200 p-1">
              {['7 D', '1 M', '6 M', '1 YR'].map((range) => (
                <button
                  key={range}
                  onClick={() => setActiveTimeRange(range)}
                  className={`px-4 py-1.5 rounded text-sm font-medium transition ${
                    activeTimeRange === range
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50">
              <Filter size={16} />
              Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50">
              All Accounts
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* Top Stats Row - Combined Progress Card */}
        <div className="bg-white rounded-xl p-6 border border-gray-100 mb-10">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp size={18} className="text-gray-600" />
            <span className="text-sm font-medium text-gray-600">Your Projected Growth</span>
          </div>
          
          <div className="flex items-center gap-8 mb-6">
            <div>
            <div className="text-6xl font-bold text-gray-900 mb-2">
  ${Number(sixMonthSavingsProjection).toLocaleString()}
</div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-2">This Month</div>
              <div className="text-4xl font-bold text-green-600 mb-2">+${totalWins}</div>
            </div>
          </div>
          
          {/* Bar Progress Graph */}
          <div className="mb-4">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={[
                { month: 'October', savings: 186 },
                { month: 'November', savings: 320 },
                { month: 'December', savings: 454 },
                { month: 'January', savings: 588 },
                { month: 'February', savings: 722 },
                { month: 'March', savings: 856 },
                { month: 'April', savings: 990 },
                { month: 'May', savings: 1124 },
                { month: 'June', savings: 1258 },
                { month: 'July', savings: 1392 },
                { month: 'August', savings: 1526 },
                { month: 'September', savings: 1660 }
              ]}>
                <XAxis 
                  dataKey="month"
                  tick={{ fill: '#374151', fontSize: 12 }}
                  axisLine={{ stroke: '#e5e7eb' }}
                  tickLine={{ stroke: '#e5e7eb' }}
                />
                <YAxis 
                  tick={{ fill: '#374151' }}
                  axisLine={{ stroke: '#e5e7eb' }}
                  tickLine={{ stroke: '#e5e7eb' }}
                  tickFormatter={(value) => `$${value}`}
                  width={60}
                />
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

                <Tooltip 
                  formatter={(value) => `$${value.toLocaleString()}`}
                  cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
                />

                <Bar 
                  dataKey="savings" 
                  fill="#22c55e"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>

        <FinanceCarousel />

        {/* Your Goals Section */}
        <YourGoals planSteps={planSteps} bigGoal={bigGoal} />

        <SpendingTimeline
          chartData={chartData}
          yAxisMin={yAxisMin}
          yAxisMax={yAxisMax}
          wasteReductionAmount={wasteReductionAmount}
          CustomTooltip={CustomTooltip}
        />
      </main>
    </div>
  );
}