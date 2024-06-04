const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Публичная папка для статики
app.use(express.static(path.join(__dirname, 'public')));

// Маршрут
app.use('/', require('./routes/index'));

// Запуск
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
