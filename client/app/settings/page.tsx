'use client'

import React, { useState } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import { User, Bell, Shield, CreditCard, Moon, Sun, Globe, ChevronRight, Save } from 'lucide-react';

const SettingsPage: React.FC = () => {
    const [notifications, setNotifications] = useState({
        spending: true,
        rewards: true,
        bills: false,
        security: true
    });

    const [privacy, setPrivacy] = useState({
        profileVisible: true,
        shareAnalytics: false,
        marketingEmails: true
    });

    const [theme, setTheme] = useState('light');

    return (
        <div className='flex min-h-screen bg-gray-50'>
            <Sidebar />
            <main className='flex-1 p-8 max-w-[1400px] mx-auto'>
                {/* Page Header */}
                <div className='mb-8'>
                    <h1 className='text-3xl font-bold text-gray-900 mb-2'>Settings</h1>
                    <p className='text-gray-600'>Manage your account preferences and privacy settings</p>
                </div>

                {/* Settings Grid */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                    
                    {/* Account Settings */}
                    <div className='bg-white rounded-2xl p-6 shadow-sm border border-gray-100'>
                        <div className='flex items-center gap-3 mb-6'>
                            <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center'>
                                <User className='w-5 h-5 text-blue-600' />
                            </div>
                            <div>
                                <h2 className='text-lg font-semibold text-gray-900'>Account</h2>
                                <p className='text-sm text-gray-600'>Personal information and preferences</p>
                            </div>
                        </div>

                        <div className='space-y-4'>
                            <div className='flex items-center justify-between py-3 border-b border-gray-100'>
                                <div>
                                    <div className='font-medium text-gray-900'>Profile Information</div>
                                    <div className='text-sm text-gray-600'>Update your personal details</div>
                                </div>
                                <ChevronRight className='w-5 h-5 text-gray-400' />
                            </div>
                            
                            <div className='flex items-center justify-between py-3 border-b border-gray-100'>
                                <div>
                                    <div className='font-medium text-gray-900'>Change Password</div>
                                    <div className='text-sm text-gray-600'>Update your account password</div>
                                </div>
                                <ChevronRight className='w-5 h-5 text-gray-400' />
                            </div>

                            <div className='flex items-center justify-between py-3'>
                                <div>
                                    <div className='font-medium text-gray-900'>Two-Factor Authentication</div>
                                    <div className='text-sm text-gray-600'>Add extra security to your account</div>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <span className='text-sm text-green-600 font-medium'>Enabled</span>
                                    <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Notifications */}
                    <div className='bg-white rounded-2xl p-6 shadow-sm border border-gray-100'>
                        <div className='flex items-center gap-3 mb-6'>
                            <div className='w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center'>
                                <Bell className='w-5 h-5 text-purple-600' />
                            </div>
                            <div>
                                <h2 className='text-lg font-semibold text-gray-900'>Notifications</h2>
                                <p className='text-sm text-gray-600'>Choose what alerts you receive</p>
                            </div>
                        </div>

                        <div className='space-y-4'>
                            {Object.entries(notifications).map(([key, value]) => (
                                <div key={key} className='flex items-center justify-between py-2'>
                                    <div>
                                        <div className='font-medium text-gray-900 capitalize'>
                                            {key === 'spending' && 'Spending Alerts'}
                                            {key === 'rewards' && 'Rewards Updates'}
                                            {key === 'bills' && 'Bill Reminders'}
                                            {key === 'security' && 'Security Notifications'}
                                        </div>
                                        <div className='text-sm text-gray-600'>
                                            {key === 'spending' && 'Get notified about unusual spending'}
                                            {key === 'rewards' && 'New rewards and cashback opportunities'}
                                            {key === 'bills' && 'Upcoming bill due dates'}
                                            {key === 'security' && 'Account security and login alerts'}
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setNotifications(prev => ({ ...prev, [key]: !value }))}
                                        className={`relative w-12 h-6 rounded-full transition ${
                                            value ? 'bg-blue-600' : 'bg-gray-300'
                                        }`}
                                    >
                                        <div className={`absolute w-4 h-4 bg-white rounded-full top-1 transition-transform ${
                                            value ? 'translate-x-7' : 'translate-x-1'
                                        }`} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Privacy & Security */}
                    <div className='bg-white rounded-2xl p-6 shadow-sm border border-gray-100'>
                        <div className='flex items-center gap-3 mb-6'>
                            <div className='w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center'>
                                <Shield className='w-5 h-5 text-green-600' />
                            </div>
                            <div>
                                <h2 className='text-lg font-semibold text-gray-900'>Privacy & Security</h2>
                                <p className='text-sm text-gray-600'>Control your data and privacy settings</p>
                            </div>
                        </div>

                        <div className='space-y-4'>
                            {Object.entries(privacy).map(([key, value]) => (
                                <div key={key} className='flex items-center justify-between py-2'>
                                    <div>
                                        <div className='font-medium text-gray-900'>
                                            {key === 'profileVisible' && 'Profile Visibility'}
                                            {key === 'shareAnalytics' && 'Share Analytics'}
                                            {key === 'marketingEmails' && 'Marketing Emails'}
                                        </div>
                                        <div className='text-sm text-gray-600'>
                                            {key === 'profileVisible' && 'Allow others to see your profile'}
                                            {key === 'shareAnalytics' && 'Help improve our services'}
                                            {key === 'marketingEmails' && 'Receive product updates and offers'}
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => setPrivacy(prev => ({ ...prev, [key]: !value }))}
                                        className={`relative w-12 h-6 rounded-full transition ${
                                            value ? 'bg-blue-600' : 'bg-gray-300'
                                        }`}
                                    >
                                        <div className={`absolute w-4 h-4 bg-white rounded-full top-1 transition-transform ${
                                            value ? 'translate-x-7' : 'translate-x-1'
                                        }`} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Appearance */}
                    <div className='bg-white rounded-2xl p-6 shadow-sm border border-gray-100'>
                        <div className='flex items-center gap-3 mb-6'>
                            <div className='w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center'>
                                <Sun className='w-5 h-5 text-amber-600' />
                            </div>
                            <div>
                                <h2 className='text-lg font-semibold text-gray-900'>Appearance</h2>
                                <p className='text-sm text-gray-600'>Customize how UFinance looks</p>
                            </div>
                        </div>

                        <div className='space-y-4'>
                            <div>
                                <div className='font-medium text-gray-900 mb-3'>Theme</div>
                                <div className='grid grid-cols-3 gap-3'>
                                    {['light', 'dark', 'auto'].map((themeOption) => (
                                        <button
                                            key={themeOption}
                                            onClick={() => setTheme(themeOption)}
                                            className={`p-3 rounded-lg border-2 transition ${
                                                theme === themeOption 
                                                    ? 'border-blue-600 bg-blue-50' 
                                                    : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                        >
                                            <div className='flex items-center justify-center mb-2'>
                                                {themeOption === 'light' && <Sun className='w-5 h-5' />}
                                                {themeOption === 'dark' && <Moon className='w-5 h-5' />}
                                                {themeOption === 'auto' && <Globe className='w-5 h-5' />}
                                            </div>
                                            <div className='text-sm font-medium capitalize'>{themeOption}</div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Connected Accounts - Full Width */}
                    <div className='lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100'>
                        <div className='flex items-center gap-3 mb-6'>
                            <div className='w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center'>
                                <CreditCard className='w-5 h-5 text-indigo-600' />
                            </div>
                            <div>
                                <h2 className='text-lg font-semibold text-gray-900'>Connected Accounts</h2>
                                <p className='text-sm text-gray-600'>Manage your linked banks and credit cards</p>
                            </div>
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                            {[
                                { name: 'Chase Checking', type: 'Bank Account', status: 'Connected', color: 'green' },
                                { name: 'Capital One Savor', type: 'Credit Card', status: 'Connected', color: 'green' },
                                { name: 'Sound Credit Union', type: 'Bank Account', status: 'Pending', color: 'yellow' },
                                { name: 'Discover Card', type: 'Credit Card', status: 'Disconnected', color: 'gray' }
                            ].map((account, index) => (
                                <div key={index} className='border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition'>
                                    <div className='flex items-center justify-between mb-2'>
                                        <div className='font-medium text-gray-900'>{account.name}</div>
                                        <div className={`px-2 py-1 rounded text-xs font-medium ${
                                            account.color === 'green' ? 'bg-green-100 text-green-700' :
                                            account.color === 'yellow' ? 'bg-yellow-100 text-yellow-700' :
                                            'bg-gray-100 text-gray-700'
                                        }`}>
                                            {account.status}
                                        </div>
                                    </div>
                                    <div className='text-sm text-gray-600 mb-3'>{account.type}</div>
                                    <button className='text-sm font-medium text-blue-600 hover:text-blue-700'>
                                        {account.status === 'Connected' ? 'Manage' : 
                                         account.status === 'Pending' ? 'Complete Setup' : 'Reconnect'}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Save Button */}
                <div className='mt-8 flex justify-end'>
                    <button className='flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition'>
                        <Save className='w-4 h-4' />
                        Save Changes
                    </button>
                </div>
            </main>
        </div>
    );
};

export default SettingsPage;