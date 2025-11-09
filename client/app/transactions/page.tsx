"use client";

import React, { useState } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import { 
  Search, 
  Download, 
  ChevronDown, 
  Star, 
  TrendingUp, 
  CreditCard, 
  MapPin, 
  Clock,
  Award,
  Sparkles,
  Coffee,
  Car,
  ShoppingBag,
  Utensils,
  Gift,
  CheckCircle2
} from 'lucide-react';

interface Transaction {
  id: string;
  date: string;
  time: string;
  merchant: string;
  category: string;
  amount: number;
  card: string;
  location: string;
  rewardRate: number;
  rewardAmount: number;
  isRewardEligible: boolean;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export default function TransactionsPage() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [dateRange, setDateRange] = useState('This Month');
  const [searchTerm, setSearchTerm] = useState('');

  // Mock transaction data with rewards integration
  const transactions: Transaction[] = [
    {
      id: '1',
      date: '2025-11-09',
      time: '2:45 PM',
      merchant: 'Starbucks Coffee',
      category: 'Dining',
      amount: 12.50,
      card: 'Capital One Savor',
      location: 'Seattle, WA',
      rewardRate: 5,
      rewardAmount: 0.63,
      isRewardEligible: true,
      icon: Coffee
    },
    {
      id: '2',
      date: '2025-11-09',
      time: '11:30 AM',
      merchant: 'Uber',
      category: 'Transportation',
      amount: 18.75,
      card: 'Amex Gold',
      location: 'Seattle, WA',
      rewardRate: 10, // $10 credit applied
      rewardAmount: 10.00,
      isRewardEligible: true,
      icon: Car
    },
    {
      id: '3',
      date: '2025-11-08',
      time: '7:20 PM',
      merchant: 'Chipotle Mexican Grill',
      category: 'Dining',
      amount: 14.25,
      card: 'Capital One Savor',
      location: 'Seattle, WA',
      rewardRate: 5,
      rewardAmount: 0.71,
      isRewardEligible: true,
      icon: Utensils
    },
    {
      id: '4',
      date: '2025-11-08',
      time: '3:15 PM',
      merchant: 'Amazon',
      category: 'Shopping',
      amount: 89.99,
      card: 'Chase Freedom',
      location: 'Online',
      rewardRate: 1,
      rewardAmount: 0.90,
      isRewardEligible: true,
      icon: ShoppingBag
    },
    {
      id: '5',
      date: '2025-11-07',
      time: '6:45 PM',
      merchant: 'Whole Foods Market',
      category: 'Groceries',
      amount: 67.33,
      card: 'Amex Gold',
      location: 'Seattle, WA',
      rewardRate: 4,
      rewardAmount: 2.69,
      isRewardEligible: true,
      icon: ShoppingBag
    },
    {
      id: '6',
      date: '2025-11-07',
      time: '12:10 PM',
      merchant: 'Shell Gas Station',
      category: 'Gas',
      amount: 45.20,
      card: 'Chase Freedom',
      location: 'Seattle, WA',
      rewardRate: 1,
      rewardAmount: 0.45,
      isRewardEligible: true,
      icon: Car
    },
    {
      id: '7',
      date: '2025-11-06',
      time: '8:30 PM',
      merchant: 'Netflix',
      category: 'Entertainment',
      amount: 15.49,
      card: 'Chase Sapphire',
      location: 'Subscription',
      rewardRate: 1,
      rewardAmount: 0.15,
      isRewardEligible: false,
      icon: Gift
    }
  ];

  const totalRewardsEarned = transactions.reduce((sum, t) => sum + t.rewardAmount, 0);
  const rewardEligibleTransactions = transactions.filter(t => t.isRewardEligible).length;

  const categories = ['All', 'Dining', 'Transportation', 'Shopping', 'Groceries', 'Gas', 'Entertainment'];

