import { ChevronRight, DotIcon } from 'lucide-react';
import React from 'react';

interface BrowseRewardsSubcardInterface {
    name: string;
    points: number;
    amount: number;
    logo: string;
    badgeIcon: React.ReactNode;
    badge: string;
    badgeColor: string;
    reason: string;
}

const BrowseRewardsSubcard = ({name, points, amount, logo, badgeIcon, badge, badgeColor, reason}: BrowseRewardsSubcardInterface) => {
    return (
        <div className='border border-neutral-300 rounded-[12px] w-full'>
            <div className='flex flex-row gap-2'>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.visa.ca%2Fdam%2FVCOM%2Fregional%2Fna%2Fcanada%2Fcard-products%2Fimages%2Fvisa-gold-card-800x450.jpg&f=1&nofb=1&ipt=3466636c360dc951148c85235093302ca793d654f19623bc6e6c68cc694dd13b" width="200" alt="" />
                {/* {<div className='w-50 h-30 bg-amber-700  rounded-tl-[12px]'></div>} */}
                <div>
                    <div className={`${badgeColor} text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1.5`}>
                        {badgeIcon}
                        {badge}
                    </div>
                    <div className='font-bold'>${amount} {name}</div>
                    <div className="text-gray-600">{points} points</div>
                </div>
            </div>
            
            <div className='p-2'>
                <div className='bg-gradient-to-br from-blue-50 to-blue-200 border border-blue-100 rounded-lg mb-4 p-2'>
                    <div className='text-blue-950 font-medium border-dashed border-b'>{reason}</div>
                    <div className='text-blue-950 font-medium'>Value: <span className='text-green-700 font-bold'>$500</span></div>
                </div>
                
                <div className='flex justify-center gap-2 mt-2'>
                    <button type="button" className='p-2 bg-white text-neutral-700 border rounded-[12px] hover:cursor-pointer flex items-center justify-center gap-2 group w-full'>See Benefits</button>
                    <button
                        type="button"
                        className='p-2 bg-[#60a5fa] text-white rounded-[12px] hover:cursor-pointer flex items-center justify-center gap-2 group w-full'
                    >
                        Redeem Now <ChevronRight className='w-4 h-4 group-hover:translate-x-1 transition-transform'></ChevronRight>
                    </button>
                </div>
                
            </div>
            
        </div>
    );
}

export default BrowseRewardsSubcard;