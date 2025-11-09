'use client'

import React from 'react';
import Sidebar from '../components/sidebar/sidebar';
import UiCard from '../components/UiCard/UiCard';
import RewardsGoalsCard from '../components/rewardsComponents/RewardGoalsCard/RewardGoalsCard';

const Rewards:React.FC  = () => {
    return(
        <>
            <div className='bg-white text-black p-4 w-full'>
                <div className='flex flex-row gap-4'>
                    <div className='flex flex-col gap-4 w-80 min-w-80'>
                        {/*Vertical columns*/}
                        <UiCard><RewardsGoalsCard></RewardsGoalsCard></UiCard>
                        <UiCard><RewardsGoalsCard></RewardsGoalsCard></UiCard>
                    </div>
                    <div className='flex-1 min-w-80'>
                        {/*Right side*/}
                        <UiCard><RewardsGoalsCard></RewardsGoalsCard></UiCard>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Rewards;