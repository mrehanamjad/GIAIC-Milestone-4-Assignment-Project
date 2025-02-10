"use client"
import React, { useState } from 'react';
import {  Shield, TrendingUp, Search, Filter, ArrowUpDown, Info } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { Exchange } from '@/components/types';
import CrytoExchangeCard from '@/components/CrytoExchangeCard';



const MarketsPage = ({exchanges}:{exchanges:Exchange[]}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');


  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section */}
    <PageHero title='Cryptocurrency Exchanges' description="Compare the world's top cryptocurrency exchanges ranked by volume, security, and user ratings" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: <TrendingUp className="w-6 h-6 text-green-500" />,
              label: "Total 24h Volume",
              value: `${exchanges.reduce((acc, ex) => acc + ex.trade_volume_24h_btc, 0).toLocaleString()} BTC`,
              change: "+12.5%"
            },
            {
              icon: <Shield className="w-6 h-6 text-blue-500" />,
              label: "Verified Exchanges",
              value: exchanges.filter(ex => ex.trust_score >= 8).length,
              change: "Top Security"
            },
            {
              icon: <Info className="w-6 h-6 text-purple-500" />,
              label: "Average Trust Score",
              value: (exchanges.reduce((acc, ex) => acc + ex.trust_score, 0) / exchanges.length).toFixed(1),
              change: "Very Good"
            }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-700/50 rounded-lg">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-gray-400 text-sm mb-1">{stat.label}</div>
                  <div className="text-xl font-bold">{stat.value}</div>
                  <div className="text-sm text-green-400">{stat.change}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search exchanges..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-800/40 border border-gray-700/50 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:border-blue-500/50 transition-all"
            />
          </div>
          <div className="flex gap-4">
            <button className="px-4 py-3 bg-gray-800/40 border border-gray-700/50 rounded-xl flex items-center gap-2 hover:border-gray-600/50 transition-all">
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
            <button className="px-4 py-3 bg-gray-800/40 border border-gray-700/50 rounded-xl flex items-center gap-2 hover:border-gray-600/50 transition-all">
              <ArrowUpDown className="w-5 h-5" />
              <span>Sort</span>
            </button>
          </div>
        </div>

        {/* Exchange Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exchanges.map((exchange) => (
          <CrytoExchangeCard exchange={exchange} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketsPage;