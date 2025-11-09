import React from 'react';
import { Sparkles, TrendingUp, Clock } from 'lucide-react';
import BrowseRewardsSubcard from './BrowseRewardsSubcard';
import PersonalizedSuggestionCard from './PersonalizedSuggestionCard';

const BrowseRewardsContainer: React.FC = () => {
  const personalizedSuggestions = [
    {
      id: 1,
      cardName: "Benefits being unused!",
      benefit: "Savor Rewards from Capital One",
      description: "Based on your frequent food spending, you'd save an average of $320/year using your 5% back on food card.",
      potentialValue: "$320/year",
      matchPercentage: "94%",
      icon: <Sparkles className="w-5 h-5" />
    },
    {
      id: 2,
      cardName: "Amex Gold",
      benefit: "Uber Cash Monthly Credit",
      description: "You spent $180 on rideshare last month. This benefit provides $10/month in Uber Cash, saving you $120/year.",
      potentialValue: "$120/year",
      matchPercentage: "88%",
      icon: <Sparkles className="w-5 h-5" />
    }
  ];

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
            {/* Personalized Suggestions Section */}
            <div className="mb-10">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-indigo-600" />
                        <h2 className="text-lg font-semibold text-gray-900">Personalized for You</h2>
                    </div>
                    <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        AI Powered
                    </div>
                </div>

                {/* AI Summary Box */}
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-4 mb-6">
                    <div className="flex items-start gap-3">
                        <div className="bg-indigo-600 rounded-lg p-2 flex-shrink-0">
                            <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <p className="text-gray-800 text-sm">
                                Based on your spending habits and Europe travel goal, I found <span className="font-bold text-indigo-600">4 benefits</span> that could save you <span className="font-bold text-indigo-600">$740/year</span>.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Suggestion Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {personalizedSuggestions.map((suggestion) => (
                        <PersonalizedSuggestionCard
                            key={suggestion.id}
                            cardName={suggestion.cardName}
                            benefit={suggestion.benefit}
                            description={suggestion.description}
                            potentialValue={suggestion.potentialValue}
                            matchPercentage={suggestion.matchPercentage}
                            icon={suggestion.icon}
                        />
                    ))}
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