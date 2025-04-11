const mongoose = require('mongoose');
const fs = require('fs');
const { GridFSBucket } = require('mongodb');

const mongoURI = 'mongodb+srv://landrytower:Yannsadikisa082!@cluster0.grctigx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // replace with yours
const filePath = './../Backend/resumeCV.docx';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', async () => {
  const db = mongoose.connection.db;
  const bucket = new GridFSBucket(db, { bucketName: 'uploads' });

  // Delete old CV if exists
  const existing = await db.collection('uploads.files').findOne({ filename: 'cv.pdf' });
  if (existing) {
    await bucket.delete(existing._id);
    console.log('Old CV removed.');
  }

  fs.createReadStream(filePath)
    .pipe(bucket.openUploadStream('cv.pdf', { contentType: 'application/pdf' }))
    .on('finish', () => {
      console.log('CV uploaded successfully ✅');
      process.exit();
    });
});
