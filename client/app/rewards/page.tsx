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

                    {/* Explore Rewards Section */}
                    <div className='lg:col-span-3 mt-6'>
                        <div className='bg-white rounded-2xl p-6 shadow-sm border border-gray-100'>
                            <div className='mb-6'>
                                <h2 className='text-xl font-semibold text-gray-900 mb-2'>Explore Rewards</h2>
                                <p className='text-gray-600'>Discover rewards by category and find the best deals for your lifestyle</p>
                            </div>

                            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                                {/* Travel Category */}
                                <div className='group cursor-pointer'>
                                    <div className='bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-blue-200'>
                                        <div className='w-12 h-12 bg-blue-500 rounded-lg mx-auto mb-3 flex items-center justify-center'>
                                            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8' />
                                            </svg>
                                        </div>
                                        <h3 className='font-semibold text-gray-900 mb-1'>Travel</h3>
                                        <p className='text-sm text-gray-600'>Hotels, flights & more</p>
                                        <div className='mt-2 text-xs text-blue-600 font-medium'>45+ offers</div>
                                    </div>
                                </div>

                                {/* Dining Category */}
                                <div className='group cursor-pointer'>
                                    <div className='bg-gradient-to-br from-orange-50 to-red-100 rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-orange-200'>
                                        <div className='w-12 h-12 bg-orange-500 rounded-lg mx-auto mb-3 flex items-center justify-center'>
                                            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4' />
                                            </svg>
                                        </div>
                                        <h3 className='font-semibold text-gray-900 mb-1'>Dining</h3>
                                        <p className='text-sm text-gray-600'>Restaurants & takeout</p>
                                        <div className='mt-2 text-xs text-orange-600 font-medium'>32+ offers</div>
                                    </div>
                                </div>

                                {/* Entertainment Category */}
                                <div className='group cursor-pointer'>
                                    <div className='bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-purple-200'>
                                        <div className='w-12 h-12 bg-purple-500 rounded-lg mx-auto mb-3 flex items-center justify-center'>
                                            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z' />
                                            </svg>
                                        </div>
                                        <h3 className='font-semibold text-gray-900 mb-1'>Entertainment</h3>
                                        <p className='text-sm text-gray-600'>Movies, events & shows</p>
                                        <div className='mt-2 text-xs text-purple-600 font-medium'>28+ offers</div>
                                    </div>
                                </div>

                                {/* Merchandise Category */}
                                <div className='group cursor-pointer'>
                                    <div className='bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-green-200'>
                                        <div className='w-12 h-12 bg-green-500 rounded-lg mx-auto mb-3 flex items-center justify-center'>
                                            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' />
                                            </svg>
                                        </div>
                                        <h3 className='font-semibold text-gray-900 mb-1'>Merch</h3>
                                        <p className='text-sm text-gray-600'>Shopping & retail</p>
                                        <div className='mt-2 text-xs text-green-600 font-medium'>67+ offers</div>
                                    </div>
                                </div>

                                {/* Cash Back Category */}
                                <div className='group cursor-pointer'>
                                    <div className='bg-gradient-to-br from-amber-50 to-yellow-100 rounded-xl p-6 text-center hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-amber-200'>
                                        <div className='w-12 h-12 bg-amber-500 rounded-lg mx-auto mb-3 flex items-center justify-center'>
                                            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1' />
                                            </svg>
                                        </div>
                                        <h3 className='font-semibold text-gray-900 mb-1'>Cash Back</h3>
                                        <p className='text-sm text-gray-600'>Direct cash rewards</p>
                                        <div className='mt-2 text-xs text-amber-600 font-medium'>23+ offers</div>
                                    </div>
                                </div>
                            </div>

                            {/* View All Button */}
                            <div className='mt-6 text-center'>
                                <button className='bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium'>
                                    View All Categories
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Rewards;