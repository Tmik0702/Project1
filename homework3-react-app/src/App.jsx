import { useState, useEffect } from 'react'
import './App.css'

function App() {
  // 1. State Dark/Light Mode
  const [isDark, setIsDark] = useState(true)

  // 2. State Bộ đếm (Counter)
  const [count, setCount] = useState(0)

  // 3. State Ô nhập tên (Controlled Input)
  const [userName, setUserName] = useState('')

  // 4. State lưu dữ liệu lấy từ Backend Render (Homework 4)
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)

  // Gọi API từ Render khi tải trang
  useEffect(() => {
    fetch('https://project1-cmk5.onrender.com/api/skills')
      .then(response => response.json())
      .then(data => {
        setSkills(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Lỗi gọi API:', error)
        setLoading(false)
      })
  }, [])

  return (
    <div className={`app-wrapper ${isDark ? 'dark' : 'light'}`}>
      <div className="main-container">
        
        {/* Thanh tiêu đề & Nút đổi Theme */}
        <div className="top-bar">
          <div>
            <h1>React.js Super App</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Homework 3 - Web Application Development (S3Lab)
            </p>
          </div>
          <button className="theme-toggle-btn" onClick={() => setIsDark(!isDark)}>
            {isDark ? '☀️ Giao diện Sáng' : '🌙 Giao diện Tối'}
          </button>
        </div>

        {/* PHẦN 1: Tương tác nhập liệu (Controlled Input) */}
        <section className="card-section">
          <h2 className="card-title">✍️ Nhập tên của bạn</h2>
          <input 
            type="text" 
            className="custom-input"
            placeholder="Nhập tên bạn vào đây..."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <div className="welcome-msg">
            {userName ? `Xin chào, ${userName}! Chúc bạn học Web thật vui 🎉` : 'Hãy gõ tên để trải nghiệm React Two-Way Binding!'}
          </div>
        </section>

        {/* PHẦN 2: Bộ đếm State tương tác */}
        <section className="card-section">
          <h2 className="card-title">🔢 Bộ Đếm Tương Tác (State Counter)</h2>
          <div className="counter-display">{count}</div>
          <div className="button-group">
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Tăng (+1)</button>
            <button className="btn btn-danger" onClick={() => setCount(count - 1)}>Giảm (-1)</button>
            <button className="btn btn-gray" onClick={() => setCount(0)}>Reset về 0</button>
          </div>
        </section>

        {/* PHẦN 3: Dữ liệu thời gian thực từ Backend Render (Homework 4) */}
        <section className="card-section">
          <h2 className="card-title">🌐 Dữ Liệu Gọi Trực Tiếp Từ Backend (Render API)</h2>
          <span className="api-badge">Endpoint: https://project1-cmk5.onrender.com/api/skills</span>
          
          {loading ? (
            <p style={{ color: 'var(--text-muted)' }}>⏳ Đang tải dữ liệu từ Cloud Render...</p>
          ) : (
            <div className="skills-list">
              {skills.map((item) => (
                <div key={item.id} className="skill-item">
                  <span><strong>#{item.id}</strong> {item.name}</span>
                  <span className="status-tag">{item.level}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Chân trang */}
        <footer>
          <p>Sinh viên thực hiện: <strong>Phan Đoàn Quốc Tuấn</strong> (UIT)</p>
          <p>© 2026 - Môn học Phát triển Ứng dụng Web</p>
        </footer>

      </div>
    </div>
  )
}

export default App