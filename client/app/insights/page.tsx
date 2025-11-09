'use client'

import Sidebar from "../components/sidebar/sidebar";
import React, { useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Yourbenefits from "../components/Yourbenefits/Yourbenefits";
import WatchThese from "../components/watchthese/watchthese";
import { Utensils, Package } from "lucide-react";

interface SpendingAlert {
    icon: React.ComponentType<{ size?: number; className?: string }>;
    name: string;
    current: number;
    baseline: number;
    increase: number;
    goal: number;
    strategy: string;
    sparkline: number[];
    cardRecommendation: {
      name: string;
      benefit: string;
      annualSavings: number;
      logo: string;
    };
  }

const Insights: React.FC = () => {
    // Spending breakdown data
    const spendingData = [
    { name: 'Eating Out / Food', value: 1900, color: '#ef4444' },       // red = emotional
    { name: 'Concerts & Events', value: 1450, color: '#8b5cf6' },       // purple = indulgence
    { name: 'Groceries', value: 400, color: '#10b981' },                // green = essential
    { name: 'Transport / Gas', value: 350, color: '#3b82f6' },          // blue = neutral
    { name: 'Bills & Utilities', value: 600, color: '#f59e0b' },        // yellow = baseline
    { name: 'Impulse / Waste', value: 182.65, color: '#6b7280' }        // gray = unnoticed leakage
    ];

    // Spending Alerts (single definition with cardRecommendation)
    const spendingAlerts: SpendingAlert[] = [
        {
        icon: Utensils,
        name: 'DoorDash',
        current: 280,
        baseline: 120,
        increase: 133,
        goal: 120,
        strategy: 'Meal prep',
        sparkline: [20, 25, 30, 45, 60],
        cardRecommendation: {
            name: 'Chase Sapphire Preferred',
            benefit: '3x points on dining & food delivery',
            annualSavings: 336,
            logo: '💳'
        }
        },
        {
        icon: Package,
        name: 'Amazon',
        current: 340,
        baseline: 180,
        increase: 89,
        goal: 180,
        strategy: '24hr rule',
        sparkline: [30, 35, 40, 50, 70],
        cardRecommendation: {
            name: 'Amazon Prime Rewards',
            benefit: '5% back on Amazon purchases',
            annualSavings: 204,
            logo: '🛍️'
        }
        }
    ];

    // Income vs Spending data
    const monthlyData = [
        { month: 'May', income: 3500, spending: 4800 },
        { month: 'Jun', income: 3500, spending: 4100 },
        { month: 'Jul', income: 3800, spending: 5900 },
        { month: 'Aug', income: 3500, spending: 1400 },
        { month: 'Sep', income: 3500, spending: 2600 },
        { month: 'Oct', income: 4000, spending: 800 }
    ];

    const totalSpending = spendingData.reduce((sum, item) => sum + item.value, 0);
    const currentMonthIncome = monthlyData[monthlyData.length - 1].income;
    const currentMonthSpending = monthlyData[monthlyData.length - 1].spending;

    // Potential savings calculation
    const potentialSavings = 125;

    return(
        <div className='flex min-h-screen bg-gray-50'>
            <Sidebar></Sidebar>
            <main className='flex-1 p-8 max-w-[1600px] mx-auto'>
                {/* Page Header */}
                <div className='mb-8'>
                    <h1 className='text-3xl font-bold text-gray-900 mb-2'>Insights</h1>
                    <p className='text-gray-600'>View insights into your financial information</p>
                </div>
            
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                    {/* Spending Breakdown Card */}
                    <div className="bg-white rounded-2xl p-6 border border-slate-200">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Spending</h2>
                        <div className="flex items-center gap-8">
                        <ResponsiveContainer width="60%" height={300}>
                            <PieChart>
                            <Pie
                                data={spendingData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={100}
                                paddingAngle={2}
                                dataKey="value"
                            >
                                {spendingData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        
                        <div className="flex-1 space-y-3">
                            {spendingData.map((item, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                <div 
                                    className="w-4 h-4 rounded-full" 
                                    style={{ backgroundColor: item.color }}
                                />
                                <span className="text-slate-700 font-medium">{item.name}</span>
                                </div>
                                <span className="text-slate-600 font-semibold">${item.value}</span>
                            </div>
                            ))}
                        </div>
                        </div>
                    </div>

                    {/* Income vs Spending Card */}
                    <div className="bg-white rounded-2xl p-6 border border-slate-200">
                        <div className="flex justify-between items-start mb-6">
                        <h2 className="text-2xl font-semibold text-slate-800">Income vs Spending</h2>
                        <div className="text-right">
                            <div className="text-3xl font-bold text-slate-800">${totalSpending.toFixed(2)}</div>
                            <div className="text-sm text-slate-500">Total Spending</div>
                        </div>
                        </div>
                        
                        <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={monthlyData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                            <XAxis dataKey="month" stroke="#64748b" />
                            <YAxis stroke="#64748b" />
                            <Tooltip 
                            contentStyle={{ 
                                backgroundColor: '#fff', 
                                border: '1px solid #e2e8f0',
                                borderRadius: '8px'
                            }}
                            />
                            <Legend />
                            <Bar dataKey="income" fill="#10b981" radius={[8, 8, 0, 0]} />
                            <Bar dataKey="spending" fill="#ef4444" radius={[8, 8, 0, 0]} />
                        </BarChart>
                        </ResponsiveContainer>
                    </div>
                    </div>
                    
                    <div className="mt-4">
                        <WatchThese spendingAlerts={spendingAlerts}></WatchThese>
                    </div>
                

            </main>
        </div>
    );
}

export default Insights;