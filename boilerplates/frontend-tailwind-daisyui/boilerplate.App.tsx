import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card bg-base-200 shadow-xl w-96">
        <div className="card-body items-center text-center gap-6">

          <div className="flex gap-4">
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="h-16 hover:drop-shadow-lg transition-all" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="h-16 hover:drop-shadow-lg transition-all" alt="React logo" />
            </a>
          </div>
          <h1>Hello App</h1>
          <h2>Vite + React + DaisyUI</h2>
          <h4>...wrapped with Typespark</h4>

          <div className="flex items-center gap-3">
            <button className="btn btn-primary" onClick={() => setCount(c => c - 1)}>−</button>
            <span className="badge badge-outline badge-lg text-lg w-16 justify-center">{count}</span>
            <button className="btn btn-primary" onClick={() => setCount(c => c + 1)}>+</button>
          </div>

          <p className="text-base-content/60 text-sm">
            Edit <code className="kbd kbd-sm">src/App.tsx</code> and save to test HMR
          </p>

        </div>
      </div>
    </div>
  )
}

export default App