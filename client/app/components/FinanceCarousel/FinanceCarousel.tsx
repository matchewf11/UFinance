import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

type PersonalizedInsight = {
  userSpending: string;
  benefitMatch: string;
  potentialValue: string;
};

type UsageStrategy = {
  title: string;
  description: string;
};

type CreditCardRecommendation = {
  name: string;
  institution: string;
  benefits: string[];
  estimatedSavings: number; // in dollars
  actionText: string;
  color: "blue" | "yellow" | "green" | "red" | "purple" | "pink";
  personalizedInsights: PersonalizedInsight[];
  usageStrategies: UsageStrategy[];
};

const recommendations: CreditCardRecommendation[] = [
  {
    name: "Sound Visa® Rewards+",
    institution: "Sound Credit Union",
    benefits: ["2% cash back on groceries & gas", "1.5% on all other purchases", "No annual fee"],
    estimatedSavings: 235,
    actionText: "Claim Rewards",
    color: "blue",
    personalizedInsights: [
      {
        userSpending: "You spent $450 on groceries last month",
        benefitMatch: "This card provides 2% cash back on all grocery purchases",
        potentialValue: "$108/year"
      },
      {
        userSpending: "You filled up your tank 8 times last month",
        benefitMatch: "Get 2% back on gas stations with no caps on earnings",
        potentialValue: "$96/year"
      }
    ],
    usageStrategies: [
      {
        title: "Maximize grocery rewards",
        description: "Use this card for all grocery purchases including online grocery delivery"
      },
      {
        title: "Stack with store loyalty",
        description: "Combine with store loyalty programs for double savings"
      }
    ]
  },
  {
    name: "BECU Boeing Visa®",
    institution: "Boeing Employees Credit Union",
    benefits: ["3x points on Boeing purchases", "2x points on gas & groceries", "Employee perks included"],
    estimatedSavings: 420,
    actionText: "Learn More",
    color: "purple",
    personalizedInsights: [
      {
        userSpending: "As a Boeing employee, maximize your benefits",
        benefitMatch: "Earn 3x points on all Boeing Store and travel purchases",
        potentialValue: "$280/year"
      },
      {
        userSpending: "You spend $600/month on groceries and gas",
        benefitMatch: "2x points on everyday essentials with no annual fee",
        potentialValue: "$144/year"
      }
    ],
    usageStrategies: [
      {
        title: "Use employee discount portals",
        description: "Access exclusive Boeing employee discounts through the card portal"
      },
      {
        title: "Redeem for travel",
        description: "Points are worth 25% more when redeemed for travel through BECU"
      }
    ]
  },
  {
    name: "Capital One Savor",
    institution: "Capital One",
    benefits: ["4% cash back on dining & entertainment", "3% on groceries", "$300 signup bonus"],
    estimatedSavings: 520,
    actionText: "Apply Now",
    color: "red",
    personalizedInsights: [
      {
        userSpending: "You dine out 12 times per month on average",
        benefitMatch: "Get 4% back on all dining and entertainment purchases",
        potentialValue: "$288/year"
      },
      {
        userSpending: "Your streaming and entertainment spending is $150/month",
        benefitMatch: "4% back on entertainment including streaming services",
        potentialValue: "$72/year"
      }
    ],
    usageStrategies: [
      {
        title: "Maximize dining rewards",
        description: "Use for all restaurants, bars, and food delivery services"
      },
      {
        title: "Entertainment purchases",
        description: "Pay for all streaming services and concert tickets with this card"
      }
    ]
  },
];

const cardColorMap: Record<CreditCardRecommendation["color"], string> = {
  blue: "bg-gradient-to-r from-blue-400 to-blue-600",
  yellow: "bg-gradient-to-r from-yellow-400 to-yellow-600",
  green: "bg-gradient-to-r from-green-400 to-green-600",
  red: "bg-gradient-to-r from-red-400 to-red-600",
  purple: "bg-gradient-to-r from-purple-400 to-purple-600",
  pink: "bg-gradient-to-r from-pink-400 to-pink-600",
};

