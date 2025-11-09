import React from "react";
import { Gift, ChevronDown } from "lucide-react";

const RewardsGoalsCard: React.FC = () => {
    // fix logo to use an image, not an emoji
    const rewards = [
        {
        name: "Applebee's",
        logo: "🍎",
        current: 2400,
        goal: 4000,
        color: "bg-green-600"
        },
        {
        name: "DELTA",
        logo: "✈️",
        current: 2400,
        goal: 10000,
        color: "bg-green-600"
        }
    ];

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                {/*Header*/}
                <div className="flex items-center gap-2">
                    <Gift className="w-6 h-6" />
                    <h2 className="text-xl font-semibold">Rewards Goals</h2>
                </div>
                <button className="flex items-center gap-1 text-gray-400 text-sm">
                    All Accounts
                    <ChevronDown className="w-4 h-4" />
                </button>
            </div>

             {/* Points Display */}
            <div className="mb-6">
                <div className="text-gray-600 text-sm mb-1">Rewards Points</div>
                <div className="text-5xl font-bold">3,400</div>
            </div>

            {/* Rewards List */}
            <div className="space-y-4">
                {rewards.map((reward, index) => (
                <div key={index} className="flex items-center gap-3">
                    {/* Logo */}
                    <div className="text-3xl w-12 flex-shrink-0">
                    {reward.logo}
                    </div>
                    
                    {/* Progress Info */}
                    <div className="flex-1">
                    <div className="text-green-600 font-medium text-sm mb-1">
                        {reward.current.toLocaleString()}/{reward.goal.toLocaleString()}
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                        className={`${reward.color} h-2 rounded-full transition-all`}
                        style={{ width: `${(reward.current / reward.goal) * 100}%` }}
                        />
                    </div>
                    </div>
                </div>
                ))}
                
                {/* Expand Arrow */}
                <div className="flex justify-center pt-2">
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
            </div>
        </div>
    );
}

export default RewardsGoalsCard;