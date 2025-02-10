import React from 'react'
import { Exchange } from './types'
import { ExternalLink } from 'lucide-react'

const TrustScoreIndicator = ({ score }: { score: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: 10 }, (_, i) => (
      <div
        key={i}
        className={`w-2 h-2 rounded-full transition-all duration-300 ${
          i < score 
            ? 'bg-gradient-to-r from-green-400 to-green-500 scale-100' 
            : 'bg-gray-600 scale-75'
        }`}
      />
    ))}
  </div>
);

const CrytoExchangeCard: React.FC<{exchange: Exchange}> = ({exchange}) => {
  return (
    <div key={exchange.id} className="group bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300">
    {/* Header */}
    <div className="flex items-start justify-between mb-6">
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src="/api/placeholder/48/48"
            alt={exchange.name}
            className="w-12 h-12 rounded-xl"
          />
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-800 flex items-center justify-center">
            <span className="text-xs font-bold">#{exchange.trust_score_rank}</span>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-lg group-hover:text-blue-400 transition-colors">{exchange.name}</h3>
          <div className="text-sm text-gray-400">{exchange.country}</div>
        </div>
      </div>
      <a
        href={exchange.url}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
      >
        <ExternalLink className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
      </a>
    </div>

    {/* Trust Score */}
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm text-gray-400">Trust Score</div>
        <div className="text-sm font-medium text-green-400">
          {exchange.trust_score}/10
        </div>
      </div>
      <TrustScoreIndicator score={exchange.trust_score} />
    </div>

    {/* Volume */}
    <div className="mb-6">
      <div className="text-sm text-gray-400 mb-1">24h Volume</div>
      <div className="font-bold text-lg">
        {exchange.trade_volume_24h_btc.toLocaleString()} BTC
      </div>
      <div className="text-sm text-green-400">
        +{((exchange.trade_volume_24h_btc / exchange.trade_volume_24h_btc_normalized - 1) * 100).toFixed(2)}% from avg.
      </div>
    </div>

    {/* Description */}
    <div className="text-sm text-gray-400 line-clamp-3 mb-6">
      {exchange.description}
    </div>

    {/* Footer */}
    <div className="flex items-center justify-between pt-4 border-t border-gray-700">
      <div className="text-sm text-gray-400">
        Est. {exchange.year_established}
      </div>
      <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm font-medium transition-colors">
        View Details
      </button>
    </div>
  </div>
  )
}

export default CrytoExchangeCard