"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TrendingUp, Award, Users, DollarSign, Info, Settings, ChevronLeft, ChevronRight, Home } from 'lucide-react';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const pathname = usePathname();

  const mainMenuItems = [
    { name: 'Dashboard', icon: Home, href: '/' },
    { name: 'Rewards', icon: Award, href: '/rewards' },
    { name: 'Groups', icon: Users, href: '/social' },
    { name: 'Transactions', icon: DollarSign, href: '/transactions' },
    { name: 'Insights', icon: TrendingUp, href: '/insights' },
  ];

  const otherMenuItems = [
    { name: 'Settings', icon: Settings, href: '/settings' },
    { name: 'Get Help', icon: Info, href: '/help' },
  ];

  return (
    <aside className={`${isCollapsed ? 'w-20' : 'w-64'} bg-gray-900 text-white ${isCollapsed ? 'px-2 py-6' : 'p-6'} flex flex-col transition-all duration-300 relative sticky top-0 h-screen`}>
      {/* Logo and Collapse Button */}
      <div className="mb-12 flex items-center justify-between">
        {!isCollapsed && (
          <h1 className="text-2xl font-bold transition-all duration-200">
            IFinance
          </h1>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`w-8 h-8 bg-gray-800 border border-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-700 transition ${isCollapsed ? 'mx-auto' : ''}`}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
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
                    className={`${isCollapsed ? 'px-2 py-3' : 'px-4 py-3'} flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} rounded-lg transition ${
                      isActive ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`}
                    title={isCollapsed ? item.name : undefined}
                  >
                    <Icon size={20} className="flex-shrink-0" />
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
                    className={`${isCollapsed ? 'px-2 py-3' : 'px-4 py-3'} flex items-center ${isCollapsed ? 'justify-center' : 'gap-3'} rounded-lg transition ${
                      isActive ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800'
                    }`}
                    title={isCollapsed ? item.name : undefined}
                  >
                    <Icon size={20} className="flex-shrink-0" />
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
