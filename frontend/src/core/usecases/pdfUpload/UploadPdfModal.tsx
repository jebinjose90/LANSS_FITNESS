import React, { useState } from 'react';
import { uploadPdf } from '../../../infrastructure/api/fileApi';

interface UploadPdfModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUploadSuccess: (pdfUrl: string) => void;
}

const UploadPdfModal: React.FC<UploadPdfModalProps> = ({ isOpen, onClose, onUploadSuccess }) => {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPdfFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!pdfFile) {
      setError('Please select a file');
      return;
    }

    try {
      setIsUploading(true);
      setError(null);
      const { pdfUrl } = await uploadPdf(pdfFile);
      onUploadSuccess(pdfUrl); // Pass the URL back to the parent
      onClose(); // Close the modal
    } catch (err) {
      console.error('PDF upload failed:', err);
      setError('Failed to upload PDF. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
        <h2 className="text-lg font-bold mb-4">Upload PDF</h2>
        <input type="file" accept="application/pdf" onChange={handleFileChange} />
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <div className="flex items-center justify-end gap-4 mt-4">
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={handleUpload}
            disabled={isUploading}
          >
            {isUploading ? 'Uploading...' : 'Upload'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadPdfModal;
