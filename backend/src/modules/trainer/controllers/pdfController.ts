import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import mime from "mime-types";

// Controller to handle PDF upload
export const uploadPdf = async (req: Request, res: Response): Promise<void> => {
    console.log("Request File:", req.file); // Log the file data to verify

    try {
        const file = req.file;

        // Check if a file is uploaded
        if (!file) {
            res.status(400).json({ message: "No PDF file uploaded" });
            return;
        }

        // Validate the file size (10 MB = 10 * 1024 * 1024 bytes)
        const maxSizeInBytes = 10 * 1024 * 1024;
        if (file.size > maxSizeInBytes) {
            res.status(400).json({ message: "File size exceeds the 10 MB limit, Reduce the size and try again." });
            return;
        }

        // Get the MIME type of the uploaded file
        const mimeType = file.mimetype;
        const extension = mime.extension(mimeType);

        if (!extension) {
            res.status(400).json({ message: "Invalid file type" });
            return;
        }

        // Allow only PDF files
        if (extension !== "pdf") {
            res.status(400).json({ message: "Unsupported file type, only PDFs are allowed" });
            return;
        }

        // Create a unique filename with the correct extension
        const fileName = `${uuidv4()}.${extension}`;
        const uploadDir = path.join(__dirname, "../../../../uploads/pdfs");

        // Ensure the upload directory exists
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        // Asynchronously write the PDF to the disk
        await fs.promises.writeFile(path.join(uploadDir, fileName), file.buffer);

        // Send the success response
        res.status(200).json({
            message: "PDF uploaded successfully",
            pdfUrl: `/uploads/pdfs/${fileName}`,
        });
    } catch (error) {
        console.error("PDF upload failed", error);
        res.status(500).json({ message: "PDF upload failed" });
    }
};
