import React from 'react';
import { Target } from 'lucide-react';

interface PlanStep {
  step: number;
  title: string;
  current: number;
  target: number;
  progress: number;
  timeLeft: string;
  action: string;
  actionType: 'primary' | 'warning' | 'success';
}

interface BigGoal {
  title: string;
  description: string;
  current: number;
  target: number;
  progress: number;
  icon: string;
  timeframe: string;
  milestone: string;
}

interface YourGoalsProps {
  planSteps: PlanStep[];
  bigGoal: BigGoal;
}

export default function YourGoals({ planSteps, bigGoal }: YourGoalsProps) {
  return (
    <div className="bg-white rounded-xl p-6 mb-6 border border-gray-100">
      <div className="flex items-center gap-2 mb-5">
        <Target size={20} className="text-gray-900" />
        <h2 className="text-lg font-bold text-gray-900">Your Goals</h2>
      </div>
      
      {/* Big Goal Card */}
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 mb-6 text-white">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-5xl">{bigGoal.icon}</span>
              <div>
                <h3 className="text-3xl font-bold mb-1">{bigGoal.title}</h3>
                <p className="text-blue-100 text-sm">{bigGoal.description}</p>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm opacity-90 mb-1">{bigGoal.timeframe}</div>
            <div className="text-2xl font-bold">{bigGoal.progress}%</div>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2 opacity-90">
            <span>${bigGoal.current.toLocaleString()} saved</span>
            <span>Goal: ${bigGoal.target.toLocaleString()}</span>
          </div>
          <div className="h-4 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              className="h-full bg-white rounded-full transition-all duration-500 shadow-lg"
              style={{ width: `${bigGoal.progress}%` }}
            />
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <span className="opacity-90">Next milestone:</span>
            <span className="font-semibold">{bigGoal.milestone}</span>
          </div>
          <button className="bg-white text-blue-600 px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-50 transition">
            Add Funds
          </button>
        </div>
      </div>
      
      {/* Smaller Goals Grid */}
      <div className="grid grid-cols-3 gap-4">
        {planSteps.map((step) => (
          <div key={step.step} className="border border-gray-200 rounded-xl p-5 hover:border-gray-300 transition">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-gray-500 uppercase">Step {step.step}</span>
              <span className={`text-xs font-semibold px-2 py-1 rounded ${
                step.progress === 100 ? 'bg-green-100 text-green-700' :
                step.progress >= 50 ? 'bg-blue-100 text-blue-700' :
                'bg-yellow-100 text-yellow-700'
              }`}>
                {step.progress === 100 ? 'Complete' : 'In Progress'}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
            
            <div className="mb-1">
              <div className="text-sm text-gray-600 mb-1">{step.current}/{step.target}</div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all ${
                    step.progress === 100 ? 'bg-green-500' :
                    step.progress >= 50 ? 'bg-blue-500' :
                    'bg-yellow-500'
                  }`}
                  style={{ width: `${step.progress}%` }}
                />
              </div>
            </div>
            
            <p className="text-xs text-gray-600 mb-4 mt-2">{step.timeLeft}</p>
            
            <button
              className={`w-full py-2.5 rounded-lg text-sm font-semibold transition ${
                step.actionType === 'primary'
                  ? 'bg-gray-900 hover:bg-gray-800 text-white'
                  : step.actionType === 'warning'
                  ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
            >
              {step.action}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}