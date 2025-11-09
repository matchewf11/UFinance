"use client";

import React, { useState } from 'react';
import { 
  CreditCard, 
  ChevronDown, 
  Eye,
  Sparkles,
  Clock,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Gift,
  TrendingDown
} from 'lucide-react';

interface BenefitsProps {
  currentCardName?: string;
  balance?: number;
  rewardRate?: number;
  pointsEarned?: number;
  monthlyRewards?: number;
  benefitsUsed?: number;
  benefitsTotal?: number;
}

interface CreditCard {
  name: string;
  balance: number;
  available: number;
  monthlySpending: number;
  pointsEarned: number;
  monthlyRewards: number;
  benefitsUsed: number;
  benefitsTotal: number;
  color: string;
  cardType: 'credit' | 'debit';
}

const creditCards: CreditCard[] = [
  {
    name: 'DISCOVER it Card',
    balance: 3917.08,
    available: 83.00,
    monthlySpending: 1958.70,
    pointsEarned: 19587, // Assuming 1% cashback = points
    monthlyRewards: 19.59,
    benefitsUsed: 2,
    benefitsTotal: 6,
    color: 'from-orange-600 to-orange-700',
    cardType: 'credit'
  },
  {
    name: 'Costco Anywhere Visa Card',
    balance: 1722.47,
    available: 273.28,
    monthlySpending: 1287.95,
    pointsEarned: 12880, // Assuming various cashback rates
    monthlyRewards: 32.20, // ~2.5% average at Costco
    benefitsUsed: 3,
    benefitsTotal: 5,
    color: 'from-blue-600 to-blue-700',
    cardType: 'credit'
  },
  {
    name: 'BECU Debit',
    balance: 58.76,
    available: 58.76,
    monthlySpending: 1536.00,
    pointsEarned: 0,
    monthlyRewards: 0,
    benefitsUsed: 1,
    benefitsTotal: 3,
    color: 'from-green-600 to-green-700',
    cardType: 'debit'
  },
  {
    name: 'BECU Savings',
    balance: 0.00,
    available: 0.00,
    monthlySpending: 0,
    pointsEarned: 0,
    monthlyRewards: 0,
    benefitsUsed: 0,
    benefitsTotal: 2,
    color: 'from-teal-600 to-teal-700',
    cardType: 'debit'
  }
];

