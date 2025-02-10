import Image from "next/image"
import type React from "react"
import { TrendingUp, TrendingDown } from 'lucide-react'

interface CryptoCurrency {
  id: string
  name: string
  symbol: string
  image: string
  current_price: number
  price_change_percentage_24h: number
  market_cap: number
  total_volume: number
  high_24h: number
  low_24h: number
}

const Card: React.FC<{ crypto: CryptoCurrency }> = ({ crypto }) => {
  const priceChangeColor = crypto.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"
  const PriceIcon = crypto.price_change_percentage_24h >= 0 ? TrendingUp : TrendingDown

  return (
    <div className="flex items-center justify-between p-6 border-b border-gray-800 hover:bg-gray-800/50 transition-all duration-300 group">
      {/* Left section */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 relative rounded-xl overflow-hidden bg-gray-700/30 p-2 group-hover:scale-110 transition-transform duration-300">
          <Image 
            src={crypto.image} 
            alt={`${crypto.name} icon`} 
            height={200} 
            width={200} 
            className="object-contain" 
          />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <div className="font-semibold text-lg">{crypto.name}</div>
            <div className="text-sm text-gray-400 bg-gray-700/30 px-2 py-0.5 rounded">
              {crypto.symbol.toUpperCase()}
            </div>
          </div>
          <div className="text-sm text-gray-400 mt-1">
            Vol: ${(crypto.total_volume).toLocaleString()}
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="text-right">
        <div className="font-semibold text-lg">
          ${crypto.current_price.toLocaleString("en-US", { 
            minimumFractionDigits: 2, 
            maximumFractionDigits: 2 
          })}
        </div>
        <div className={`flex items-center justify-end gap-1 ${priceChangeColor}`}>
          <PriceIcon className="w-4 h-4" />
          <span className="font-medium">
            {crypto.price_change_percentage_24h >= 0 ? "+" : ""}
            {crypto.price_change_percentage_24h.toFixed(2)}%
          </span>
        </div>
        <div className="text-xs text-gray-400 mt-1">
          H: ${crypto.high_24h?.toLocaleString()} • L: ${crypto.low_24h?.toLocaleString()}
        </div>
      </div>
    </div>
  )
}

export default Card