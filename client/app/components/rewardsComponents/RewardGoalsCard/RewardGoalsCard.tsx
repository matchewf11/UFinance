import React from "react";
import { Award } from "lucide-react";

const RewardsGoalsCard: React.FC = () => {
    // fix logo to use an image, not an emoji
    const rewards = [
        {
        name: "Applebee's",
        logo: "https://flynn.com/wp-content/themes/flynn-restaurant-group/blocks/growth-timeline/assets/Apple.png",
        current: 4000,
        goal: 4000,
        color: "bg-gradient-to-r from-green-500 to-emerald-500"
        },
        {
        name: "Delta Airlines",
        logo: "https://simg.nicepng.com/png/small/64-644236_delta-air-lines-have-gone-through-more-than.png",
        current: 2400,
        goal: 10000,
        color: "bg-gradient-to-r from-blue-500 to-indigo-500"
        }
    ];

    return (
        <div>
            <div className="flex items-center gap-2 mb-6">
                <Award className="w-5 h-5 text-indigo-600" />
                <h2 className="text-lg font-semibold text-gray-900">My Goals</h2>
            </div>

            {/* Points Display */}
            <div className="mb-6 p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-100">
                <div className="text-gray-600 text-xs font-medium mb-1">Available Points</div>
                <div className="text-4xl font-bold text-gray-900">4,000</div>
            </div>

            {/* Rewards List */}
            <div className="space-y-4">
                {rewards.map((reward, index) => {
                    const isComplete = reward.current >= reward.goal;
                    const percentage = Math.min((reward.current / reward.goal) * 100, 100);
                    
                    return (
                        <div key={index} className="p-4 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-300 transition-colors">
                            <div className="flex items-center gap-3 mb-3">
                                {/* Logo */}
                                <div className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm flex-shrink-0 overflow-hidden">
                                    <img 
                                        src={reward.logo} 
                                        alt={`${reward.name} logo`}
                                        className="w-full h-full object-contain"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            e.currentTarget.parentElement!.style.background = 'linear-gradient(to bottom right, rgb(165 180 252), rgb(192 132 252))';
                                        }}
                                    />
                                </div>
                                
                                {/* Info */}
                                <div className="flex-1 min-w-0">
                                    <div className="font-semibold text-gray-900 text-sm">{reward.name}</div>
                                    <div className="text-xs text-gray-500">
                                        {reward.current.toLocaleString()} / {reward.goal.toLocaleString()} pts
                                    </div>
                                </div>

                                {isComplete && (
                                    <div className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                        Ready!
                                    </div>
                                )}
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full bg-gray-200 rounded-full h-2 mb-3 overflow-hidden">
                                <div 
                                    className={`${reward.color} h-2 rounded-full transition-all duration-500 shadow-sm`}
                                    style={{ width: `${percentage}%` }}
                                />
                            </div>

                            {isComplete && (
                                <button
                                    type="button"
                                    className="w-full py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-lg font-medium transition-all shadow-sm hover:shadow-md"
                                >
                                    Redeem Now
                                </button>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default RewardsGoalsCard;