// /backend/src/modules/trainer/controllers/imageController.ts

import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import mime from "mime-types";

// Controller to handle image upload
export const uploadImage = async (req: Request, res: Response): Promise<void> => {
    console.log("Request File:", req.file);  // Log the file data to check if it's available

    try {
        const file = req.file;

        if (!file) {
            res.status(400).json({ message: "No image file uploaded" });
            return
        }

        // Get the MIME type of the uploaded file
        const mimeType = file.mimetype;
        const extension = mime.extension(mimeType);

        if (!extension) {
            res.status(400).json({ message: "Invalid image type" });
            return
        }

        const allowedExtensions = ["jpg", "jpeg", "png", "gif"];
        if (!allowedExtensions.includes(extension)) {
            res.status(400).json({ message: "Unsupported image type" });
            return
        }

        // Create a unique filename with the correct extension
        const fileName = `${uuidv4()}.${extension}`;
        const uploadDir = path.join(__dirname, "../../../../uploads/images");

        // Ensure the upload directory exists
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        // Asynchronously write the image to the disk
        await fs.promises.writeFile(path.join(uploadDir, fileName), file.buffer);

        // Send the success response
        res.status(200).json({
            message: "Image uploaded successfully",
            imageUrl: `/uploads/images/${fileName}`,
        });
    } catch (error) {
        console.error("Image upload failed", error);
        res.status(500).json({ message: "Image upload failed" });
    }
};
