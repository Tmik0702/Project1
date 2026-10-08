const express = require('express');
const cors = require('cors');

const app = express();

// Cho phép tất cả các nguồn (CORS) có thể gọi API - Slide 33
app.use(cors());
app.use(express.json());

// Phục vụ giao diện tĩnh Dashboard từ thư mục public
app.use(express.static('public'));

// Điểm cốt lõi khi deploy lên Cloud (Render): 
// Render sẽ tự cấp một cổng ngẫu nhiên qua biến môi trường process.env.PORT
const PORT = process.env.PORT || 3000;

// Route 1: Thông tin API (JSON)
app.get('/api/info', (req, res) => {
    res.json({
        message: ' Hello World from Node.js + Express RESTful API!',
        course: 'Web Application Development - S3Lab',
        student: 'Phan Doan Quoc Tuan (UIT)',
        status: 'Active'
    });
});

// Route 2: Một endpoint RESTful API mẫu trả về danh sách dữ liệu
app.get('/api/skills', (req, res) => {
    res.json([
        { id: 1, name: 'HTML5 & CSS3', level: 'Completed' },
        { id: 2, name: 'React.js', level: 'Completed' },
        { id: 3, name: 'Node.js & Express', level: 'Completed' }
    ]);
});

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});