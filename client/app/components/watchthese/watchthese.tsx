"use client";

import React from 'react';
import { AlertTriangle } from 'lucide-react';

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

interface WatchTheseProps {
  spendingAlerts: SpendingAlert[];
}

export default function WatchThese({ spendingAlerts }: WatchTheseProps) {
  return (
    <div className="bg-white rounded-xl p-6 mb-6 border border-gray-100">
      <div className="flex items-center gap-2 mb-5">
        <AlertTriangle size={20} className="text-yellow-600" />
        <h2 className="text-lg font-bold text-gray-900">Watch These</h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {spendingAlerts.map((alert, index) => {
          const Icon = alert.icon;
          return (
            <div key={index} className="border border-yellow-200 bg-yellow-50 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Icon size={18} className="text-gray-700" />
                  <span className="font-semibold text-gray-900">{alert.name}</span>
                </div>
                <span className="text-xs font-semibold text-red-600 bg-red-100 px-2 py-1 rounded">
                  +{alert.increase}%
                </span>
              </div>

              <div className="mb-3">
                <div className="text-2xl font-bold text-gray-900">${alert.current}</div>
                <div className="text-xs text-gray-600">vs ${alert.baseline} baseline</div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div>
                  <div className="text-gray-600">Goal: ${alert.goal}</div>
                  <div className="text-gray-500 text-xs mt-1">{alert.strategy}</div>
                </div>
                <div className="flex gap-1 items-end h-8">
                  {alert.sparkline.map((value, i) => (
                    <div
                      key={i}
                      className="w-1.5 bg-red-400 rounded-t"
                      style={{ height: `${(value / Math.max(...alert.sparkline)) * 100}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
