"use client";

import React from 'react';
import { CreditCard } from 'lucide-react';

interface YourBenefitsProps {
  balance: number;
  rewardRate: number;
  pointsEarned: number;
  monthlyRewards: number;
  benefitsUsed: number;
  benefitsTotal: number;
}

export default function YourBenefits({
  balance,
  rewardRate,
  pointsEarned,
  monthlyRewards,
  benefitsUsed,
  benefitsTotal
}: YourBenefitsProps) {
  return (
    <div className="bg-white rounded-xl p-6 mb-6 border border-gray-100">
      <div className="flex items-center gap-2 mb-5">
        <CreditCard size={20} className="text-gray-900" />
        <h2 className="text-lg font-bold text-gray-900">Your Benefits</h2>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-xl p-5">
          <div className="text-sm text-gray-600 mb-2">Card Balance</div>
          <div className="text-3xl font-bold text-gray-900 mb-4">
            ${balance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-semibold text-green-600">{rewardRate}%</span> cashback on all purchases
          </div>
        </div>

        <div className="border border-gray-200 rounded-xl p-5">
          <div className="text-sm text-gray-600 mb-2">Rewards This Month</div>
          <div className="text-3xl font-bold text-gray-900 mb-4">
            {pointsEarned.toLocaleString()} pts
          </div>
          <div className="text-sm text-gray-600">
            Worth <span className="font-semibold text-green-600">${monthlyRewards}</span> in rewards
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600">Benefits Used This Month</div>
          <div className="text-sm font-semibold text-gray-900">
            {benefitsUsed}/{benefitsTotal}
          </div>
        </div>
        <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-green-500 rounded-full transition-all"
            style={{ width: `${(benefitsUsed / benefitsTotal) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