export default function Yourbenefits({
  currentCardName = 'DISCOVER it Card',
  balance = 3917.08,
  rewardRate = 1,
  pointsEarned = 19587,
  monthlyRewards = 19.59,
  benefitsUsed = 2,
  benefitsTotal = 6
}: BenefitsProps) {
  const [selectedCard, setSelectedCard] = useState<CreditCard>(creditCards[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Your actual financial data
  const monthlyIncome = 3526;
  const totalMonthlySpending = 4782.65;
  const essentialSpending = 4300;
  const nonEssentialSpending = 300;
  const wasteSpending = 182.65;
  
  // Calculate actual deficit (you're spending more than earning)
  const monthlyDeficit = totalMonthlySpending - monthlyIncome; // $1,256.65 deficit
  const isDeficit = monthlyDeficit > 0;

  // Calculate real dollar values based on selected card
  const cashbackAvailable = (selectedCard.pointsEarned * 0.01).toFixed(0);
  const benefitValueCaptured = selectedCard.monthlyRewards;
  const benefitValueRemaining = selectedCard.cardType === 'credit' ? 50 : 0; // Estimate unused benefits
  const percentCaptured = Math.round((selectedCard.benefitsUsed / selectedCard.benefitsTotal) * 100);
  
  // Total credit card debt
  const totalCreditDebt = 3917.08 + 1722.47;
  
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-100">
      {/* Header with Warning if overspending */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${isDeficit ? 'bg-red-50' : 'bg-green-50'}`}>
            {isDeficit ? (
              <AlertCircle className="text-red-600" size={20} />
            ) : (
              <Gift className="text-green-600" size={20} />
            )}
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">Your Benefits</h2>
            {isDeficit ? (
              <p className="text-xs text-red-600 font-medium">⚠️ Spending ${monthlyDeficit.toFixed(0)} more than income</p>
            ) : (
              <p className="text-xs text-green-600 font-medium">You're saving real money! 💪</p>
            )}
          </div>
        </div>
        
        {/* Dropdown */}
        <div className="relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-sm text-gray-600 flex items-center gap-1 hover:text-gray-900 transition px-3 py-2 rounded-lg hover:bg-gray-50"
          >
            {selectedCard.name}
            <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isDropdownOpen && (
            <>
              <div 
                className="fixed inset-0 z-10" 
                onClick={() => setIsDropdownOpen(false)}
              />
              
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
                {creditCards.map((card) => (
                  <button
                    key={card.name}
                    onClick={() => {
                      setSelectedCard(card);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition flex items-center justify-between ${
                      selectedCard.name === card.name ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-900">{card.name}</p>
                      <p className="text-xs text-gray-500">
                        {card.cardType === 'credit' ? 'Balance' : 'Available'}: ${card.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </p>
                    </div>
                    {selectedCard.name === card.name && (
                      <CheckCircle2 size={16} className="text-blue-600" />
                    )}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Financial Overview - Show deficit or rewards */}
      {isDeficit ? (
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-4 mb-4 border border-red-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Monthly deficit</p>
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold text-red-600">-${monthlyDeficit.toFixed(0)}</p>
                <span className="text-sm text-gray-600 font-medium">over budget</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">
                Income: ${monthlyIncome} | Spending: ${totalMonthlySpending.toFixed(0)}
              </p>
              <p className="text-xs text-red-600 font-medium mt-1">
                💳 Total credit debt: ${totalCreditDebt.toFixed(0)}
              </p>
            </div>
            <div className="text-center">
              <TrendingDown className="text-red-500 mb-1" size={32} />
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-bold hover:bg-red-700 transition">
                Cut Spending
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 mb-4 border border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Ready to use right now</p>
              <div className="flex items-baseline gap-2">
                <p className="text-3xl font-bold text-gray-900">${cashbackAvailable}</p>
                <span className="text-sm text-green-600 font-medium">in cashback</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">
                Plus ${benefitValueRemaining} in unused benefits
              </p>
            </div>
            <div className="text-center">
              <Sparkles className="text-yellow-500 mb-1" size={32} />
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-bold hover:bg-green-700 transition">
                Use It Now
              </button>
            </div>
          </div>
        </div>
      )}
      
      <div className="grid grid-cols-3 gap-4">
        {/* Card Visual with Real Value */}
        <div className="col-span-1">
          <div className={`relative bg-gradient-to-br ${selectedCard.color} rounded-2xl p-4 text-white overflow-hidden aspect-[1.6/1]`}>
            <div className={`absolute top-0 right-0 w-32 h-32 ${selectedCard.color.split(' ')[0].replace('from-', 'bg-')} opacity-20 rounded-full -mr-16 -mt-16`}></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="w-8 h-6 bg-yellow-400 rounded mb-4"></div>
              </div>
              <div>
                <p className="text-xs opacity-80 mb-1 flex items-center gap-1">
                  {selectedCard.cardType === 'credit' ? 'Balance' : 'Available'} <Eye size={10} />
                </p>
                <p className="text-xl font-bold mb-2">${selectedCard.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
                <div className="flex justify-between items-end">
                  <p className="text-xs opacity-80">
                    {selectedCard.cardType === 'credit' 
                      ? `Avail: $${selectedCard.available.toFixed(0)}`
                      : '****'
                    }
                  </p>
                  <div className="text-xs font-bold">
                    {selectedCard.name.includes('VISA') ? 'VISA' : 
                     selectedCard.name.includes('DISCOVER') ? 'DISCOVER' : 'DEBIT'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Progress & Spending Breakdown */}
        <div className="col-span-2 space-y-4">
          {/* Monthly Spending Breakdown */}
          <div className="bg-blue-50 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-semibold text-gray-900">Monthly Spending Overview</h4>
              <TrendingUp className="text-blue-600" size={16} />
            </div>
            
            <div className="space-y-2 mb-3">
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">Essential</span>
                <span className="font-medium">${essentialSpending}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: `${(essentialSpending / totalMonthlySpending) * 100}%` }}
                />
              </div>
              
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">Non-essential</span>
                <span className="font-medium">${nonEssentialSpending}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-400 rounded-full"
                  style={{ width: `${(nonEssentialSpending / totalMonthlySpending) * 100}%` }}
                />
              </div>
              
              <div className="flex justify-between text-xs">
                <span className="text-gray-600">Waste</span>
                <span className="font-medium text-red-600">${wasteSpending.toFixed(2)}</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-red-400 rounded-full"
                  style={{ width: `${(wasteSpending / totalMonthlySpending) * 100}%` }}
                />
              </div>
            </div>
            
            {isDeficit && (
              <div className="flex items-center gap-2 text-sm text-red-600 font-medium">
                <AlertCircle size={16} />
                <span>Cut ${monthlyDeficit.toFixed(0)}/mo to break even!</span>
              </div>
            )}
          </div>

          {/* Card-Specific Actions */}
          <div className="bg-yellow-50 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-semibold text-gray-900">
                {selectedCard.cardType === 'credit' ? 'Card Benefits' : 'Savings Tips'}
              </h4>
              <Clock className="text-yellow-600" size={16} />
            </div>
            
            {selectedCard.cardType === 'credit' ? (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">Cashback earned this month</span>
                  <button className="text-xs font-bold text-green-600 hover:text-green-700">
                    ${selectedCard.monthlyRewards.toFixed(2)} →
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">Pay down balance</span>
                  <button className="text-xs font-bold text-blue-600 hover:text-blue-700">
                    ${selectedCard.balance.toFixed(0)} →
                  </button>
                </div>
                {selectedCard.available < 500 && (
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-red-600 font-medium">⚠️ Low credit available</span>
                    <span className="text-xs font-bold text-red-600">
                      ${selectedCard.available.toFixed(0)}
                    </span>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">Build emergency fund</span>
                  <button className="text-xs font-bold text-green-600 hover:text-green-700">
                    Save $500 →
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">Transfer to savings</span>
                  <button className="text-xs font-bold text-blue-600 hover:text-blue-700">
                    Auto-save →
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Reality Check Footer */}
      <div className="mt-4 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
        {isDeficit ? (
          <p className="text-sm text-gray-700">
            <span className="font-bold text-red-700">Action needed:</span> You're spending 
            <span className="font-bold text-red-600"> ${monthlyDeficit.toFixed(0)} more</span> than you earn monthly. 
            Focus on cutting waste (${wasteSpending.toFixed(0)}) and reducing non-essentials (${nonEssentialSpending}).
          </p>
        ) : (
          <p className="text-sm text-gray-700">
            <span className="font-bold text-purple-700">Great job:</span> You're earning 
            <span className="font-bold text-green-600"> ${(benefitValueCaptured * 12).toLocaleString()}</span> annually in rewards! 
            Keep maximizing your benefits. 🎉
          </p>
        )}
      </div>
    </div>
  );
}