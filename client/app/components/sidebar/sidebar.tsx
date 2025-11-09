"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TrendingUp, Award, Users, DollarSign, Gift, Info, Settings, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const pathname = usePathname();

  const mainMenuItems = [
    { name: 'Dashboard', icon: TrendingUp, href: '/' },
    { name: 'Rewards', icon: Award, href: '/rewards' },
    { name: 'Social', icon: Users, href: '/social' },
    { name: 'Transactions', icon: DollarSign, href: '/transactions' },
    { name: 'Insights', icon: TrendingUp, href: '/insights' },
  ];

  const otherMenuItems = [
    { name: 'Integrations', icon: Gift, href: '/integrations' },
    { name: 'Settings', icon: Settings, href: '/settings' },
    { name: 'Get Help', icon: Info, href: '/help' },
  ];

  return (
    <aside className={`${isCollapsed ? 'w-20' : 'w-64'} bg-gray-900 text-white p-6 flex flex-col transition-all duration-300 relative`}>
      {/* Collapse Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-8 w-6 h-6 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center hover:bg-gray-700 transition z-10"
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      {/* Logo */}
      <div className="mb-12 overflow-hidden">
        <h1 className={`text-2xl font-bold transition-opacity duration-200 ${isCollapsed ? 'opacity-0' : 'opacity-100'}`}>
          {isCollapsed ? 'U' : 'UFinance'}
        </h1>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1">
        {/* Main Menu */}
        <div className="mb-8">
          {!isCollapsed && <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Main</p>}
          <ul className="space-y-2">
            {mainMenuItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href);

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`px-4 py-3 flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} rounded-lg transition ${
                      isActive ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`}
                    title={isCollapsed ? item.name : undefined}
                  >
                    <Icon size={20} />
                    {!isCollapsed && <span>{item.name}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        
        {/* Other Menu */}
        <div>
          {!isCollapsed && <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Other</p>}
          <ul className="space-y-2">
            {otherMenuItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.href && pathname?.startsWith(item.href);

              return (
                <li key={item.name}>
                  <Link
                    href={item.href ?? '#'}
                    className={`px-4 py-3 flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} rounded-lg transition ${
                      isActive ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`}
                    title={isCollapsed ? item.name : undefined}
                  >
                    <Icon size={20} />
                    {!isCollapsed && <span>{item.name}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </aside>
  );
}