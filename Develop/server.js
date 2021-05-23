const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/html-Routes')(app);
require('./routes/api-Routes')(app);

app.listen(PORT, ()=> console.log(`Sever started on port ${PORT}`));