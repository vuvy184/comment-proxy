const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json());

// Endpoint để lấy bình luận
app.get('/comments', async (req, res) => {
    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbwQdgAa3dTsssd01YMgRuR7bOGInd9IWlyEmj4NMessVNz-VK7h0Evv0sXkIQ0vKUOMGQ/exec?action=getComments');
        const data = await response.json();
        res.set('Access-Control-Allow-Origin', '*'); // Cho phép tất cả domain
        res.json(data);
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.toString() });
    }
});

// Endpoint để thêm bình luận
app.post('/add-comment', async (req, res) => {
    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbwQdgAa3dTsssd01YMgRuR7bOGInd9IWlyEmj4NMessVNz-VK7h0Evv0sXkIQ0vKUOMGQ/exec', {
            method: 'POST',
            body: JSON.stringify(req.body),
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();
        res.set('Access-Control-Allow-Origin', '*');
        res.json(data);
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.toString() });
    }
});

module.exports = app;
