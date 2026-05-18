import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="container">
      <p className="eyebrow">Introducing</p>
      <h1>Hello, world.</h1>
      <p className="subtitle">
        A simple page. Beautifully crafted. Just for testing.
      </p>
      <button className="cta" onClick={() => setCount((c) => c + 1)}>
        Say hello
        <span className="arrow">›</span>
      </button>
      {count > 0 && (
        <p className="count">
          You've said hello {count} {count === 1 ? 'time' : 'times'}.
        </p>
      )}
    </main>
  )
}
