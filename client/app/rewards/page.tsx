'use client'

import React from 'react';
import Sidebar from '../components/sidebar/sidebar';
import RewardsGoalsCard from '../components/rewardsComponents/RewardGoalsCard/RewardGoalsCard';
import MyCardsCard from '../components/rewardsComponents/MyCardsCard/MyCardsCard';
import BrowseRewardsContainer from '../components/rewardsComponents/BrowseRewardsContainer/BrowseRewardsContainer';

const Rewards:React.FC  = () => {
    return(
        <div className='flex min-h-screen bg-gray-50'>
            <Sidebar />
            <main className='flex-1 p-8 max-w-[1600px] mx-auto'>
                {/* Page Header */}
                <div className='mb-8'>
                    <h1 className='text-3xl font-bold text-gray-900 mb-2'>Rewards</h1>
                    <p className='text-gray-600'>Maximize your benefits and redeem rewards</p>
                </div>

                {/* Main Content Grid */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
                    {/* Top Section - My Goals (Full Width) */}
                    <div className='lg:col-span-2'>
                        <div className='bg-white rounded-2xl p-6 shadow-sm border border-gray-100'>
                            <RewardsGoalsCard />
                        </div>
                    </div>

                    {/* Right Column - My Card */}
                    <div className='lg:col-span-1'>
                        <div className='bg-white rounded-2xl p-6 shadow-sm border border-gray-100'>
                            <MyCardsCard />
                        </div>
                    </div>

                    {/* Bottom Section - Personalized & Browse (Full Width) */}
                    <div className='lg:col-span-3'>
                        <div className='bg-white rounded-2xl p-6 shadow-sm border border-gray-100'>
                            <BrowseRewardsContainer />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Rewards;