import React from 'react'

function PageHero({title,description}:{title:string,description:string}) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-b border-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          {title}
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          {description}
        </p>
      </div>
    </div>
  </div>
  )
}

export default PageHero