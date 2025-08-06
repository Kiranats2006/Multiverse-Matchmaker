function Dashboard() {
  const username = localStorage.getItem('username');
  
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Spiderweb background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 border-2 border-red-500 rounded-full" 
             style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 30%, 30% 100%, 0% 100%)' }}></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 border-2 border-red-500 rounded-full" 
             style={{ clipPath: 'polygon(70% 0%, 100% 30%, 100% 100%, 0% 100%, 0% 70%)' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-red-500 rounded-full opacity-50"
             style={{ clipPath: 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)' }}></div>
      </div>

      {/* Header with comic book style */}
      <header className="relative z-10 bg-black bg-opacity-80 py-6 border-b-4 border-red-600">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-4xl font-bold" style={{ fontFamily: "'Bangers', cursive", textShadow: '3px 3px 0 #000' }}>
            MARVEL MULTIVERSE
          </h1>
          <div className="text-yellow-400 text-xl" style={{ fontFamily: "'Bangers', cursive" }}>
            Welcome, <span className="text-red-400">{username}</span>!
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 container mx-auto px-4 py-12">

      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black bg-opacity-80 py-4 border-t-4 border-red-600 mt-12">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p style={{ fontFamily: "'Bangers', cursive" }}>YOUR JOURNEY THROUGH THE MULTIVERSE AWAITS</p>
          <p className="text-xs mt-2">© {new Date().getFullYear()} MARVEL MULTIVERSE DASHBOARD</p>
        </div>
      </footer>
    </div>
  );
}

export default Dashboard;