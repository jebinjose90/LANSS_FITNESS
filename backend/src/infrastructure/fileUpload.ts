// backend/src/infrastructure/fileUpload.ts

import multer from 'multer';

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    const filename = `avatar_${Date.now()}_${file.originalname}`;
    cb(null, filename); // Name the file with a timestamp
  },
});

const upload = multer({ storage: storage });

export { upload };
