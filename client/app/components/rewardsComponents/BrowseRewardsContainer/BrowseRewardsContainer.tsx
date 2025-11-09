import React, { useState } from 'react';
import { Sparkles, TrendingUp, Clock, ChevronDown, ChevronUp, BarChart3, AlertTriangle, CreditCard, Car, Coffee } from 'lucide-react';
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

                {/* Enhanced Suggestion Cards with Expandable Charts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Capital One Savor Card */}
                    <div className="group">
                        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <CreditCard size={20} />
                                    <span className="font-semibold text-sm">Capital One</span>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                    <span className="text-xs font-semibold">94% match</span>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-3">Savor Rewards from Capital One</h3>
                            <p className="text-white/90 text-sm mb-4 leading-relaxed">
                                Based on your frequent food spending, you&apos;d save an average of $320/year using your 5% back on food card.
                            </p>

                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <TrendingUp size={16} />
                                        <span className="text-sm">Potential Value</span>
                                    </div>
                                    <span className="text-2xl font-bold">$320/year</span>
                                </div>
                            </div>

                            <div className="mb-4">
                                <button className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 py-2.5 rounded-lg text-sm font-medium transition-colors">
                                    Learn More
                                </button>
                            </div>

                            <button
                                onClick={() => setExpandedRewardCards(prev => ({ ...prev, 'savor': !prev.savor }))}
                                className="w-full flex items-center justify-center gap-2 text-white/80 hover:text-white text-sm py-2"
                            >
                                <BarChart3 size={16} />
                                View Spending Analysis
                                {expandedRewardCards.savor ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </button>
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

                    {/* Amex Gold Card */}
                    <div className="group">
                        <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <CreditCard size={20} />
                                    <span className="font-semibold text-sm">Amex Gold</span>
                                </div>
                                <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                    <span className="text-xs font-semibold">88% match</span>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold mb-3">Uber Cash Monthly Credit</h3>
                            <p className="text-white/90 text-sm mb-4 leading-relaxed">
                                You spent $180 on rideshare last month. Your card provides $10/month in Uber Cash, saving you $120/year.
                            </p>

                            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <TrendingUp size={16} />
                                        <span className="text-sm">Potential Value</span>
                                    </div>
                                    <span className="text-2xl font-bold">$120/year</span>
                                </div>
                            </div>

                            <div className="mb-4">
                                <button className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 py-2.5 rounded-lg text-sm font-medium transition-colors">
                                    Learn More
                                </button>
                            </div>

                            <button
                                onClick={() => setExpandedRewardCards(prev => ({ ...prev, 'amex': !prev.amex }))}
                                className="w-full flex items-center justify-center gap-2 text-white/80 hover:text-white text-sm py-2"
                            >
                                <BarChart3 size={16} />
                                View Transportation Analysis
                                {expandedRewardCards.amex ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </button>
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