  const filteredTransactions = transactions.filter(transaction => {
    const matchesFilter = selectedFilter === 'All' || transaction.category === selectedFilter;
    const matchesSearch = transaction.merchant.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getRewardBadge = (transaction: Transaction) => {
    if (!transaction.isRewardEligible) return null;
    
    if (transaction.rewardRate === 10) {
      return (
        <div className="flex items-center gap-1 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-700 px-2 py-1 rounded-full text-xs font-semibold border border-orange-200">
          <Star size={10} className="fill-current" />
          Credit Applied
        </div>
      );
    }
    
    return (
      <div className="flex items-center gap-1 bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold border border-green-200">
        <Sparkles size={10} className="fill-current" />
        {transaction.rewardRate}% Back
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-6 lg:p-8 max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Transactions</h1>
          <p className="text-gray-600">Track your spending and rewards across all your cards</p>
        </div>

        {/* Rewards Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Rewards Earned */}
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Award size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-white/90">Rewards Earned</h3>
                <p className="text-xs text-white/70">This month</p>
              </div>
            </div>
            <div className="text-3xl font-bold mb-2">${totalRewardsEarned.toFixed(2)}</div>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <TrendingUp size={14} />
              <span>+23% from last month</span>
            </div>
          </div>

          {/* Reward-Eligible Transactions */}
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-white/90">Optimized Purchases</h3>
                <p className="text-xs text-white/70">Earning rewards</p>
              </div>
            </div>
            <div className="text-3xl font-bold mb-2">{rewardEligibleTransactions}</div>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <span>of {transactions.length} transactions</span>
            </div>
          </div>

          {/* Best Performing Card */}
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <CreditCard size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-white/90">Top Card</h3>
                <p className="text-xs text-white/70">Most rewards</p>
              </div>
            </div>
            <div className="text-lg font-bold mb-2">Capital One Savor</div>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <span>$1.34 earned</span>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-xl border border-gray-100 p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="appearance-none bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>

              {/* Date Range */}
              <div className="relative">
                <select
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="appearance-none bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 pr-10 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option>This Month</option>
                  <option>Last Month</option>
                  <option>Last 3 Months</option>
                  <option>This Year</option>
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search merchants..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
                />
              </div>

              {/* Export Button */}
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition">
                <Download size={16} />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Transactions List */}
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <div className="divide-y divide-gray-100">
            {filteredTransactions.map((transaction) => {
              const IconComponent = transaction.icon;
              return (
                <div key={transaction.id} className={`p-6 hover:bg-gray-50 transition ${transaction.isRewardEligible ? 'bg-gradient-to-r from-green-50/50 to-transparent border-l-4 border-green-400' : ''}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      {/* Icon and Merchant Info */}
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          transaction.isRewardEligible 
                            ? 'bg-gradient-to-br from-green-100 to-emerald-100 text-green-600' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          <IconComponent size={20} />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 flex items-center gap-2">
                            {transaction.merchant}
                            {transaction.isRewardEligible && (
                              <Sparkles size={14} className="text-green-500" />
                            )}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <MapPin size={12} />
                              {transaction.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={12} />
                              {transaction.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <CreditCard size={12} />
                              {transaction.card}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Transaction Amount and Rewards */}
                    <div className="text-right">
                      <div className="font-bold text-lg text-gray-900">-${transaction.amount.toFixed(2)}</div>
                      <div className="flex items-center gap-2 justify-end mt-1">
                        {getRewardBadge(transaction)}
                        {transaction.isRewardEligible && (
                          <div className="text-sm text-green-600 font-semibold">
                            +${transaction.rewardAmount.toFixed(2)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Rewards Optimization Tip */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <Award size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-blue-900 mb-2">💡 Optimization Tip</h3>
              <p className="text-blue-800 text-sm mb-3">
                Great job! You&apos;re earning rewards on {Math.round((rewardEligibleTransactions / transactions.length) * 100)}% of your transactions this month. 
                Consider using your Capital One Savor card for more dining purchases to maximize your 5% cashback.
              </p>
              <button className="text-blue-600 text-sm font-semibold hover:text-blue-700 transition">
                View Reward Optimization →
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}