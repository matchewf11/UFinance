import React from 'react';
import { AlertTriangle, CreditCard } from 'lucide-react';

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

interface WatchTheseProps {
  spendingAlerts: SpendingAlert[];
}

export default function WatchThese({ spendingAlerts }: WatchTheseProps) {
  return (
    <div className="bg-white rounded-xl p-6 mb-6 border border-gray-100">
      <div className="flex items-center gap-2 mb-5">
        <AlertTriangle size={20} className="text-yellow-600" />
        <h2 className="text-lg font-bold text-gray-900">Helping You Stay on Track</h2>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {spendingAlerts.map((alert, idx) => {
          const AlertIcon = alert.icon;
          return (
            <div key={idx} className="border border-yellow-200 bg-yellow-50 rounded-xl p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <AlertIcon size={20} className="text-yellow-700" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{alert.name}</h3>
                </div>
                <span className="text-sm font-semibold text-yellow-700">↑{alert.increase}%</span>
              </div>

              <div className="mb-4">
                <div className="text-4xl font-bold text-gray-900">${alert.current}</div>
              </div>

              <div className="flex items-end gap-1 h-12 mb-4">
                {alert.sparkline.map((value, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-yellow-300 rounded-t"
                    style={{ height: `${(value / Math.max(...alert.sparkline)) * 100}%` }}
                  />
                ))}
              </div>

              <div className="flex items-center justify-between mb-4 pb-4 border-b border-yellow-200">
                <span className="text-sm text-gray-600">Goal</span>
                <span className="text-lg font-bold text-gray-900">${alert.goal}</span>
              </div>

              <div className="mb-4">
                <span className="text-xs text-gray-600">💛 Supportive Tip</span>
                <p className="text-sm font-medium text-gray-900 mt-1">{alert.strategy}</p>
              </div>

              {/* Card Recommendation */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-4 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <CreditCard size={16} className="text-blue-100" />
                  <span className="text-xs font-semibold text-blue-100 uppercase tracking-wide">
                    AI Recommended
                  </span>
                </div>
                
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl">{alert.cardRecommendation.logo}</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm mb-0.5">{alert.cardRecommendation.name}</h4>
                    <p className="text-xs text-blue-100 leading-tight">{alert.cardRecommendation.benefit}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between pt-3 border-t border-blue-400/30">
                  <span className="text-xs opacity-90">Potential Annual Savings</span>
                  <span className="text-lg font-bold">${alert.cardRecommendation.annualSavings}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}