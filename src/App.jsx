import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-[#f8f6f2]">
      {/* Use the Header component */}
      <Header />

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
          </div>
        </div>

        {/* Success Message */}
        <div className="bg-green-100 border-l-4 border-green-primary text-green-700 p-4 rounded-lg">
          <div className="flex items-center">
            <i className="fas fa-check-circle text-2xl mr-3"></i>
            <div>
              <p className="font-bold">Header Component Working! ✅</p>
              <p className="text-sm">Zustand store is connected. User name: Farmer</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer-coffee py-6 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-sm">© 2026 Berry Bora | Empowering Kenyan Coffee Farmers</p>
          <p className="text-xs mt-2 opacity-75">Header Component ✅ | Zustand Store ✅</p>
        </div>
      </footer>
    </div>
  )
}

export default App