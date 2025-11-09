"use client";

import React, { useState } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import { Trophy, Flame, Users, Target, ChevronDown, ChevronUp, CheckCircle, X, Plus, Link, Copy, Check } from 'lucide-react';

export default function SocialPage() {
  const [isChallengesExpanded, setIsChallengesExpanded] = useState(true);
  const [isInsightsExpanded, setIsInsightsExpanded] = useState(true);
  
  // Modal states
  const [showCreateGroupModal, setShowCreateGroupModal] = useState(false);
  const [showEnterInviteModal, setShowEnterInviteModal] = useState(false);
  
  // Form states
  const [groupName, setGroupName] = useState('');
  const [groupDescription, setGroupDescription] = useState('');
  const [inviteCode, setInviteCode] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [isCodeCopied, setIsCodeCopied] = useState(false);

  // Handle create group
  const handleCreateGroup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!groupName.trim()) return;
    
    // Generate a random invite code
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setGeneratedCode(code);
    
    // Here you would typically send the data to your backend
    console.log('Creating group:', { groupName, groupDescription, inviteCode: code });
    
    // Reset form
    setGroupName('');
    setGroupDescription('');
  };

  // Handle enter invite
  const handleEnterInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteCode.trim()) return;
    
    // Here you would typically validate the invite code with your backend
    console.log('Joining group with code:', inviteCode);
    
    // Reset form and close modal
    setInviteCode('');
    setShowEnterInviteModal(false);
    
    // Show success message or redirect
    alert('Successfully joined the group!');
  };

  // Copy invite code to clipboard
  const copyInviteCode = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode);
      setIsCodeCopied(true);
      setTimeout(() => setIsCodeCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-6 lg:p-8 space-y-10 max-w-[1600px] mx-auto">
        {/* Your Profile Card */}
        <section className="bg-white rounded-xl p-6 lg:p-8 border border-gray-100">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Your Profile</span>
          </div>
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-5">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  DJ
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-3 border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 mb-1">Dohn Joe</div>
                <div className="text-sm text-gray-500">Member since Nov 2024</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl px-6 py-5 border border-blue-100 w-full md:w-auto min-w-[280px]">
              <div className="text-right">
                <div className="text-3xl font-bold text-gray-900 mb-2">4,000 points</div>
                <div className="flex items-center justify-end gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-700">
                    With rewards you&apos;ve saved <span className="font-semibold text-green-800">$286</span> this month!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Groups Card */}
        <section className="bg-white rounded-xl p-6 lg:p-8 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Users size={18} className="text-gray-600" />
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Groups</span>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowCreateGroupModal(true)}
                className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium transition-colors duration-200 flex items-center gap-2"
              >
                <Users size={16} />
                Create Group
              </button>
              <button 
                onClick={() => setShowEnterInviteModal(true)}
                className="px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium transition-colors duration-200"
              >
                Enter Invite
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-8">
            <div className="flex items-center gap-5">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-lg font-bold shadow-lg">
                  UW
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-500 rounded-full border-3 border-white flex items-center justify-center">
                  <Trophy size={14} className="text-white" />
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 mb-1">UW Classmates</div>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Users size={14} />
                    8 Members
                  </span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                  <span className="text-green-600 font-medium">7-day streak</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl px-6 py-5 border border-purple-100 w-full md:w-auto min-w-[280px]">
              <div className="text-right">
                <div className="text-3xl font-bold text-gray-900 mb-2">26,067 points</div>
                <div className="flex items-center justify-end gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-700">
                    With rewards your group saved <span className="font-semibold text-green-800">$623</span> this month!
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Group Goal Progress */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-lg font-semibold text-gray-900 mb-1">Group Savings Goal</div>
                <div className="text-sm text-gray-600">As a group, save $1,000 this month</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">$623</div>
                <div className="text-sm text-gray-500">of $1,000</div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Progress</span>
                <span>62%</span>
              </div>
              <div className="h-3 rounded-full bg-white border border-gray-200 overflow-hidden shadow-inner">
                <div 
                  className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-500 shadow-sm" 
                  style={{ width: '62%' }} 
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle size={16} className="text-green-500" />
                <span className="text-gray-700">8/8 members took advantage of rewards this week</span>
              </div>
              <div className="text-sm text-gray-500">9 days left</div>
            </div>
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

        {/* Create Group Modal */}
        {showCreateGroupModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Create New Group</h2>
                <button 
                  onClick={() => {
                    setShowCreateGroupModal(false);
                    setGroupName('');
                    setGroupDescription('');
                    setGeneratedCode('');
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={24} />
                </button>
              </div>

              {!generatedCode ? (
                <form onSubmit={handleCreateGroup}>
                  <div className="mb-4">
                    <label htmlFor="groupName" className="block text-sm font-medium text-gray-700 mb-2">
                      Group Name *
                    </label>
                    <input
                      type="text"
                      id="groupName"
                      value={groupName}
                      onChange={(e) => setGroupName(e.target.value)}
                      placeholder="e.g., College Friends, Work Team"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="groupDescription" className="block text-sm font-medium text-gray-700 mb-2">
                      Description (Optional)
                    </label>
                    <textarea
                      id="groupDescription"
                      value={groupDescription}
                      onChange={(e) => setGroupDescription(e.target.value)}
                      placeholder="What's this group about?"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    />
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setShowCreateGroupModal(false);
                        setGroupName('');
                        setGroupDescription('');
                      }}
                      className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={!groupName.trim()}
                      className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <Plus size={16} />
                      Create Group
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Group Created Successfully!</h3>
                  <p className="text-gray-600 mb-4">Share this invite code with your friends:</p>
                  
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-mono font-bold text-gray-900">{generatedCode}</span>
                      <button
                        onClick={copyInviteCode}
                        className="flex items-center gap-2 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-lg transition-colors duration-200"
                      >
                        {isCodeCopied ? (
                          <>
                            <Check size={16} />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy size={16} />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setShowCreateGroupModal(false);
                      setGroupName('');
                      setGroupDescription('');
                      setGeneratedCode('');
                    }}
                    className="w-full px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors duration-200"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Enter Invite Modal */}
        {showEnterInviteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Join a Group</h2>
                <button 
                  onClick={() => {
                    setShowEnterInviteModal(false);
                    setInviteCode('');
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleEnterInvite}>
                <div className="mb-6">
                  <label htmlFor="inviteCode" className="block text-sm font-medium text-gray-700 mb-2">
                    Invite Code *
                  </label>
                  <input
                    type="text"
                    id="inviteCode"
                    value={inviteCode}
                    onChange={(e) => setInviteCode(e.target.value.toUpperCase())}
                    placeholder="Enter 6-character code"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-center text-lg font-mono"
                    maxLength={6}
                    required
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Ask your friend for the 6-character invite code
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setShowEnterInviteModal(false);
                      setInviteCode('');
                    }}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={inviteCode.length !== 6}
                    className="flex-1 px-4 py-2 bg-sky-500 hover:bg-sky-600 disabled:bg-gray-300 text-white rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Link size={16} />
                    Join Group
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
