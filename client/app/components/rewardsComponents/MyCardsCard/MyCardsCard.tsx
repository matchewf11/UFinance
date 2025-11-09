import React, { useState } from 'react';
import { CreditCard, Eye, ChevronDown } from 'lucide-react';

const MyCardsCard: React.FC = () => {
    const [selectedView, setSelectedView] = useState('My Card');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const viewOptions = [
        { value: 'My Card', label: 'My Card', icon: CreditCard },
        { value: 'All Cards', label: 'All Cards', icon: CreditCard },
        { value: 'Active Cards', label: 'Active Cards', icon: CreditCard },
        { value: 'Credit Cards', label: 'Credit Cards', icon: CreditCard },
        { value: 'Debit Cards', label: 'Debit Cards', icon: CreditCard },
    ];

    const handleViewChange = (view: string) => {
        setSelectedView(view);
        setIsDropdownOpen(false);
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-indigo-600" />
                    <div className="relative">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center gap-2 text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors duration-200"
                        >
                            {selectedView}
                            <ChevronDown 
                                size={16} 
                                className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} 
                            />
                        </button>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                                <div className="py-2">
                                    {viewOptions.map((option) => {
                                        const IconComponent = option.icon;
                                        return (
                                            <button
                                                key={option.value}
                                                onClick={() => handleViewChange(option.value)}
                                                className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition-colors duration-150 flex items-center gap-2 ${
                                                    selectedView === option.value ? 'bg-indigo-50 text-indigo-600' : 'text-gray-900'
                                                }`}
                                            >
                                                <IconComponent size={16} />
                                                {option.label}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Overlay to close dropdown when clicking outside */}
                        {isDropdownOpen && (
                            <div 
                                className="fixed inset-0 z-40" 
                                onClick={() => setIsDropdownOpen(false)}
                            />
                        )}
                    </div>
                </div>
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