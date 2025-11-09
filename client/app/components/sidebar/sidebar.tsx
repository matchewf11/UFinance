import React from 'react';
import { TrendingUp, Award, CreditCard, DollarSign, Gift, Info, Settings } from 'lucide-react';

export default function Sidebar() {
  const [activeItem, setActiveItem] = React.useState('Dashboard');

  const mainMenuItems = [
    { name: 'Dashboard', icon: TrendingUp },
    { name: 'Rewards', icon: Award },
    { name: 'Cards', icon: CreditCard },
    { name: 'Transactions', icon: DollarSign },
    { name: 'Insights', icon: TrendingUp },
  ];

  const otherMenuItems = [
    { name: 'Integrations', icon: Gift },
    { name: 'Settings', icon: Settings },
    { name: 'Get Help', icon: Info },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white p-6 flex flex-col">
      {/* Logo */}
      <div className="mb-12">
        <h1 className="text-2xl font-bold">UFinance</h1>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1">
        {/* Main Menu */}
        <div className="mb-8">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Main</p>
          <ul className="space-y-2">
            {mainMenuItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.name === activeItem;
              
              return (
                <li
                  key={item.name}
                  onClick={() => setActiveItem(item.name)}
                  className={`
                    px-4 py-3 flex items-center gap-3 rounded-lg cursor-pointer transition
                    ${isActive 
                      ? 'bg-gray-800 text-white' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }
                  `}
                >
                  <Icon size={20} />
                  <span>{item.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
        
        {/* Other Menu */}
        <div>
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Other</p>
          <ul className="space-y-2">
            {otherMenuItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.name === activeItem;
              
              return (
                <li
                  key={item.name}
                  onClick={() => setActiveItem(item.name)}
                  className={`
                    px-4 py-3 flex items-center gap-3 rounded-lg cursor-pointer transition
                    ${isActive 
                      ? 'bg-gray-800 text-white' 
                      : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }
                  `}
                >
                  <Icon size={20} />
                  <span>{item.name}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </aside>
  );
}