export default function FinanceCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Bank options for the dropdown
  const bankOptions = [
    { 
      name: "BECU", 
      fullName: "Boeing Employees' Credit Union",
      description: "Employee-focused banking with competitive rates"
    },
    { 
      name: "Sound Credit Union", 
      fullName: "Sound Credit Union",
      description: "Local credit union with member benefits"
    },
    { 
      name: "Discover", 
      fullName: "Discover Bank",
      description: "Online banking with cashback rewards"
    },
    { 
      name: "Capital One", 
      fullName: "Capital One",
      description: "Digital banking with innovative features"
    }
  ];

  const handleBankSelect = (bankName: string) => {
    console.log(`Selected bank: ${bankName}`);
    
    // Bank-specific data
    const bankData: Record<string, { savings: number; value: string; color: CreditCardRecommendation["color"] }> = {
      "BECU": { savings: 320, value: "$180", color: "purple" },
      "Sound Credit Union": { savings: 275, value: "$165", color: "blue" },
      "Discover": { savings: 385, value: "$220", color: "orange" as CreditCardRecommendation["color"] },
      "Capital One": { savings: 340, value: "$195", color: "red" }
    };

    const selectedBankData = bankData[bankName] || { savings: 250, value: "$150", color: "green" as const };
    
    // Create new recommendation based on selected bank
    const newRecommendation: CreditCardRecommendation = {
      name: `${bankName} Rewards Card`,
      institution: bankName,
      benefits: [
        "2% cash back on all purchases", 
        "No annual fee", 
        `Exclusive ${bankName} member benefits`
      ],
      estimatedSavings: selectedBankData.savings,
      actionText: "Apply Now",
      color: selectedBankData.color,
      personalizedInsights: [
        {
          userSpending: `Based on your spending with ${bankName}`,
          benefitMatch: "This card maximizes rewards on your current spending patterns",
          potentialValue: `${selectedBankData.value}/year`
        }
      ],
      usageStrategies: [
        {
          title: "Maximize bank synergy",
          description: `Use with your existing ${bankName} accounts for bonus benefits`
        }
      ]
    };

    // Add to recommendations array
    recommendations.push(newRecommendation);
    
    // Switch to the new card
    setCurrentIndex(recommendations.length - 1);
    setIsDropdownOpen(false);

    // Show success feedback
    console.log(`Added ${bankName} card to recommendations`);
  };

  const prevCard = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? recommendations.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 150);
  };

  const nextCard = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === recommendations.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 150);
  };

  const currentCard = recommendations[currentIndex];

  return (
    <div className="mb-6 relative">
      <div className="text-2xl font-bold text-gray-900 border-b border-gray-300 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span>Get more out of</span>
            <div className="relative inline-block" style={{ minWidth: '280px' }}>
              <div
                className={`transition-all duration-300 transform ${
                  isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
                }`}
              >
                {currentCard.institution}
              </div>
            </div>
          </div>
          {/* Bank Integration Button */}
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2"
            >
              <span>Integrate a bank</span>
              <ChevronDown size={16} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu - Positioned at component root level */}
      {isDropdownOpen && (
        <div className="absolute top-16 right-0 w-72 sm:w-80 bg-white border border-gray-200 rounded-xl shadow-2xl z-[99999] animate-in slide-in-from-top-2 duration-200">
          <div className="py-3">
            <div className="px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100 bg-gray-50">
              Select Bank to Integrate
            </div>
            <div className="max-h-64 overflow-y-auto">
              {bankOptions.map((bank, index) => (
                <button
                  key={bank.name}
                  onClick={() => handleBankSelect(bank.name)}
                  className="w-full text-left px-5 py-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200 group border-b border-gray-50 last:border-b-0 focus:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 group-hover:text-blue-900 transition-colors duration-200 mb-1">
                        {bank.name}
                      </div>
                      <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-200 mb-2">
                        {bank.fullName}
                      </div>
                      <div className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-200">
                        {bank.description}
                      </div>
                    </div>
                    <div className="ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                        <ChevronDown size={14} className="text-white rotate-[-90deg]" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                    <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                      Quick Setup
                    </div>
                    <div className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                      Instant Sync
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 text-xs text-gray-500 text-center">
              Bank-level security • Powered by Plaid
            </div>
          </div>
        </div>
      )}

      {/* Overlay to close dropdown when clicking outside */}
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-[99998]" 
          onClick={() => setIsDropdownOpen(false)}
        />
      )}
      <div className="mb-10"></div>
      <div className="bg-white rounded-xl p-6 mb-20 border border-gray-100">
        {/* Card Name */}
        <div className="mb-4">
          <h2 className={`text-lg font-bold text-gray-900 transition-opacity duration-300 ${
            isAnimating ? 'opacity-0' : 'opacity-100'
          }`}>
            {currentCard.name}
          </h2>
        </div>

        {/* Main Card Row */}
        <div className="rounded-xl flex items-start gap-8">
          {/* Left Column: Card Box + Estimated Savings side by side */}
          <div className="flex gap-4 flex-shrink-0">
            <div
              className={`w-90 h-56 rounded-xl shadow-lg transition-all duration-300 ${
                isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
              } ${cardColorMap[currentCard.color]} relative overflow-hidden`}
            >
              {/* Add card branding based on institution */}
              <div className="absolute top-4 left-4 text-white">
                <div className="text-xs font-semibold opacity-80 uppercase tracking-wider">
                  {currentCard.institution === "Sound Credit Union" && "Sound"}
                  {currentCard.institution === "Boeing Employees Credit Union" && "BECU"}
                  {currentCard.institution === "Capital One" && "Capital One"}
                </div>
                <div className="text-lg font-bold mt-1">
                  {currentCard.name.split(" ").slice(-1)[0]}
                </div>
              </div>
              {/* Card chip */}
              <div className="absolute top-20 left-4 w-12 h-10 bg-yellow-300 rounded-md opacity-80"></div>
              {/* Card number placeholder */}
              <div className="absolute bottom-12 left-4 text-white text-sm font-mono opacity-80">
                •••• •••• •••• ••••
              </div>
              {/* Visa/Mastercard logo area */}
              <div className="absolute bottom-4 right-4 text-white text-xs font-bold opacity-80">
                VISA
              </div>
            </div>
            <div className={`flex space-y-3 flex-col items-start transition-opacity duration-300 ${
              isAnimating ? 'opacity-0' : 'opacity-100'
            }`}>
              <div className="text-sm text-gray-500">Estimated savings</div>
              <div className="text-5xl font-bold text-green-600">
                ${currentCard.estimatedSavings}
              </div>
              <ul className="list-disc list-inside text-gray-700">
                {currentCard.benefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
              <button className="py-2.5 px-4 bg-gray-900 hover:bg-gray-800 text-white rounded-lg text-sm font-semibold transition w-max">
                {currentCard.actionText}
              </button>
            </div>
          </div>

          {/* Right Column: Why this card is recommended */}
          <div className={`flex-1 space-y-6 transition-opacity duration-300 ${
            isAnimating ? 'opacity-0' : 'opacity-100'
          }`}>
            {/* Why We Recommend This Card */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
                Why We Recommend This Card
              </h3>
              <div className="space-y-3">
                {currentCard.personalizedInsights.map((insight, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-600 mb-1">{insight.userSpending}</p>
                    <p className="text-sm font-medium text-gray-900 mb-1">{insight.benefitMatch}</p>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-gray-500">Potential Value:</span>
                      <span className="text-sm font-bold text-green-600">{insight.potentialValue}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-4 text-gray-500 text-sm">
          <button onClick={prevCard} className="hover:text-gray-900 transition">◀</button>
          <span>{currentIndex + 1} of {recommendations.length}</span>
          <button onClick={nextCard} className="hover:text-gray-900 transition">▶</button>
        </div>
      </div>
    </div>
  );
}