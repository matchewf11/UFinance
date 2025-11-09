import React from 'react';
import { CreditCard, Eye } from 'lucide-react';

const MyCardsCard: React.FC = () => {
    return (
        <div>
            <div className="flex items-center gap-2 mb-6">
                <CreditCard className="w-5 h-5 text-indigo-600" />
                <h2 className="text-lg font-semibold text-gray-900">My Card</h2>
            </div>

            {/* Credit Card */}
            <div className="relative w-full aspect-[1.586/1] bg-gradient-to-br from-red-600 via-red-700 to-red-900 rounded-xl mb-4 overflow-hidden shadow-lg">
                
                {/* Card Content */}
                <div className="relative h-full p-5 flex flex-col justify-between text-white">
                    {/* Balance Section */}
                    <div className='mt-8'>
                        <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs opacity-70 font-medium">Balance</span>
                            <Eye className="w-3 h-3 opacity-70" />
                        </div>
                        <div className="text-2xl font-bold tracking-wide">
                            $24,098.00
                        </div>
                    </div>

                    {/* Card Network */}
                    <div className="flex justify-end">
                        <div className="bg-white text-blue-600 font-bold text-lg px-3 py-1 rounded shadow-sm">
                            VISA
                        </div>
                    </div>
                </div>
            </div>

            {/* Card Details */}
            <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="text-xs text-gray-500 mb-1">Rewards Points</div>
                    <div className="font-bold text-gray-900">3,400</div>
                    <div className="text-xs text-green-600 font-medium">5% Back</div>
                </div>
                
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="text-xs text-gray-500 mb-1">APR</div>
                    <div className="font-bold text-gray-900">24.5%</div>
                </div>
            </div>
        </div>
    );
}

export default MyCardsCard;