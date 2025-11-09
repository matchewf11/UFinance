import React, { useState } from 'react';
import Image from 'next/image';
import { Sparkles, TrendingUp, Clock, ChevronDown, ChevronUp, BarChart3, AlertTriangle, Car, Coffee } from 'lucide-react';
import BrowseRewardsSubcard from './BrowseRewardsSubcard';

const BrowseRewardsContainer: React.FC = () => {
  const [expandedRewardCards, setExpandedRewardCards] = useState<Record<string, boolean>>({});


  const restaurantRewards = [
    {
      id: 4,
      title: "Olive Garden",
      amount: 25,
      points: 3500,
      badge: "Popular",
      badgeColor: "bg-purple-500",
      reason: "Frequently redeemed by members",
      icon: <Sparkles className="w-4 h-4" />,
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Olive_Garden_Logo.svg/1200px-Olive_Garden_Logo.svg.png",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Olive_Garden_Logo.svg/1200px-Olive_Garden_Logo.svg.png"
    },
    {
      id: 5,
      title: "Chipotle",
      amount: 20,
      points: 2800,
      badge: "Best Value",
      badgeColor: "bg-green-500",
      reason: "Most points saved per dollar",
      icon: <TrendingUp className="w-4 h-4" />,
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Chipotle_Mexican_Grill_logo.svg/800px-Chipotle_Mexican_Grill_logo.svg.png",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Chipotle_Mexican_Grill_logo.svg/800px-Chipotle_Mexican_Grill_logo.svg.png"
    },
    {
      id: 6,
      title: "Starbucks",
      amount: 15,
      points: 2000,
      badge: "Quick Redeem",
      badgeColor: "bg-amber-500",
      reason: "Perfect for your morning routine",
      icon: <Clock className="w-4 h-4" />,
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/400px-Starbucks_Corporation_Logo_2011.svg.png",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/400px-Starbucks_Corporation_Logo_2011.svg.png"
    },
    {
      id: 7,
      title: "Texas Roadhouse",
      amount: 30,
      points: 4000,
      badge: "New",
      badgeColor: "bg-pink-500",
      reason: "Just added to rewards catalog",
      icon: <Sparkles className="w-4 h-4" />,
      image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Texas_Roadhouse.svg/1200px-Texas_Roadhouse.svg.png",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Texas_Roadhouse.svg/1200px-Texas_Roadhouse.svg.png"
    }
  ];

    const restaurantComponents = restaurantRewards.map(entry => 
        <BrowseRewardsSubcard
            name={entry.title}
            logo={entry.image}
            amount={entry.amount}
            points={entry.points}
            badge={entry.badge}
            badgeColor={entry.badgeColor}
            badgeIcon={entry.icon}
            key={entry.id}
            isRedeemable={true}
        >
            
        </BrowseRewardsSubcard>
    );

    return (
        <div>
            {/* Enhanced Personalized Suggestions Section */}
            <div className="mb-10">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-purple-500" />
                        <h2 className="text-lg font-semibold text-gray-900">Personalized for You</h2>
                    </div>
                    <div className="bg-gradient-to-r from-orange-100 to-red-100 px-3 py-1 rounded-full">
                        <span className="text-orange-700 text-sm font-medium flex items-center gap-1">
                            <AlertTriangle size={14} />
                            $47 in unused rewards
                        </span>
                    </div>
                </div>

                {/* AI Summary Box */}
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-4 mb-8">
                    <div className="flex items-start gap-3">
                        <div className="bg-indigo-600 rounded-lg p-2 flex-shrink-0">
                            <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <p className="text-gray-800 text-sm">
                                Based on your spending patterns, these rewards could save you money. I found <span className="font-bold text-indigo-600">2 benefits</span> that could save you <span className="font-bold text-indigo-600">$740/year</span>.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Enhanced Credit Card Style Suggestion Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Capital One Savor Card - Credit Card Style */}
                    <div className="group">
                        <div className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-2xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-[420px]">
                            {/* Credit Card Background Pattern */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-indigo-600/30"></div>
                            <div className="absolute top-4 right-4 w-20 h-20 bg-white/5 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
                            
                            {/* Card Header */}
                            <div className="relative z-10 flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    {/* Credit Card Chip */}
                                    <div className="w-10 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg">
                                        <div className="w-6 h-4 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-sm"></div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg tracking-wide">CAPITAL ONE</div>
                                        <div className="text-xs text-white/80 uppercase tracking-widest">SAVOR REWARDS</div>
                                    </div>
                                </div>
                                <div className="bg-emerald-500/90 backdrop-blur-sm px-3 py-1 rounded-full border border-emerald-400/50">
                                    <span className="text-xs font-bold text-white">94% MATCH</span>
                                </div>
                            </div>

                            {/* Card Number Style */}
                            <div className="relative z-10 mb-4">
                                <div className="text-lg font-mono tracking-widest text-white/90 mb-2">•••• •••• •••• 5429</div>
                            </div>

                            {/* Main Content */}
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
                                    5% Cash Back on Dining
                                </h3>
                                <p className="text-white/80 text-sm mb-4 leading-relaxed">
                                    Perfect match for your $540/month food spending. Earn 5% back on restaurants, cafes, and takeout.
                                </p>

                                <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 mb-4 border border-white/10">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <TrendingUp size={16} className="text-emerald-400" />
                                            <span className="text-sm text-white/90">Annual Savings</span>
                                        </div>
                                        <span className="text-2xl font-bold text-emerald-400">$320</span>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <button className="w-full bg-white/10 backdrop-blur-sm hover:bg-white/20 py-3 rounded-lg text-sm font-semibold transition-all duration-200 border border-white/20 hover:border-white/30">
                                        Learn More About This Card
                                    </button>
                                </div>

                                <button
                                    onClick={() => setExpandedRewardCards(prev => ({ ...prev, 'savor': !prev.savor }))}
                                    className="w-full flex items-center justify-center gap-2 text-white/70 hover:text-white text-sm py-2 transition-colors"
                                >
                                    <BarChart3 size={16} />
                                    View Your Spending Analysis
                                    {expandedRewardCards.savor ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                </button>
                            </div>
                        </div>

                        {/* Expandable Spending Chart */}
                        {expandedRewardCards.savor && (
                            <div className="mt-4 bg-gray-50 rounded-xl p-4 border border-gray-200">
                                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                    <Coffee size={16} className="text-purple-500" />
                                    Your Food Spending Breakdown
                                </h4>
                                <div className="space-y-3">
                                    {[
                                        { category: 'Restaurants', amount: 420, percent: 45, color: 'bg-purple-500' },
                                        { category: 'Coffee Shops', amount: 180, percent: 19, color: 'bg-purple-400' },
                                        { category: 'Delivery', amount: 280, percent: 30, color: 'bg-purple-300' },
                                        { category: 'Groceries', amount: 60, percent: 6, color: 'bg-purple-200' }
                                    ].map(item => (
                                        <div key={item.category} className="flex items-center gap-3">
                                            <div className="w-20 text-sm text-gray-600">{item.category}</div>
                                            <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                                                <div 
                                                    className={`h-full ${item.color} transition-all duration-500`}
                                                    style={{ width: `${item.percent}%` }}
                                                />
                                            </div>
                                            <div className="w-16 text-sm text-gray-900 font-medium text-right">${item.amount}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
                                    <div className="text-sm text-purple-800">
                                        <span className="font-semibold">Potential monthly savings: $27</span> · 
                                        Based on 5% cashback on $540 food spending
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Amex Gold Card - Uber Themed Design */}
                    <div className="group">
                        <div className="relative bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-500 rounded-2xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden h-[420px]">
                            {/* Uber Logo Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/10"></div>
                            <div className="absolute top-1/2 right-6 -translate-y-1/2 opacity-25">
                                <Image 
                                    src="https://www.svgrepo.com/show/473816/uber.svg" 
                                    alt="Uber Logo" 
                                    width={120}
                                    height={120}
                                    className="object-contain filter brightness-0 invert"
                                />
                            </div>
                            <div className="absolute bottom-0 right-0 w-40 h-40 bg-black/5 rounded-full blur-3xl"></div>
                            
                            {/* Card Header */}
                            <div className="relative z-10 flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                    {/* Credit Card Chip */}
                                    <div className="w-10 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center shadow-lg">
                                        <div className="w-6 h-4 bg-gradient-to-br from-gray-500 to-gray-700 rounded-sm"></div>
                                    </div>
                                    <div>
                                        <div className="font-bold text-lg tracking-wide text-white">AMERICAN EXPRESS</div>
                                        <div className="text-xs text-white/90 uppercase tracking-widest">GOLD CARD</div>
                                    </div>
                                </div>
                                <div className="bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full border border-black/30">
                                    <span className="text-xs font-bold text-white">88% MATCH</span>
                                </div>
                            </div>

                            {/* Card Number Style */}
                            <div className="relative z-10 mb-4">
                                <div className="text-lg font-mono tracking-widest text-white/90 mb-2">•••• •••••• •8431</div>
                            </div>

                            {/* Main Content */}
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-3">
                                    <Car size={20} className="text-black" />
                                    <h3 className="text-xl font-bold text-white">
                                        $10 Uber Cash Credit
                                    </h3>
                                </div>
                                <p className="text-white/90 text-sm mb-4 leading-relaxed">
                                    Monthly credit automatically applied to your Uber rides. Based on your $180/month rideshare spending.
                                </p>

                                <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 mb-4 border border-black/20">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <TrendingUp size={16} className="text-white" />
                                            <span className="text-sm text-white/90">Annual Value</span>
                                        </div>
                                        <span className="text-2xl font-bold text-white">$120</span>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <button className="w-full bg-black/20 backdrop-blur-sm hover:bg-black/30 py-3 rounded-lg text-sm font-semibold transition-all duration-200 border border-black/30 hover:border-black/40 text-white">
                                        Learn More About This Benefit
                                    </button>
                                </div>

                                <button
                                    onClick={() => setExpandedRewardCards(prev => ({ ...prev, 'amex': !prev.amex }))}
                                    className="w-full flex items-center justify-center gap-2 text-white/80 hover:text-white text-sm py-2 transition-colors"
                                >
                                    <BarChart3 size={16} />
                                    View Transportation Analysis
                                    {expandedRewardCards.amex ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                                </button>
                            </div>
                        </div>

                        {/* Expandable Spending Chart */}
                        {expandedRewardCards.amex && (
                            <div className="mt-4 bg-gray-50 rounded-xl p-4 border border-gray-200">
                                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                    <Car size={16} className="text-orange-500" />
                                    Your Transportation Spending
                                </h4>
                                <div className="space-y-3">
                                    {[
                                        { category: 'Uber/Lyft', amount: 180, percent: 72, color: 'bg-orange-500' },
                                        { category: 'Gas', amount: 45, percent: 18, color: 'bg-orange-400' },
                                        { category: 'Parking', amount: 25, percent: 10, color: 'bg-orange-300' }
                                    ].map(item => (
                                        <div key={item.category} className="flex items-center gap-3">
                                            <div className="w-20 text-sm text-gray-600">{item.category}</div>
                                            <div className="flex-1 bg-gray-200 rounded-full h-2 overflow-hidden">
                                                <div 
                                                    className={`h-full ${item.color} transition-all duration-500`}
                                                    style={{ width: `${item.percent}%` }}
                                                />
                                            </div>
                                            <div className="w-16 text-sm text-gray-900 font-medium text-right">${item.amount}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
                                    <div className="text-sm text-orange-800">
                                        <span className="font-semibold">Monthly credit: $10</span> · 
                                        Covers 5.6% of your rideshare spending automatically
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Restaurant Rewards Section */}
            <div>
                <div className="flex items-center gap-2 mb-4">
                    <h2 className="text-lg font-semibold text-gray-900">Ready to Redeem</h2>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                        Within your points
                    </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {restaurantComponents}
                </div>
            </div>
        </div>
    );
}

export default BrowseRewardsContainer;