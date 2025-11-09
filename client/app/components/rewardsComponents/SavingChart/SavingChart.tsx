'use client'

import React, { useState } from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

/**
 * This is a completely random graph for now just to get it started
 */
const SavingChart = () => {
    const [chartType, setChartType] = useState('line');
    // Generate sample savings data
    const data = [
        { month: 'Jan', savings: 1200, goal: 1500, cumulative: 1200 },
        { month: 'Feb', savings: 1450, goal: 1500, cumulative: 2650 },
        { month: 'Mar', savings: 1350, goal: 1500, cumulative: 4000 },
        { month: 'Apr', savings: 1600, goal: 1500, cumulative: 5600 },
        { month: 'May', savings: 1550, goal: 1500, cumulative: 7150 },
        { month: 'Jun', savings: 1700, goal: 1500, cumulative: 8850 },
        { month: 'Jul', savings: 1400, goal: 1500, cumulative: 10250 },
        { month: 'Aug', savings: 1650, goal: 1500, cumulative: 11900 },
        { month: 'Sep', savings: 1750, goal: 1500, cumulative: 13650 },
        { month: 'Oct', savings: 1500, goal: 1500, cumulative: 15150 },
        { month: 'Nov', savings: 1800, goal: 1500, cumulative: 16950 },
        { month: 'Dec', savings: 1900, goal: 1500, cumulative: 18850 },
    ];

    const totalSaved = data[data.length - 1].cumulative;
    const avgMonthlySavings = Math.round(totalSaved / data.length);
    const yearlyGoal = 18000;

    return(
        <ResponsiveContainer width="100%" height={400}>
              {chartType === 'line' ? (
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="savings"
                    stroke="#10b981"
                    strokeWidth={3}
                    dot={{ fill: '#10b981', r: 5 }}
                    name="Actual Savings"
                  />
                  <Line
                    type="monotone"
                    dataKey="goal"
                    stroke="#94a3b8"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={false}
                    name="Monthly Goal"
                  />
                </LineChart>
              ) : (
                <AreaChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="cumulative"
                    stroke="#10b981"
                    fill="#10b981"
                    fillOpacity={0.6}
                    strokeWidth={3}
                    name="Cumulative Savings"
                  />
                </AreaChart>
              )}
            </ResponsiveContainer>
    );
}

export default SavingChart;