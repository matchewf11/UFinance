import React from 'react';
import { Sparkles, TrendingUp } from 'lucide-react';

interface PersonalizedSuggestionCardProps {
    cardName: string;
    benefit: string;
    description: string;
    potentialValue: string;
    matchPercentage: string;
    icon: React.ReactNode;
}

const PersonalizedSuggestionCard: React.FC<PersonalizedSuggestionCardProps> = ({
    cardName,
    benefit,
    description,
    potentialValue,
    matchPercentage,
    icon
}) => {
    return (
        <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-xl p-5 text-white shadow-md hover:shadow-lg transition-shadow">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    {icon}
                    <span className="font-semibold text-xs">{cardName}</span>
                </div>
                <div className="bg-white/30 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-semibold">
                    {matchPercentage}
                </div>
            </div>

            {/* Benefit Title */}
            <h3 className="text-base font-bold mb-2">{benefit}</h3>

            {/* Description */}
            <p className="text-white/95 text-xs mb-3 leading-relaxed line-clamp-2">
                {description}
            </p>

            {/* Potential Value */}
            <div className="flex items-center gap-2 mb-3 bg-white/10 backdrop-blur-sm rounded-lg p-2">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs">Potential Value</span>
                <span className="text-lg font-bold ml-auto">{potentialValue}</span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
                <button className="flex-1 bg-white/20 backdrop-blur-sm hover:bg-white/30 py-2 rounded-lg text-xs font-medium transition-colors">
                    Learn More
                </button>
                <button className="flex-1 bg-white hover:bg-gray-100 text-indigo-600 py-2 rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-1">
                    Add <Sparkles className="w-3 h-3" />
                </button>
            </div>
        </div>
    );
};

export default PersonalizedSuggestionCard;
