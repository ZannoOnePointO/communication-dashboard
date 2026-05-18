import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="space">
      <div className="stars stars-1" />
      <div className="stars stars-2" />
      <div className="stars stars-3" />
      <div className="nebula nebula-purple" />
      <div className="nebula nebula-blue" />
      <div className="shooting-star" />

      <main className="container">
        <p className="eyebrow">Welcome, traveler</p>
        <h1>Hello, universe.</h1>
        <p className="subtitle">
          A small signal sent across the cosmos. Just for you.
        </p>
        <button className="cta" onClick={() => setCount((c) => c + 1)}>
          Send a signal
          <span className="arrow">›</span>
        </button>
        {count > 0 && (
          <p className="count">
            {count} {count === 1 ? 'signal' : 'signals'} sent into the void.
          </p>
        )}
      </main>
    </div>
  )
}
