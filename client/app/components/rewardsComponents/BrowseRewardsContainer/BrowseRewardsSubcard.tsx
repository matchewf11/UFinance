import { ChevronRight } from 'lucide-react';
import React from 'react';

interface BrowseRewardsSubcardInterface {
    name: string;
    points: number;
    amount: number;
    logo: string;
    badgeIcon: React.ReactNode;
    badge: string;
    badgeColor: string;
}

const BrowseRewardsSubcard = ({name, points, amount, logo, badgeIcon, badge, badgeColor}: BrowseRewardsSubcardInterface) => {
    return (
        <div className='border border-neutral-300 rounded-[12px] relative'>
            {/* {<img src="" alt="" />} */}

            {/* Badge */}
            <div className={`absolute top-3 left-3 ${badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1.5`}>
                {badgeIcon}
                {badge}
            </div>

            <div className='w-50 h-50 bg-amber-700  rounded-t-[12px]'></div>
            <div className='p-2'>
                <div className='font-bold text-sm'>${amount} {name}</div>
                <div className="text-gray-600 text-sm">{points} points</div>
                <div className='flex justify-center mt-2'>
                    <button
                        type="button"
                        className='p-2 bg-[#60a5fa] text-white rounded-[24px] hover:cursor-pointer flex items-center justify-center gap-2 group w-full'
                    >
                        Redeem Now <ChevronRight className='w-4 h-4 group-hover:translate-x-1 transition-transform'></ChevronRight>
                    </button>
                </div>
                
            </div>
            
        </div>
    );
}

export default BrowseRewardsSubcard;