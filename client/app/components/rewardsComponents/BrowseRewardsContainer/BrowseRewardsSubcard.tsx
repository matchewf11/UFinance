import React from 'react';

interface BrowseRewardsSubcardInterface {
    name: string;
    points: number;
    amount: number;
    logo: string;
    badgeIcon: React.ReactNode;
    badge: string;
    badgeColor: string;
    isRedeemable?: boolean;
}

const BrowseRewardsSubcard = ({name, points, amount, logo, badgeIcon, badge, badgeColor, isRedeemable = false}: BrowseRewardsSubcardInterface) => {
    return (
        <div className='bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow group relative'>
            {/* Logo Image */}
            <div className='w-full h-32 bg-white flex items-center justify-center p-4 border-b border-gray-200'>
                <img 
                    src={logo} 
                    alt={`${name} logo`}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                        // Fallback to gradient background if logo fails to load
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.parentElement) {
                            e.currentTarget.parentElement.className = 'w-full h-32 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center p-4 border-b border-gray-200';
                        }
                    }}
                />
            </div>

            <div className='p-3'>
                <div className='font-bold text-sm text-gray-900 mb-1'>${amount} {name}</div>
                <div className="text-gray-500 text-xs mb-3">{points.toLocaleString()} points</div>
                
                <button
                    type="button"
                    className={`w-full py-2 ${isRedeemable ? 'bg-green-600 hover:bg-green-700' : 'bg-indigo-600 hover:bg-indigo-700'} text-white rounded-lg text-xs font-medium transition-colors shadow-sm`}
                >
                    {isRedeemable ? 'Redeem Now' : 'Add to Goals'}
                </button>
            </div>
        </div>
    );
}

export default BrowseRewardsSubcard;