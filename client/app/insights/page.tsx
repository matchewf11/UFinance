'use client'

import Sidebar from "../components/sidebar/sidebar";
import React, { useState } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Insights: React.FC = () => {
    // Spending breakdown data
    const spendingData = [
        { name: 'Food', value: 450, color: '#3b82f6' },
        { name: 'Auto', value: 320, color: '#10b981' },
        { name: 'Shopping', value: 280, color: '#f59e0b' },
        { name: 'Utilities', value: 200, color: '#ef4444' },
        { name: 'Entertainment', value: 150, color: '#8b5cf6' }
    ];

    // Income vs Spending data
    const monthlyData = [
        { month: 'Jan', income: 3500, spending: 2800 },
        { month: 'Feb', income: 3500, spending: 3100 },
        { month: 'Mar', income: 3800, spending: 2900 },
        { month: 'Apr', income: 3500, spending: 3400 },
        { month: 'May', income: 3500, spending: 2600 },
        { month: 'Jun', income: 4000, spending: 3200 }
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
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
                        <h2 className="text-2xl font-semibold text-slate-800 mb-6">Spending</h2>
                        <div className="flex flex-col items-center">
                        <ResponsiveContainer width="100%" height={300}>
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
                        
                        <div className="w-full mt-6 space-y-3">
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
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
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

                    {/* Personal Insights Card */}
                    <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
                    <h2 className="text-2xl font-semibold text-slate-800 mb-6">Personal Insights</h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="space-y-6">
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                            <h3 className="font-semibold text-blue-900 mb-2">You spend a lot on dining</h3>
                            <p className="text-blue-800 text-sm">
                            Your food expenses account for 32% of your monthly spending. This is higher than the average of 15-20%.
                            </p>
                        </div>

                        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg">
                            <h3 className="font-semibold text-emerald-900 mb-2">Tip</h3>
                            <p className="text-emerald-800 text-sm">
                            Using a rewards credit card for groceries could help you earn cash back and save money. Consider cards that offer 3-5% back on grocery purchases.
                            </p>
                        </div>
                        </div>

                        <div className="flex flex-col items-center justify-center">
                        <div className="relative w-48 h-48 mb-4">
                            <svg className="w-full h-full transform -rotate-90">
                            <circle
                                cx="96"
                                cy="96"
                                r="80"
                                stroke="#e2e8f0"
                                strokeWidth="16"
                                fill="none"
                            />
                            <circle
                                cx="96"
                                cy="96"
                                r="80"
                                stroke="#10b981"
                                strokeWidth="16"
                                fill="none"
                                strokeDasharray={`${(potentialSavings / 450) * 502.4} 502.4`}
                                strokeLinecap="round"
                            />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <div className="text-4xl font-bold text-slate-800">${potentialSavings}</div>
                            <div className="text-sm text-slate-500">per month</div>
                            </div>
                        </div>
                        
                        <div className="text-center">
                            <p className="text-lg font-semibold text-slate-700 mb-2">Potential Savings</p>
                            <p className="text-slate-600 text-sm">
                            By optimizing your food spending with rewards cards,<br />
                            you could save up to <span className="font-bold text-emerald-600">${potentialSavings}/month</span>
                            </p>
                            <p className="text-2xl font-bold text-emerald-600 mt-3">
                            ${(potentialSavings * 12).toLocaleString()}/year
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>


            </main>
        </div>
    );
}

export default Insights;