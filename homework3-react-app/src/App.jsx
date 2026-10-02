import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <h1>🚀 Hello World from React.js!</h1>
      <p style={{ color: '#94a3b8', marginTop: '8px' }}>
        Bài tập Homework 3 - Web Application Development
      </p>

      <div className="glass-card">
        <h3>Bộ Đếm Tương Tác (State Demo)</h3>
        <div className="counter-number">{count}</div>
        
        <div className="button-group">
          <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
            Tăng (+1)
          </button>
          <button className="btn btn-danger" onClick={() => setCount(count - 1)}>
            Giảm (-1)
          </button>
          <button className="btn" style={{ background: '#475569', color: '#fff' }} onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>

      <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
        Sinh viên: Phan Đoàn Quốc Tuấn (UIT)
      </p>
    </div>
  )
}

export default App