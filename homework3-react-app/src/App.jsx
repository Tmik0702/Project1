import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ textAlign: 'center', padding: '50px 20px', fontFamily: 'sans-serif' }}>
      <h1> Hello World from Phan Doan Quoc Tuan</h1>
      <p style={{ fontSize: '1.2rem', color: '#0066cc' }}>
        Bài tập Homework 3 - Web Application Development
      </p>

      <div style={{ margin: '30px auto', padding: '20px', maxWidth: '400px', background: '#f5f5f5', borderRadius: '10px' }}>
        <h3>Demo React State:</h3>
        <p>Số lần bạn đã click: <strong>{count}</strong></p>
        <button 
          onClick={() => setCount(count + 1)}
          style={{ padding: '10px 20px', fontSize: '1rem', cursor: 'pointer', backgroundColor: '#61dafb', border: 'none', borderRadius: '5px', fontWeight: 'bold' }}
        >
          Bấm vào đây (+1)
        </button>
      </div>

      <p style={{ color: '#888' }}>Sinh viên: Tmik0702 (UIT)</p>
    </div>
  )
}

export default App