import React, { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedFilters, setSelectedFilters] = useState([]);
  
  const results = [
    { 
      title: "Multimodal Learning with Vision Transformers: Next-Generation AI Models", 
      url: "arxiv.org › papers › vision-transformers-multimodal", 
      desc: "An in-depth analysis of how Vision Transformers can be adapted for complex multimodal tasks including text-to-image synthesis, cross-modal retrieval, and intelligent UI code generation. Recent advances show significant improvements.",
      badge: "Research Paper",
      badgeColor: "blue",
      date: "2 days ago",
      rating: 4.8
    },
    { 
      title: "React 19 Documentation - Official Getting Started Guide", 
      url: "react.dev › learn › installation", 
      desc: "Learn how to create a new React application using modern frameworks like Next.js, Remix, or Vite. Understanding the component lifecycle and hooks is essential for building scalable applications.",
      badge: "Documentation",
      badgeColor: "green",
      date: "Updated today",
      rating: 4.9
    },
    { 
      title: "Tailwind CSS - Utility-First CSS Framework Fundamentals", 
      url: "tailwindcss.com › docs › utility-first", 
      desc: "Building complex user interfaces without leaving your HTML markup. A powerful utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90. Perfect for rapid development.",
      badge: "Framework",
      badgeColor: "purple",
      date: "1 week ago",
      rating: 4.7
    },
    { 
      title: "CodeBERT: Pre-Trained Model for Programming Language Understanding", 
      url: "github.com › microsoft › CodeBERT", 
      desc: "CodeBERT is a bimodal pre-trained model that captures semantic connections between programming language code and natural language comments. Essential for code understanding and generation tasks.",
      badge: "AI Model",
      badgeColor: "orange",
      date: "3 weeks ago",
      rating: 4.6
    },
    { 
      title: "Deep Learning for Computer Vision: Comprehensive Tutorial Series", 
      url: "medium.com › deep-learning › computer-vision", 
      desc: "A complete guide covering CNN architectures, object detection, semantic segmentation, and image classification. Includes hands-on code examples and best practices for production systems.",
      badge: "Tutorial",
      badgeColor: "blue",
      date: "5 days ago",
      rating: 4.5
    },
    { 
      title: "GraphQL Best Practices: Building Scalable APIs in 2025", 
      url: "graphql.org › learn › best-practices", 
      desc: "Master the fundamentals of GraphQL and learn how to design efficient queries and mutations. Discover optimization techniques for handling complex data relationships and real-time subscriptions.",
      badge: "Guide",
      badgeColor: "green",
      date: "4 days ago",
      rating: 4.8
    },
    { 
      title: "Machine Learning Pipelines: From Data to Production Deployment", 
      url: "tensorflow.org › guide › ml-pipelines", 
      desc: "Learn how to build, train, and deploy machine learning models at scale. Includes MLOps best practices, containerization, and monitoring strategies for production environments.",
      badge: "Tutorial",
      badgeColor: "purple",
      date: "1 week ago",
      rating: 4.7
    },
    { 
      title: "Web Performance Optimization: Advanced Techniques for 2025", 
      url: "web.dev › performance › optimization", 
      desc: "Comprehensive guide on improving Core Web Vitals, reducing load times, and optimizing assets. Learn about lazy loading, code splitting, caching strategies, and performance monitoring.",
      badge: "Performance",
      badgeColor: "orange",
      date: "2 days ago",
      rating: 4.6
    },
  ];

  const filterOptions = [
    { id: 'recent', label: 'Last 24 hours', count: 234 },
    { id: 'week', label: 'Last week', count: 1892 },
    { id: 'month', label: 'Last month', count: 8374 },
    { id: 'verified', label: 'Verified sources', count: 456 },
    { id: 'trending', label: 'Trending now', count: 892 },
  ];

  const toggleFilter = (filterId) => {
    setSelectedFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(f => f !== filterId)
        : [...prev, filterId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">SearchPro</h1>
                <p className="text-xs text-slate-500">Intelligent Discovery</p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-5 transition-opacity duration-300 blur"></div>
                <input 
                  type="text" 
                  defaultValue="multimodal AI & UI generation"
                  className="search-input w-full bg-white border border-slate-200 rounded-full py-3 px-6 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent focus:bg-white transition-all duration-200"
                  placeholder="Search anything..."
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full p-2 hover:shadow-lg transition-shadow">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </button>
              </div>
            </div>

            {/* User Menu */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.5 1.5H3.75A2.25 2.25 0 001.5 3.75v16.5A2.25 2.25 0 003.75 22.5h16.5a2.25 2.25 0 002.25-2.25V13.5"></path></svg>
              </button>
              <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm hover:shadow-lg transition-shadow cursor-pointer">
                J
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center space-x-1 border-t border-slate-200/50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            {['all', 'images', 'news', 'videos', 'maps', 'shopping'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-3 px-4 text-sm font-medium transition-all duration-200 border-b-2 ${
                  activeTab === tab
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-8">
          
          {/* SIDEBAR - FILTERS */}
          <aside className="w-56 flex-shrink-0">
            <div className="bg-white rounded-xl border border-slate-200 p-6 sticky top-24">
              <h2 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wide">Refine Results</h2>
              
              <div className="space-y-3">
                {filterOptions.map(filter => (
                  <label key={filter.id} className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedFilters.includes(filter.id)}
                      onChange={() => toggleFilter(filter.id)}
                      className="w-4 h-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-700 group-hover:text-indigo-600 transition-colors">{filter.label}</p>
                      <p className="text-xs text-slate-400">{filter.count.toLocaleString()}</p>
                    </div>
                  </label>
                ))}
              </div>

              <div className="border-t border-slate-200 mt-6 pt-6">
                <h3 className="text-sm font-bold text-slate-900 mb-3 uppercase tracking-wide">Content Types</h3>
                <div className="space-y-2">
                  {['Articles', 'Videos', 'Research', 'Tutorials'].map(type => (
                    <button key={type} className="block w-full text-left px-3 py-2 text-sm text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 rounded-lg transition-colors">
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full mt-6 py-2 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors border border-slate-200 rounded-lg hover:border-indigo-300">
                Clear Filters
              </button>
            </div>
          </aside>

          {/* RESULTS */}
          <main className="flex-1 min-w-0">
            {/* Results Info */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h2 className="text-sm text-slate-600">
                  About <span className="font-bold text-slate-900">4,200,000</span> results 
                  <span className="ml-1 text-slate-400">in 0.42 seconds</span>
                </h2>
              </div>
              <select className="text-sm text-slate-600 bg-white border border-slate-200 rounded-lg px-3 py-2 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option>Most relevant</option>
                <option>Newest</option>
                <option>Most viewed</option>
                <option>Highest rated</option>
              </select>
            </div>

            {/* Results List */}
            <div className="space-y-5">
              {results.map((res, idx) => (
                <div key={idx} className="result-item group bg-white rounded-xl border border-slate-200 p-5 hover:border-slate-300 hover:shadow-md transition-all duration-200">
                  
                  {/* Top Row with Badge */}
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.658 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-medium">{res.url}</p>
                      </div>
                    </div>
                    <span className={`badge badge-${res.badgeColor}`}>{res.badge}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-indigo-700 hover:text-indigo-900 cursor-pointer mb-2 group-hover:underline transition-colors">
                    {res.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed text-sm mb-4">
                    {res.desc}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <div className="flex items-center space-x-4 text-xs text-slate-500">
                      <span>{res.date}</span>
                      <span>•</span>
                      <div className="flex items-center space-x-1">
                        <span>⭐ {res.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors" title="Save">
                        <svg className="w-4 h-4 text-slate-400 hover:text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h6a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V5z"></path></svg>
                      </button>
                      <button className="p-1.5 hover:bg-slate-100 rounded-lg transition-colors" title="Share">
                        <svg className="w-4 h-4 text-slate-400 hover:text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C9.589 12.438 10 11.331 10 10c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3c.742 0 1.439-.184 2.049-.513M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* PAGINATION */}
            <div className="mt-12 flex items-center justify-center space-x-2">
              <button className="p-2 hover:bg-white rounded-lg transition-colors">
                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
              </button>
              
              {[1, 2, 3, 4, 5].map(page => (
                <button 
                  key={page} 
                  className={`w-10 h-10 rounded-lg font-medium transition-all duration-200 ${
                    page === 1 
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md' 
                      : 'bg-white text-indigo-600 border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              
              <span className="text-slate-400 mx-1">...</span>
              
              <button className="w-10 h-10 rounded-lg font-medium bg-white text-slate-600 border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 transition-all">
                10
              </button>

              <button className="p-2 hover:bg-white rounded-lg transition-colors">
                <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </button>
            </div>

            {/* Footer CTA */}
            <div className="mt-16 text-center">
              <p className="text-slate-500 text-sm mb-4">Didn't find what you're looking for?</p>
              <button className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-full hover:shadow-lg transition-shadow">
                <span>Search Advanced</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;