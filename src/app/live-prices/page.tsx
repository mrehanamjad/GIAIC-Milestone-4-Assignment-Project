import React from "react";
import { Search, TrendingUp, BarChart2, RefreshCcw } from "lucide-react";
import Card from "@/components/Card";
import { CryptoData } from "@/components/types";
import PageHero from "@/components/PageHero";

async function getData(): Promise<CryptoData[]> {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
        {
          cache: "no-store",
        }
      );
  
      if (!res.ok) {
        console.error("Failed to fetch data, Status:", res.status);
        return []; // Return an empty array on failure
      }
  
      const data = await res.json();
  
      if (!Array.isArray(data)) {
        console.error("Unexpected response format:", data);
        return []; // Return an empty array if data is not an array
      }
  
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return []; // Return an empty array on error
    }
  }

const CryptoTracker = async () => {
  const cryptos: CryptoData[] = await getData();

  const totalMarketCap = cryptos.reduce((sum, crypto) => sum + crypto.market_cap, 0);
  const totalVolume = cryptos.reduce((sum, crypto) => sum + crypto.total_volume, 0);
  const positivePerformers = cryptos.filter(c => c.price_change_percentage_24h > 0).length;

  return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white  w-full">
     <PageHero title="Live Cryptocurrency Prices" description=" Track real-time cryptocurrency prices, updated every minute" />
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-end  m-8"> 
          <button className="mt-4 md:mt-0 flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors">
            <RefreshCcw className="w-4 h-4" />
            <span>Refresh</span>
          </button>
        </div>


        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            {
              icon: <BarChart2 className="w-6 h-6 text-blue-400" />,
              label: "Total Market Cap",
              value: `$${(totalMarketCap / 1e12).toFixed(2)}T`
            },
            {
              icon: <TrendingUp className="w-6 h-6 text-green-400" />,
              label: "24h Trading Volume",
              value: `$${(totalVolume / 1e9).toFixed(2)}B`
            },
            {
              icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
              label: "Positive Performers",
              value: `${positivePerformers}/${cryptos.length}`
            }
          ].map((stat, index) => (
            <div key={index} 
                 className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-700/30 rounded-lg">{stat.icon}</div>
                <div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                  <div className="text-xl font-bold">{stat.value}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Search Section */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by name or symbol..."
            className="w-full bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl py-4 px-12 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
          />
        </div>

        {/* Crypto List */}
        <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50">
          <div className="p-4 border-b border-gray-700/50 flex justify-between text-sm text-gray-400">
            <div>Asset</div>
            <div>Price / 24h Change</div>
          </div>
          {cryptos?.length > 0 ? (
            cryptos.map((crypto) => <Card key={crypto.id} crypto={crypto} />)
          ) : (
            <div className="p-8 text-center text-gray-400">
              No cryptocurrencies found. Please try again later.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CryptoTracker;