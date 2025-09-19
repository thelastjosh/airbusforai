import { useState } from 'react'

export default function PasswordScreen({ onPasswordCorrect }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Simple password check - you can change this password
    if (password === 't=0') {
      onPasswordCorrect()
    } else {
      setError('Incorrect password. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Airbus for AI</h1>
          <div className="text-blue-100 text-lg leading-relaxed">
            <p className="mb-4">
              Airbus for AI is a proposal for a third-way frontier lab that brings together the sovereign initiatives of several middle powers.
            </p>
            <p className="mb-4">
              <a 
                href="https://publicai.co/airbus-for-ai.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-300 hover:text-blue-200 underline transition-colors duration-200"
              >
                Read our comprehensive policy brief →
              </a>
            </p>
            <p className="text-sm text-blue-200">
              The full site will be ready in a couple of weeks.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
              Enter Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              placeholder="Enter password to continue"
              required
            />
          </div>

          {error && (
            <div className="text-red-300 text-sm text-center bg-red-500/20 p-3 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent"
          >
            {isLoading ? 'Verifying...' : 'Access Site'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-blue-200 text-xs">
            Contact us for access credentials
          </p>
        </div>
      </div>
    </div>
  )
}