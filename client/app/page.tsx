"use client"

import React, { useState } from 'react';
import { Calendar, Filter, ChevronDown, Eye, Info, CreditCard, Gift, TrendingUp, DollarSign, Award } from 'lucide-react';
import Sidebar from './components/sidebar/sidebar';

export default function FinanceDashboard() {
  const [activeTimeRange, setActiveTimeRange] = useState('1M');
  
  // Sample data for the rewards timeline chart
  const rewardsData = [
    { month: 'JAN', points: 250 },
    { month: 'FEB', points: 550 },
    { month: 'MAR', points: 450 },
    { month: 'APR', points: 500 },
    { month: 'MAY', points: 350 },
    { month: 'JUN', points: 650 },
    { month: 'JUL', points: 400 },
    { month: 'AUG', points: 300 },
    { month: 'SEP', points: 700 },
    { month: 'OCT', points: 650 },
    { month: 'NOV', points: 550 },
    { month: 'DEC', points: 400 }
  ];

  const maxPoints = Math.max(...rewardsData.map(d => d.points));

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-end items-center gap-4 mb-8">
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition">
            <Calendar size={18} />
            <span className="text-sm">8 Feb - 15 Feb 2024</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-gray-300 transition">
            <Filter size={18} />
            <span className="text-sm">Filter</span>
          </button>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Total Balance Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-gray-600 font-medium flex items-center gap-2">
                <CreditCard size={18} />
                Total Balance
              </h2>
              <button className="text-sm text-gray-500 flex items-center gap-1">
                All Accounts
                <ChevronDown size={16} />
              </button>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🇺🇸</span>
              <span className="text-gray-600">US Dollar</span>
            </div>
            <div className="mb-3">
              <h3 className="text-4xl font-bold text-gray-900">$348,100</h3>
            </div>
            <div className="flex items-center gap-2 text-green-600 text-sm">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              <span>15.43% Than last month</span>
            </div>
            <div className="flex gap-2 mt-6">
              {['7 D', '1 M', '6 M', '1 YR'].map((range) => (
                <button
                  key={range}
                  onClick={() => setActiveTimeRange(range)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    activeTimeRange === range
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {range}
                </button>
              ))}
            </div>
          </div>

          {/* Rewards Goals Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-gray-600 font-medium flex items-center gap-2">
                <Gift size={18} />
                Rewards Goals
              </h2>
              <button className="text-sm text-gray-500 flex items-center gap-1">
                All Accounts
                <ChevronDown size={16} />
              </button>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Rewards Points</p>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">2,900</h3>
            </div>
            
            {/* Reward Progress Bars */}
            <div className="space-y-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <img src="https://via.placeholder.com/24x24/ff0000/ffffff?text=A" alt="Applebees" className="w-6 h-6 rounded" />
                  <span className="text-sm font-medium text-gray-700">Applebees</span>
                  <span className="ml-auto text-xs text-gray-500">2400/4000</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <img src="https://via.placeholder.com/24x24/003366/ffffff?text=D" alt="Delta" className="w-6 h-6 rounded" />
                  <span className="text-sm font-medium text-gray-700">DELTA</span>
                  <span className="ml-auto text-xs text-gray-500">2400/10,000</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '24%' }}></div>
                </div>
              </div>
            </div>
            
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition">
              Explore more Rewards
            </button>
          </div>

          {/* Spending Summary Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-gray-600 font-medium flex items-center gap-2">
                <TrendingUp size={18} />
                Spending Summary
              </h2>
              <button className="text-sm text-gray-500 flex items-center gap-1">
                More Option
                <ChevronDown size={16} />
              </button>
            </div>
            
            {/* Donut Chart */}
            <div className="flex flex-col items-center mb-4">
              <div className="relative w-48 h-48 mb-4">
                <svg viewBox="0 0 200 200" className="transform -rotate-90">
                  {/* Expenses - Dark segments */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#1f2937"
                    strokeWidth="20"
                    strokeDasharray="251.2 251.2"
                    strokeDashoffset="0"
                  />
                  {/* Income - Blue segments */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#60a5fa"
                    strokeWidth="20"
                    strokeDasharray="125.6 376.8"
                    strokeDashoffset="-251.2"
                  />
                  {/* Others - Gray segments */}
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#d1d5db"
                    strokeWidth="20"
                    strokeDasharray="62.8 439.6"
                    strokeDashoffset="-376.8"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-xs text-gray-500">Income after expenses</p>
                  <p className="text-2xl font-bold text-gray-900">$14,450</p>
                </div>
              </div>
              
              {/* Legend */}
              <div className="flex gap-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gray-900"></div>
                  <span className="text-gray-600">Expenses</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                  <span className="text-gray-600">Income</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  <span className="text-gray-600">Others</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-1 text-sm text-blue-600">
              <span>You've earned 144 Rewards Points this month!</span>
              <Info size={14} />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* My Cards */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-gray-900 font-semibold flex items-center gap-2">
                <CreditCard size={18} />
                My Cards
              </h2>
              <button className="text-sm text-gray-500 flex items-center gap-1">
                Choose Card
                <ChevronDown size={16} />
              </button>
            </div>
            
            {/* Credit Card */}
            <div className="relative bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 text-white mb-6 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 opacity-20 rounded-full -mr-32 -mt-32"></div>
              <div className="relative z-10">
                <div className="mb-8">
                  <img src="https://via.placeholder.com/48x32/fbbf24/fbbf24" alt="Chip" className="w-12 h-8 bg-yellow-400 rounded" />
                </div>
                <div className="mb-6">
                  <p className="text-sm opacity-80 mb-1 flex items-center gap-2">
                    Balance
                    <Eye size={14} />
                  </p>
                  <p className="text-3xl font-bold">$24,098.00</p>
                </div>
                <div className="flex justify-end">
                  <img src="https://via.placeholder.com/60x40/ffffff/000000?text=VISA" alt="Visa" className="h-8" />
                </div>
              </div>
              <div className="absolute bottom-4 right-4 text-sm opacity-80">
                BankCo.
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Rewards Points (3% Back)</p>
                <p className="text-2xl font-bold text-gray-900">2,900</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">APR</p>
                <p className="text-2xl font-bold text-gray-900">24.5%</p>
              </div>
            </div>
          </div>

          {/* Rewards Timeline */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-gray-900 font-semibold flex items-center gap-2">
                <Award size={18} />
                Rewards Timeline
              </h2>
            </div>
            
            {/* Chart */}
            <div className="mb-6">
              <div className="flex items-end justify-between h-48 gap-2">
                {rewardsData.map((data, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-gray-200 rounded-t relative" style={{ height: '100%' }}>
                      <div
                        className="w-full bg-purple-600 rounded-t absolute bottom-0 transition-all hover:bg-purple-700"
                        style={{ height: `${(data.points / maxPoints) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500">{data.month}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Notifications */}
            <div className="space-y-3">
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  You are $13 away from an Applebee's gift card!
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  Based on your spending you'll earn an Applebee's Gift Card{' '}
                  <span className="text-blue-600 font-medium">two weeks!</span>
                </p>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition">
                  Redeem
                </button>
                <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-lg font-medium transition">
                  Redeem
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}