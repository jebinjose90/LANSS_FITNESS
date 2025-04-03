import multer from 'multer';
import path from 'path';

// Configure storage for certificate files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/certificates/'); // Directory for certificates
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName); // Save with a unique name
    },
});

const certificateUpload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        // Allow only PDF files
        if (file.mimetype === 'application/pdf') {
            cb(null, true);
        } else {
            cb(new Error('Only PDF files are allowed'));
        }
    },
});

export default certificateUpload;
