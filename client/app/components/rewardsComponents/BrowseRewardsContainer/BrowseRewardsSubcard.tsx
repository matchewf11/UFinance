import React from 'react';

interface BrowseRewardsSubcardInterface {
    name: string;
    points: number;
    amount: number;
    logo: string;
}

const BrowseRewardsSubcard = ({name, points, amount, logo}: BrowseRewardsSubcardInterface) => {
    return (
        <div>
            {/* {<img src="" alt="" />} */}
            <div className='w-50 h-50 bg-amber-700'></div>
            <div className='font-bold text-sm'>${amount} {name}</div>
            <div className="text-gray-600 text-sm">{points} points</div>
        </div>
    );
}

export default BrowseRewardsSubcard;