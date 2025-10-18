const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const { GridFSBucket } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

const mongoURI = 'mongodb+srv://landrytower:Yannsadikisa082!@cluster0.grctigx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
';

const conn = mongoose.createConnection(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let gfsBucket;
conn.once('open', () => {
  gfsBucket = new GridFSBucket(conn.db, { bucketName: 'uploads' });
});

// multer v2: use memory storage and stream to GridFSBucket
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Upload endpoint (optional, only use once to upload your CV)
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file || !gfsBucket) return res.status(500).send('No file or storage not ready');

  const uploadStream = gfsBucket.openUploadStream('cv.pdf', {
    contentType: req.file.mimetype,
  });
  uploadStream.end(req.file.buffer, (err, file) => {
    if (err) return res.status(500).send('Upload failed');
    res.send('File uploaded');
  });
});

// Download endpoint
app.get('/download-cv', (req, res) => {
  const filter = { filename: 'cv.pdf' };
  conn.db.collection('uploads.files').findOne(filter, (err, file) => {
    if (err || !file) return res.status(404).send('File not found');
    const downloadStream = gfsBucket.openDownloadStreamByName(file.filename);
    res.set('Content-Type', file.contentType || 'application/octet-stream');
    res.set('Content-Disposition', 'attachment; filename="cv.pdf"');
    downloadStream.pipe(res);
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
