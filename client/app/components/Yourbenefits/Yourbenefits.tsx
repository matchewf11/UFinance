"use client";

import React from 'react';
import { CreditCard, ChevronDown, Eye } from 'lucide-react';

interface BenefitsProps {
  currentCardName?: string;
  balance?: number;
  rewardRate?: number;
  pointsEarned?: number;
  monthlyRewards?: number;
  benefitsUsed?: number;
  benefitsTotal?: number;
}

export default function YourBenefits({
  currentCardName = 'Current Card',
  balance = 24098.00,
  rewardRate = 3,
  pointsEarned = 8400,
  monthlyRewards = 18,
  benefitsUsed = 6,
  benefitsTotal = 8
}: BenefitsProps) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <CreditCard size={20} className="text-gray-900" />
          <h2 className="text-lg font-bold text-gray-900">Your Benefits</h2>
        </div>
        <button className="text-sm text-gray-600 flex items-center gap-1 hover:text-gray-900 transition">
          Choose Card
          <ChevronDown size={16} />
        </button>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        {/* Current Card Display */}
        <div className="col-span-1">
          <div className="relative bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-6 text-white overflow-hidden aspect-[1.6/1]">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 opacity-20 rounded-full -mr-16 -mt-16"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-10 h-7 bg-yellow-400 rounded mb-8"></div>
              </div>
              <div>
                <p className="text-xs opacity-80 mb-1 flex items-center gap-1">
                  Balance <Eye size={12} />
                </p>
                <p className="text-2xl font-bold mb-4">${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                <div className="flex justify-end">
                  <div className="text-sm font-bold">VISA</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card Benefits */}
        <div className="col-span-2 grid grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-xl p-4">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Benefits/Rewards</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Reward Rate</span>
                <span className="text-sm font-bold text-gray-900">{rewardRate}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Points Earned</span>
                <span className="text-sm font-bold text-gray-900">{pointsEarned.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">This Month</span>
                <span className="text-sm font-bold text-green-600">+${monthlyRewards}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 flex flex-col justify-center items-center text-center">
            <p className="text-sm text-gray-600 mb-1">You've used</p>
            <p className="text-3xl font-bold text-gray-900 mb-1">{benefitsUsed}/{benefitsTotal}</p>
            <p className="text-xs text-gray-600">of your card's benefits!</p>
          </div>
        </div>
      </div>
    </div>
  );
}