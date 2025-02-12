import MarketsPage from '@/components/Markets';
import { Exchange } from '@/components/types';
import React from 'react'

async function getMarketsData(): Promise<Exchange[]> {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/exchanges",
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
 async function page() {

  const marketsData = await getMarketsData();

  return (
    <div>
      <MarketsPage exchanges={marketsData} />
    </div>
  )
}

export default page