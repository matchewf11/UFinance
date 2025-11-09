import React from 'react';
import { ChevronDown, Clock, Sparkles, TrendingUp } from 'lucide-react';
import BrowseRewardsSubcard from './BrowseRewardsSubcard';

const BrowseRewardsContainer: React.FC = () => {
     const recommendations = [
    {
      id: 1,
      title: "Delta Air Lines",
      amount: 100,
      points: 10000,
      badge: "Best Value",
      badgeColor: "bg-green-500",
      reason: "You get 25% more value than similar rewards",
      icon: <TrendingUp className="w-4 h-4" />,
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Carnival Cruise Lines",
      amount: 100,
      points: 10000,
      badge: "Trending",
      badgeColor: "bg-blue-500",
      reason: "Popular with travelers who booked cruises recently",
      icon: <Sparkles className="w-4 h-4" />,
      image: "https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Southwest Airlines",
      amount: 100,
      points: 15000,
      badge: "Expiring Soon",
      badgeColor: "bg-orange-500",
      reason: "Your points expire in 45 days - maximize their value",
      icon: <Clock className="w-4 h-4" />,
      image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=400&h=250&fit=crop"
    }
  ];

    const sampleComponents = recommendations.map(entry => 
        <BrowseRewardsSubcard
            name={entry.title}
            logo={entry.image}
            amount={entry.amount}
            points={entry.points}
            badge={entry.badge}
            badgeColor={entry.badgeColor}
            badgeIcon={entry.icon}
            key={entry.id}
        >
            
        </BrowseRewardsSubcard>
    );

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                {/*Header*/}
                <div className="flex items-center gap-2">
                    <h2 className="text-xl font-semibold">Recommended for Members Like You</h2>
                </div>
            </div>

            <div className="flex flex-wrap gap-4 p-4">
                {sampleComponents}
                
                {/* Add as many as needed - they'll automatically wrap */}
            </div>
        </div>
    );
}

export default BrowseRewardsContainer;