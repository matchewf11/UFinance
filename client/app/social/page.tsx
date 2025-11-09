"use client";

import React, { useState } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import { Trophy, Flame, Users, Target, ChevronDown, ChevronUp } from 'lucide-react';

export default function SocialPage() {
  const [isChallengesExpanded, setIsChallengesExpanded] = useState(true);
  const [isInsightsExpanded, setIsInsightsExpanded] = useState(true);

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
              <div className="text-3xl font-bold text-gray-900">4000 points</div>
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
          {/* Leaderboard */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-gray-800">
                  <Trophy size={18} />
                  <h2 className="font-semibold">Leaderboard</h2>
                </div>
                <div className="text-xs text-gray-500">This month</div>
              </div>

              {/* Streak Message */}
              <div className="mb-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Flame className="w-5 h-5 text-orange-500" />
                  <span className="font-semibold text-green-800">Amazing! 7 Day Streak</span>
                </div>
                <p className="text-sm text-green-700">
                  Your group is on fire! Everyone&apos;s been maximizing their benefits consistently. Keep it up! 🎉
                </p>
              </div>

              <ul className="divide-y divide-gray-100">
                {[
                  { name: 'Celestin', benefits: '8/8', badge: 'Savings Star' },
                  { name: 'Primitivo', benefits: '8/8', badge: 'Explorer' },
                  { name: 'Preston', benefits: '8/8', badge: 'Connector' },
                  { name: 'Anthony', benefits: '8/8' },
                  { name: 'Matthew', benefits: '8/8' }
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
                    <div className="text-green-600 font-semibold">{m.benefits} benefits</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Achievements */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4 text-gray-800">
                <Trophy size={18} className="text-yellow-500" />
                <h2 className="font-semibold">Achievements</h2>
              </div>
              <div className="space-y-4">
                {/* Achievement 1 */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200">
                  <div className="text-3xl">🏆</div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 text-sm">First Redemption!</div>
                    <div className="text-xs text-gray-600 mt-0.5">Redeemed your first reward</div>
                  </div>
                </div>

                {/* Achievement 2 */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200">
                  <div className="text-3xl">🔥</div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 text-sm">Week Warrior</div>
                    <div className="text-xs text-gray-600 mt-0.5">Used benefits 7 days in a row</div>
                  </div>
                </div>

                {/* Achievement 3 */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                  <div className="text-3xl">💰</div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 text-sm">Savings Master</div>
                    <div className="text-xs text-gray-600 mt-0.5">Saved over $200 this month</div>
                  </div>
                </div>

                {/* Achievement 4 */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200">
                  <div className="text-3xl">⭐</div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 text-sm">Full Stack</div>
                    <div className="text-xs text-gray-600 mt-0.5">Used all 8 available benefits</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Combined Challenges & Insights Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              {/* Challenges Section */}
              <div className="mb-6">
                <button
                  onClick={() => setIsChallengesExpanded(!isChallengesExpanded)}
                  className="w-full flex items-center justify-between mb-4 text-gray-800 hover:text-gray-900"
                >
                  <div className="flex items-center gap-2">
                    <Flame size={18} />
                    <h2 className="font-semibold">Challenges</h2>
                  </div>
                  {isChallengesExpanded ? (
                    <ChevronUp size={18} className="text-gray-500" />
                  ) : (
                    <ChevronDown size={18} className="text-gray-500" />
                  )}
                </button>
                
                {isChallengesExpanded && (
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                      <div className="flex items-center gap-2 mb-2 text-gray-800">
                        <Flame size={14} />
                        <h3 className="font-medium text-sm">Weekly Challenge</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">Use 3 new rewards this week</p>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500" style={{ width: '40%' }} />
                      </div>
                      <p className="mt-2 text-xs text-gray-500">2/5 completed</p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                      <div className="flex items-center gap-2 mb-2 text-gray-800">
                        <Users size={14} />
                        <h3 className="font-medium text-sm">Invite Challenge</h3>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">Invite 3 friends to join</p>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-500" style={{ width: '66%' }} />
                      </div>
                      <p className="mt-2 text-xs text-gray-500">2 of 3 invites accepted</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 mb-6"></div>

              {/* Personal Insights Section */}
              <div>
                <button
                  onClick={() => setIsInsightsExpanded(!isInsightsExpanded)}
                  className="w-full flex items-center justify-between mb-4 text-gray-800 hover:text-gray-900"
                >
                  <div className="flex items-center gap-2">
                    <Target size={18} />
                    <h2 className="font-semibold">Personal Insights</h2>
                  </div>
                  {isInsightsExpanded ? (
                    <ChevronUp size={18} className="text-gray-500" />
                  ) : (
                    <ChevronDown size={18} className="text-gray-500" />
                  )}
                </button>
                
                {isInsightsExpanded && (
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between p-2 rounded hover:bg-gray-50">
                      <span>Your top savings source</span>
                      <span className="font-medium">Starbucks</span>
                    </div>
                    <div className="flex justify-between p-2 rounded hover:bg-gray-50">
                      <span>Points vs group avg</span>
                      <span className="font-medium text-green-600">+12%</span>
                    </div>
                    <div className="flex justify-between p-2 rounded hover:bg-gray-50">
                      <span>Unused benefits</span>
                      <span className="font-medium text-amber-600">$47</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
