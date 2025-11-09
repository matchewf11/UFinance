import React from 'react';
import { CreditCard, ChevronDown, Eye } from 'lucide-react';

const MyCardsCard: React.FC = () => {
    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                {/*Header*/}
                <div className="flex items-center gap-2">
                    <CreditCard className="w-6 h-6" />
                    <h2 className="text-xl font-semibold">My Cards</h2>
                </div>
                <button className="flex items-center gap-1 text-gray-400 text-sm">
                    Choose Card
                    <ChevronDown className="w-4 h-4" />
                </button>
            </div>

                {/* Credit Card */}
            <div className="relative w-full aspect-[1.586/1] bg-gradient-to-br from-red-700 to-red-900 rounded-2xl mb-4 overflow-hidden">
                
                {/* Card Content */}
                <div className="relative h-full p-6 flex flex-col justify-between text-white">
                    {/* Balance Section */}
                    <div className='mt-12'>
                        <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs opacity-80">Balance</span>
                        <Eye className="w-4 h-4 opacity-80" />
                        </div>
                        <div className="text-3xl font-bold tracking-wide">
                        $24,098.00
                        </div>
                    </div>

                    {/* Card Network */}
                    <div className="flex justify-end">
                        <div className="bg-white text-blue-600 font-bold text-xl px-3 py-1 rounded italic">
                        VISA
                        </div>
                    </div>
                </div>
            </div>

            {/* Card Details */}
            <div className="space-y-2 text-sm">
                <div className="text-gray-600">Rewards Points (5% Back)</div>
                <div className="font-semibold">3,400</div>
                
                <div className="text-gray-600">APR</div>
                <div className="font-semibold">24.5%</div>
            </div>
        </div>
    );
}

export default MyCardsCard;