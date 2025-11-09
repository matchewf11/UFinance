"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  TrendingUp,
  Award,
  CreditCard,
  DollarSign,
  Gift,
  Info,
  Settings
} from "lucide-react";

type MenuItem = {
  name: string;
  icon: React.ComponentType<{ size?: number }>;
  route: string;
};

export default function Sidebar() {
  const router = useRouter();
  const [activeItem, setActiveItem] = React.useState<string>("Dashboard");

  const mainMenuItems: MenuItem[] = [
    { name: "Dashboard", icon: TrendingUp, route: "/" },
    { name: "Rewards", icon: Award, route: "/rewards" },
    { name: "Cards", icon: CreditCard, route: "/cards" },
    { name: "Transactions", icon: DollarSign, route: "/transactions" },
    { name: "Insights", icon: TrendingUp, route: "/insights" }
  ];

  const otherMenuItems: MenuItem[] = [
    { name: "Integrations", icon: Gift, route: "/integrations" },
    { name: "Settings", icon: Settings, route: "/settings" },
    { name: "Get Help", icon: Info, route: "/help" }
  ];

  const handleNav = (item: MenuItem) => {
    setActiveItem(item.name);
    router.push(item.route);
  };

  return (
    <aside className="w-64 bg-gray-900 text-white p-6 flex flex-col">
      <div className="mb-12">
        <h1 className="text-2xl font-bold">UFinance</h1>
      </div>

      <nav className="flex-1">
        <div className="mb-8">
          {!isCollapsed && <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Main</p>}
          <ul className="space-y-2">
            {mainMenuItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.name === activeItem;

              return (
                <li
                  key={item.name}
                  onClick={() => handleNav(item)}
                  className={`
                    px-4 py-3 flex items-center gap-3 rounded-lg cursor-pointer transition
                    ${isActive
                      ? "bg-gray-800 text-white"
                      : "text-gray-400 hover:text-white hover:bg-gray-800"
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

        <div>
          {!isCollapsed && <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Other</p>}
          <ul className="space-y-2">
            {otherMenuItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.name === activeItem;

              return (
                <li
                  key={item.name}
                  onClick={() => handleNav(item)}
                  className={`
                    px-4 py-3 flex items-center gap-3 rounded-lg cursor-pointer transition
                    ${isActive
                      ? "bg-gray-800 text-white"
                      : "text-gray-400 hover:text-white hover:bg-gray-800"
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
