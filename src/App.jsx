import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-[#f8f6f2]">
      {/* Header */}
      <header className="coffee-gradient text-white p-6 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <i className="fas fa-coffee text-3xl"></i>
            <h1 className="text-2xl font-bold font-poppins">Berry Bora</h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Welcome, Farmer</span>
            <i className="fas fa-user-circle text-2xl"></i>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="text-center">
            <i className="fas fa-seedling text-6xl text-green-primary mb-4"></i>
            <h2 className="text-4xl font-bold text-coffee-dark mb-4">
              Welcome to Berry Bora
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Empowering Kenyan Coffee Farmers with Real-Time Market Insights
            </p>
            
            {/* Counter Test */}
            <div className="bg-coffee-highlight rounded-lg p-6 mb-6">
              <button 
                onClick={() => setCount((count) => count + 1)}
                className="bg-coffee-dark hover:bg-coffee-medium text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                <i className="fas fa-plus-circle mr-2"></i>
                Count is {count}
              </button>
            </div>

            {/* Color Palette */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-coffee-dark text-white p-4 rounded-lg">
                <p className="font-semibold">Coffee Dark</p>
              </div>
              <div className="bg-coffee-medium text-white p-4 rounded-lg">
                <p className="font-semibold">Coffee Medium</p>
              </div>
              <div className="bg-coffee-light text-white p-4 rounded-lg">
                <p className="font-semibold">Coffee Light</p>
              </div>
              <div className="bg-green-primary text-white p-4 rounded-lg">
                <p className="font-semibold">Green Primary</p>
              </div>
            </div>

            {/* Icons */}
            <div className="flex justify-center gap-6 text-3xl text-coffee-dark">
              <i className="fas fa-chart-line hover:text-green-primary transition-colors cursor-pointer"></i>
              <i className="fas fa-tag hover:text-green-primary transition-colors cursor-pointer"></i>
              <i className="fas fa-bell hover:text-green-primary transition-colors cursor-pointer"></i>
            </div>
          </div>
        </div>

        {/* Success Message */}
        <div className="bg-green-100 border-l-4 border-green-primary text-green-700 p-4 rounded-lg">
          <div className="flex items-center">
            <i className="fas fa-check-circle text-2xl mr-3"></i>
            <div>
              <p className="font-bold">Tailwind CSS 3.3.0 is working! ✅</p>
              <p className="text-sm">Coffee theme loaded successfully.</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer-coffee py-6 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2026 Berry Bora | Empowering Kenyan Coffee Farmers</p>
        </div>
      </footer>
    </div>
  )
}

export default App