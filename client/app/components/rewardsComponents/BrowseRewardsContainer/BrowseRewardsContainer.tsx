import React from 'react';
import { ChevronDown } from 'lucide-react';
import BrowseRewardsSubcard from './BrowseRewardsSubcard';

const BrowseRewardsContainer: React.FC = () => {
     const rewardsData = [
        {
            id: 1,
            name: "Uber",
            points: 2000,
            amount: 25,
            logo: "/uber-logo.png"
        },
        {
            id: 2,
            name: "Uber",
            points: 5000,
            amount: 50,
            logo: "/uber-logo.png"
        },
        {
            id: 3,
            name: "Carnival Cruise Lines",
            points: 10000,
            amount: 100,
            logo: "/carnival-logo.png"
        },
        {
            id: 4,
            name: "Southwest Airlines",
            points: 15000,
            amount: 150,
            logo: "/southwest-logo.png"
        },
        {
            id: 5,
            name: "Delta Air Lines",
            points: 10000,
            amount: 100,
            logo: "/delta-logo.png"
        },
        {
            id: 6,
            name: "Princess Cruise Line",
            points: 10000,
            amount: 100,
            logo: "/princess-logo.png"
        },
        {
            id: 7,
            name: "AIRBNB",
            points: 10000,
            amount: 100,
            logo: "/airbnb-logo.png"
        }
        ];

    const sampleComponents = rewardsData.map(entry => 
        <BrowseRewardsSubcard
            name={entry.name}
            logo={entry.logo}
            amount={entry.amount}
            points={entry.points}
            key={entry.id}
        >
            
        </BrowseRewardsSubcard>
    );

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                {/*Header*/}
                <div className="flex items-center gap-2">
                    <h2 className="text-xl font-semibold">Browse your rewards</h2>
                </div>
                <div>
                    <button className="flex items-center gap-1 text-gray-400 text-sm">
                                        Travel
                                        <ChevronDown className="w-4 h-4" />
                                    </button>
                </div>
                <div>
                    <button
                        type="button"
                        className='p-2 bg-[#60a5fa] text-white rounded-[24px] hover:cursor-pointer'
                    >
                        Suggest a reward
                    </button>
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