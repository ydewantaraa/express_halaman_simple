const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('<a href="/about">Tentang Kami</a> | <a href="/contact">Kontak</a> | <a href="/profile">Profil</a>');
});

app.get('/about', (req, res) => {
  res.send('<a href="/">Kembali ke Halaman Utama</a>');
});

app.get('/contact', (req, res) => {
  res.send('<a href="/">Kembali ke Halaman Utama</a>');
});

app.get('/profile', (req, res) => {
  const data = {
    name: 'Yudha Dewantara',
    age: 23,
    city: 'Bogor',
  };
  res.render('profile', { data });
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
