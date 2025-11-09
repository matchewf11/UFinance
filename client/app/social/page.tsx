"use client";

import React from 'react';
import Sidebar from '../components/sidebar/sidebar';
import { Trophy, Flame, Users, MessageCircle, Target, Info } from 'lucide-react';

export default function SocialPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-6 lg:p-8 space-y-10 max-w-[1600px] mx-auto">
        {/* Your Profile Card */}
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100">
          <div className="text-sm text-gray-600 mb-4">Your Profile</div>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-200" />
              <div className="text-2xl font-semibold text-gray-900">Dohn Joe</div>
            </div>
            <div className="rounded-2xl bg-blue-50 px-5 py-4 text-right w-full md:w-auto">
              <div className="text-3xl font-bold text-gray-900">8400 points</div>
              <div className="mt-2 text-xs text-green-700 flex items-center justify-end gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>
                  With rewards you&apos;ve saved <span className="font-semibold">$286</span> this month!
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Group Card */}
        <section className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100">
          <div className="text-sm text-gray-600 mb-4">Groups</div>

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-200" />
              <div>
                <div className="text-2xl font-semibold text-gray-900">UW Classmates</div>
                <div className="text-xs text-gray-500">8 Members</div>
              </div>
            </div>

            <div className="rounded-2xl bg-blue-50 px-5 py-4 text-right w-full md:w-auto">
              <div className="text-3xl font-bold text-gray-900">26,067 points</div>
              <div className="mt-2 text-xs text-green-700 flex items-center justify-end gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>
                  With rewards your group saved <span className="font-semibold">$623</span> this month!
                </span>
              </div>
            </div>
          </div>

          {/* Actions moved into Groups card */}
          <div className="flex items-center justify-end gap-3 mb-6">
            <button className="px-5 py-2.5 rounded-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium">
              Create Group
            </button>
            <button className="px-5 py-2.5 rounded-full bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium">
              Enter Invite
            </button>
          </div>

          <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6">
            <div className="text-sm text-gray-700 mb-2">As a group, save $1,000 this month</div>
            <div className="h-3 rounded-full bg-white border border-gray-200 overflow-hidden">
              <div className="h-full bg-green-500 rounded-full" style={{ width: '62%' }} />
            </div>
            <div className="mt-4 text-sm text-gray-600">5/5 have used their rewards, well done!</div>
          </div>
        </section>

        {/* Extended Features Section */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Leaderboard & Challenges */}
          <div className="lg:col-span-2 space-y-8">
            {/* Leaderboard */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-gray-800">
                  <Trophy size={18} />
                  <h2 className="font-semibold">Leaderboard</h2>
                </div>
                <div className="text-xs text-gray-500">This month</div>
              </div>
              <ul className="divide-y divide-gray-100">
                {[
                  { name: 'Alex', points: 1540, badge: 'Savings Star' },
                  { name: 'Priya', points: 1410, badge: 'Explorer' },
                  { name: 'Jordan', points: 1200, badge: 'Connector' },
                  { name: 'Sam', points: 980 },
                  { name: 'Riley', points: 870 }
                ].map((m, idx) => (
                  <li key={m.name} className="flex items-center gap-4 py-3">
                    <div className="w-8 text-center text-gray-400 font-medium">{idx + 1}</div>
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 font-semibold">
                      {m.name[0]}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{m.name}</div>
                      <div className="text-xs text-gray-500">{m.badge ?? 'Member'}</div>
                    </div>
                    <div className="text-gray-900 font-semibold">{m.points} pts</div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-2 text-gray-800">
                  <Flame size={16} />
                  <h3 className="font-medium">Weekly Challenge</h3>
                </div>
                <p className="text-sm text-gray-600">Use 3 new rewards this week</p>
                <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500" style={{ width: '40%' }} />
                </div>
                <p className="mt-2 text-xs text-gray-500">2/5 completed</p>
              </div>
              <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 mb-2 text-gray-800">
                  <Users size={16} />
                  <h3 className="font-medium">Invite Challenge</h3>
                </div>
                <p className="text-sm text-gray-600">Invite 3 friends to join</p>
                <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-indigo-500" style={{ width: '66%' }} />
                </div>
                <p className="mt-2 text-xs text-gray-500">2 of 3 invites accepted</p>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Community Feed */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4 text-gray-800">
                <MessageCircle size={18} />
                <h2 className="font-semibold">Community</h2>
              </div>
              <ul className="space-y-3 text-sm">
                <li><span className="font-medium">John</span> just redeemed his first cashback! 👏</li>
                <li>5 members used UW student benefits this week!</li>
                <li>Share how you saved this week.</li>
              </ul>
            </div>

            {/* Personal Insights */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4 text-gray-800">
                <Target size={18} />
                <h2 className="font-semibold">Personal Insights</h2>
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between"><span>Your top savings source</span><span className="font-medium">Starbucks</span></div>
                <div className="flex justify-between"><span>Points vs group avg</span><span className="font-medium text-green-600">+12%</span></div>
                <div className="flex justify-between"><span>Unused benefits</span><span className="font-medium text-amber-600">$47</span></div>
              </div>
            </div>

            {/* Wellness Tips */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-3 text-gray-800">
                <Info size={16} />
                <h2 className="font-semibold">Financial Wellness Tips</h2>
              </div>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                {[
                  'Unused memberships cost the average person $200/year.',
                  'Stack credit card rewards with store promos for bigger savings.',
                  'Review subscriptions every month to avoid zombie charges.'
                ].map(t => <li key={t}>{t}</li>)}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
