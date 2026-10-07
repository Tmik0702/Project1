import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(false) // Mặc định tông sáng thanh lịch giống Bài 2
  const [count, setCount] = useState(0)
  const [userName, setUserName] = useState('')
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://project1-cmk5.onrender.com/api/skills')
      .then(res => res.json())
      .then(data => {
        setSkills(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Lỗi gọi API:', err)
        setLoading(false)
      })
  }, [])

  return (
    <div className={`app-wrapper ${isDark ? 'dark' : 'light'}`}>
      
      {/* NAVBAR ĐỒNG BỘ VỚI BÀI 2 */}
      <nav className="nav-header">
        <div className="logo">PORTFOLIO<span>.</span></div>
        <button className="theme-btn" onClick={() => setIsDark(!isDark)}>
          {isDark ? '☀️ Giao diện Sáng' : '🌙 Giao diện Tối'}
        </button>
      </nav>

      <main className="main-content">
        <span className="badge">Homework 3 • React.js</span>
        <h1 className="page-title">Interactive React Application</h1>
        {/* PHẦN 1: INPUT TƯƠNG TÁC */}
        <section className="card">
          <h3>✍️ Nhập tên của bạn</h3>
          <input 
            type="text" 
            className="custom-input"
            placeholder="Nhập tên của bạn vào đây..."
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <div className="welcome-text">
            {userName ? `Xin chào, ${userName}! Chúc bạn một ngày tốt lành 🌟` : 'Gõ tên để xem tính năng cập nhật tức thì của React!'}
          </div>
        </section>

        {/* PHẦN 2: BỘ ĐẾM STATE */}
        <section className="card">
          <h3>🔢 Bộ Đếm Tương Tác (State Counter)</h3>
          <div className="counter-box">{count}</div>
          <div className="btn-group">
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Tăng (+1)</button>
            <button className="btn btn-danger" onClick={() => setCount(count - 1)}>Giảm (-1)</button>
            <button className="btn btn-secondary" onClick={() => setCount(0)}>Reset</button>
          </div>
        </section>

        {/* PHẦN 3: DỮ LIỆU TỪ BACKEND RENDER */}
        <section className="card">
          <h3>🌐 Dữ Liệu Kết Nối Từ Backend (Render API)</h3>
          <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem', marginBottom: '10px' }}>
            Endpoint: <code>https://project1-cmk5.onrender.com/api/skills</code>
          </p>

          {loading ? (
            <p style={{ color: 'var(--text-sub)' }}>⏳ Đang tải dữ liệu từ Cloud Render...</p>
          ) : (
            <div className="skills-list">
              {skills.map(item => (
                <div key={item.id} className="skill-row">
                  <span><strong>#{item.id}</strong> {item.name}</span>
                  <span className="tag-success">{item.level}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        <footer>
          <p>Sinh viên thực hiện: <strong>Phan Đoàn Quốc Tuấn</strong> (UIT)</p>
          <p>© 2026 - Môn học Phát triển Ứng dụng Web (S3Lab)</p>
        </footer>
      </main>

    </div>
  )
}

export default App