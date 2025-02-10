import React from 'react';
import { ArrowRight, BarChart2, Lock, Smartphone, Globe, ArrowUpRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Track Crypto Like a Pro
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Real-time cryptocurrency tracking, advanced analytics, and portfolio management all in one place.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2">
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-gray-600 hover:border-gray-500 px-8 py-3 rounded-lg font-medium">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose CryptoTracker</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Advanced tools and features designed for both beginners and experienced traders
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart2 className="w-6 h-6" />,
                title: "Real-Time Analytics",
                description: "Track prices, market cap, and trading volume with real-time updates and alerts"
              },
              {
                icon: <Lock className="w-6 h-6" />,
                title: "Secure Platform",
                description: "Bank-grade encryption and security measures to protect your data and assets"
              },
              {
                icon: <Smartphone className="w-6 h-6" />,
                title: "Mobile First",
                description: "Access your portfolio and trades anywhere with our mobile apps"
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Global Markets",
                description: "Track cryptocurrencies across multiple exchanges and markets worldwide"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-colors">
                <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-blue-400">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { number: "2M+", label: "Active Users" },
              { number: "$50B+", label: "Trading Volume" },
              { number: "100+", label: "Supported Coins" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800/50 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Start Trading Today</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join millions of traders worldwide and experience the future of cryptocurrency trading
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 mx-auto">
              Create Free Account <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">CryptoTracker</h3>
              <p className="text-gray-400">Your trusted crypto tracking platform</p>
            </div>
            {[
              {
                title: "Product",
                links: ["Features", "Pricing", "API", "Documentation"]
              },
              {
                title: "Company",
                links: ["About", "Blog", "Careers", "Press"]
              },
              {
                title: "Resources",
                links: ["Help Center", "Community", "Contact", "Status"]
              }
            ].map((column, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold mb-4">{column.title}</h3>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-400 hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2025 CryptoTracker. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;