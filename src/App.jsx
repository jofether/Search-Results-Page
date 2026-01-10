import React from 'react';

function App() {
  const results = [
    { 
      title: "Multimodal Learning with Vision Transformers", 
      url: "https://arxiv.org/abs/2101.01234/vision-transformers-multimodal-learning-deep-dive-v2-final-draft", 
      desc: "An in-depth analysis of how ViT can be adapted for multimodal tasks including text-to-image synthesis and UI code generation." 
    },
    { 
      title: "React Documentation - Getting Started", 
      url: "https://react.dev/learn/installation", 
      desc: "Learn how to create a new React app using frameworks like Next.js, Remix, or Vite. Understanding the component lifecycle is key." 
    },
    { 
      title: "Tailwind CSS - Utility-First Fundamentals", 
      url: "https://tailwindcss.com/docs/utility-first", 
      desc: "Building complex user interfaces without leaving your HTML. A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90." 
    },
    { 
      title: "CodeBERT: A Pre-Trained Model for Programming", 
      url: "https://github.com/microsoft/CodeBERT/blob/master/README.md", 
      desc: "CodeBERT is a bimodal pre-trained model for programming language (PL) and natural language (NL). It captures the semantic connection between code and comments." 
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* SEARCH HEADER */}
      <header className="border-b border-gray-200 p-6 flex items-center sticky top-0 bg-white z-10">
        <span className="text-2xl font-bold text-indigo-600 mr-8">SearchEngine</span>
        <div className="flex-1 max-w-2xl relative">
          <input 
            type="text" 
            defaultValue="multimodal ui generation"
            className="w-full border border-gray-300 rounded-full py-3 px-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          <button className="absolute right-4 top-3 text-indigo-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
        </div>
        <div className="ml-auto flex space-x-4">
          <div className="w-8 h-8 bg-purple-500 rounded-full text-white flex items-center justify-center font-bold">J</div>
        </div>
      </header>

      {/* FILTERS BAR */}
      <div className="px-6 md:px-32 py-3 border-b border-gray-200 flex space-x-6 text-sm text-gray-600">
        <span className="text-indigo-600 font-bold border-b-2 border-indigo-600 pb-2">All</span>
        <span className="hover:text-indigo-600 cursor-pointer">Images</span>
        <span className="hover:text-indigo-600 cursor-pointer">News</span>
        <span className="hover:text-indigo-600 cursor-pointer">Videos</span>
        <span className="hover:text-indigo-600 cursor-pointer">Maps</span>
      </div>

      {/* RESULTS LIST */}
      <main className="px-6 md:px-32 py-8 max-w-4xl">
        <p className="text-sm text-gray-400 mb-6">About 4,200,000 results (0.42 seconds)</p>

        <div className="space-y-8">
          {results.map((res, idx) => (
            <div key={idx} className="group">
              
              {/* URL Display (Truncated) */}
              <div className="flex items-center space-x-2 text-sm text-gray-800 mb-1">
                <span className="bg-gray-100 rounded-full p-1">
                  <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"></path></svg>
                </span>
                
                {/* FUTURE BUG: Remove 'truncate' and 'w-64' (or max-w) to let URL break layout */}
                <span className="truncate max-w-md text-gray-600">{res.url}</span>
                
                <span className="text-gray-400">⋮</span>
              </div>

              {/* Title */}
              <h3 className="text-xl text-indigo-800 font-medium group-hover:underline cursor-pointer">
                {res.title}
              </h3>

              {/* Snippet */}
              <p className="text-gray-600 mt-1 leading-relaxed text-sm">
                {res.desc}
              </p>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="mt-12 flex justify-center space-x-2">
          {[1, 2, 3, 4, 5].map(page => (
            <button key={page} className={`w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 ${page === 1 ? 'text-indigo-600 font-bold' : 'text-blue-600'}`}>
              {page}
            </button>
          ))}
        </div>

      </main>
    </div>
  );
}

export default App;