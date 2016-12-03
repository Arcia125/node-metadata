'use strict';
const express = require('express');
const app = express();
const path = require('path');

const multer = require('multer');
const upload = multer();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/get-filesize', upload.single('file'), (req, res) => {
    res.send({
        file_name: req.file.originalname,
        mimetype: req.file.mimetype,
        filesize: req.file.size
    });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
