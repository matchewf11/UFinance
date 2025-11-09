'use client'

import React, { useState } from 'react';
import Sidebar from '../components/sidebar/sidebar';
import { Info, Search, MessageCircle, Book, Video, Phone, Mail, ExternalLink, ChevronDown, ChevronRight, HelpCircle } from 'lucide-react';

const HelpPage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

    const faqItems = [
        {
            question: "How do I connect my bank account?",
            answer: "You can connect your bank account by clicking the 'Integrate a bank' button on your dashboard and selecting your financial institution. We use bank-level security to protect your information."
        },
        {
            question: "Why aren't my transactions showing up?",
            answer: "Transactions typically sync within 24-48 hours. If you're not seeing recent transactions, try refreshing your connection or contact support if the issue persists."
        },
        {
            question: "How are my rewards calculated?",
            answer: "Rewards are calculated based on your spending patterns and the credit cards you have connected. Our AI analyzes your purchases and suggests the best cards for maximum cashback."
        },
        {
            question: "Is my financial data secure?",
            answer: "Yes, we use bank-level encryption and never store your login credentials. We're partnered with Plaid for secure account connections and comply with all financial data protection standards."
        },
        {
            question: "Can I disconnect a bank account?",
            answer: "Yes, you can disconnect any bank account from the Settings page under 'Connected Accounts'. This will stop syncing transactions from that account."
        },
        {
            question: "How do spending goals work?",
            answer: "Spending goals help you track and reduce expenses in specific categories. Set a target amount and we'll track your progress and send alerts when you're approaching your limit."
        }
    ];

    const quickHelp = [
        {
            title: "Getting Started Guide",
            description: "New to UFinance? Learn the basics in 5 minutes",
            icon: Book,
            link: "#"
        },
        {
            title: "Video Tutorials",
            description: "Step-by-step video guides for all features",
            icon: Video,
            link: "#"
        },
        {
            title: "Feature Updates",
            description: "What's new in the latest version",
            icon: Info,
            link: "#"
        }
    ];

    const contactMethods = [
        {
            title: "Live Chat",
            description: "Get instant help from our support team",
            availability: "Available 24/7",
            icon: MessageCircle,
            action: "Start Chat",
            color: "blue"
        },
        {
            title: "Phone Support",
            description: "Speak directly with a support specialist",
            availability: "Mon-Fri, 8 AM - 8 PM EST",
            icon: Phone,
            action: "Call Now",
            color: "green"
        },
        {
            title: "Email Support",
            description: "Send us a detailed message",
            availability: "Response within 24 hours",
            icon: Mail,
            action: "Send Email",
            color: "purple"
        }
    ];

    const filteredFaq = faqItems.filter(item =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='flex min-h-screen bg-gray-50'>
            <Sidebar />
            <main className='flex-1 p-8 max-w-[1400px] mx-auto'>
                {/* Page Header */}
                <div className='mb-8 text-center'>
                    <h1 className='text-3xl font-bold text-gray-900 mb-2'>Help Center</h1>
                    <p className='text-gray-600 mb-6'>Find answers, get support, and learn how to make the most of UFinance</p>
                    
                    {/* Search Bar */}
                    <div className='relative max-w-md mx-auto'>
                        <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                        <input
                            type="text"
                            placeholder="Search help articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                        />
                    </div>
                </div>

                {/* Quick Help Cards */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
                    {quickHelp.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <div key={index} className='bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition cursor-pointer'>
                                <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4'>
                                    <IconComponent className='w-6 h-6 text-blue-600' />
                                </div>
                                <h3 className='text-lg font-semibold text-gray-900 mb-2'>{item.title}</h3>
                                <p className='text-gray-600 mb-4'>{item.description}</p>
                                <div className='flex items-center text-blue-600 font-medium'>
                                    <span>Learn more</span>
                                    <ExternalLink className='w-4 h-4 ml-2' />
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    {/* FAQ Section */}
                    <div className='bg-white rounded-2xl p-6 shadow-sm border border-gray-100'>
                        <div className='flex items-center gap-3 mb-6'>
                            <div className='w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center'>
                                <HelpCircle className='w-5 h-5 text-amber-600' />
                            </div>
                            <div>
                                <h2 className='text-xl font-semibold text-gray-900'>Frequently Asked Questions</h2>
                                <p className='text-sm text-gray-600'>Find quick answers to common questions</p>
                            </div>
                        </div>

                        <div className='space-y-4'>
                            {filteredFaq.map((faq, index) => (
                                <div key={index} className='border border-gray-200 rounded-lg'>
                                    <button
                                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                                        className='w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition'
                                    >
                                        <span className='font-medium text-gray-900'>{faq.question}</span>
                                        {expandedFaq === index ? (
                                            <ChevronDown className='w-5 h-5 text-gray-400' />
                                        ) : (
                                            <ChevronRight className='w-5 h-5 text-gray-400' />
                                        )}
                                    </button>
                                    {expandedFaq === index && (
                                        <div className='px-4 pb-4 text-gray-600'>
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {filteredFaq.length === 0 && (
                            <div className='text-center py-8 text-gray-500'>
                                <HelpCircle className='w-12 h-12 mx-auto mb-3 text-gray-300' />
                                <p>No articles found matching "{searchQuery}"</p>
                                <p className='text-sm'>Try different keywords or contact support</p>
                            </div>
                        )}
                    </div>

                    {/* Contact Support */}
                    <div className='bg-white rounded-2xl p-6 shadow-sm border border-gray-100'>
                        <div className='flex items-center gap-3 mb-6'>
                            <div className='w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center'>
                                <MessageCircle className='w-5 h-5 text-green-600' />
                            </div>
                            <div>
                                <h2 className='text-xl font-semibold text-gray-900'>Contact Support</h2>
                                <p className='text-sm text-gray-600'>Get personalized help from our team</p>
                            </div>
                        </div>

                        <div className='space-y-4'>
                            {contactMethods.map((method, index) => {
                                const IconComponent = method.icon;
                                return (
                                    <div key={index} className='border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition'>
                                        <div className='flex items-start gap-4'>
                                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                                method.color === 'blue' ? 'bg-blue-100' :
                                                method.color === 'green' ? 'bg-green-100' :
                                                'bg-purple-100'
                                            }`}>
                                                <IconComponent className={`w-5 h-5 ${
                                                    method.color === 'blue' ? 'text-blue-600' :
                                                    method.color === 'green' ? 'text-green-600' :
                                                    'text-purple-600'
                                                }`} />
                                            </div>
                                            <div className='flex-1'>
                                                <div className='font-semibold text-gray-900 mb-1'>{method.title}</div>
                                                <div className='text-sm text-gray-600 mb-2'>{method.description}</div>
                                                <div className='text-xs text-gray-500 mb-3'>{method.availability}</div>
                                                <button className={`text-sm font-medium px-4 py-2 rounded-lg transition ${
                                                    method.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700 text-white' :
                                                    method.color === 'green' ? 'bg-green-600 hover:bg-green-700 text-white' :
                                                    'bg-purple-600 hover:bg-purple-700 text-white'
                                                }`}>
                                                    {method.action}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Additional Resources */}
                        <div className='mt-6 p-4 bg-gray-50 rounded-lg'>
                            <h3 className='font-medium text-gray-900 mb-2'>Before contacting support:</h3>
                            <ul className='text-sm text-gray-600 space-y-1'>
                                <li>• Check if your question is answered in the FAQ above</li>
                                <li>• Try refreshing your account connections</li>
                                <li>• Clear your browser cache and cookies</li>
                                <li>• Make sure you're using the latest version</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* System Status */}
                <div className='mt-8 bg-white rounded-2xl p-6 shadow-sm border border-gray-100'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h3 className='text-lg font-semibold text-gray-900 mb-1'>System Status</h3>
                            <p className='text-sm text-gray-600'>All systems operational</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                            <span className='text-sm font-medium text-green-600'>Operational</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default HelpPage;