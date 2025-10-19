const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
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

let gfs;
conn.once('open', () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

const storage = new GridFsStorage({
  url: mongoURI,
  file: () => {
    return {
      filename: 'cv.pdf',
      bucketName: 'uploads',
    };
  },
});

const upload = multer({ storage });

// Upload endpoint (optional, only use once to upload your CV)
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded');
});

// Download endpoint
app.get('/download-cv', (req, res) => {
  gfs.files.findOne({ filename: 'cv.pdf' }, (err, file) => {
    if (!file) return res.status(404).send('File not found');

    const readstream = gfs.createReadStream(file.filename);
    res.set('Content-Type', file.contentType);
    res.set('Content-Disposition', 'attachment; filename="cv.pdf"');
    readstream.pipe(res);
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
