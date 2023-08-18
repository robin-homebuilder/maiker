import React, { useCallback, useState } from "react";

import { useDropzone } from "react-dropzone";

import { RxUpload } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";

interface FileUploadProps {
  onFileUploaded: (files: File[]) => void;
}

export default function FileUpload({ onFileUploaded } : FileUploadProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onFileUploaded(acceptedFiles);
  }, [onFileUploaded]);

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    multiple: true,
    accept: {'application/pdf': []},
    maxSize: 2 * 1024 * 1024,
  });

  return (
    <div className="flex flex-wrap justify-center items-center gap-y-0 w-full h-full p-10 relative">
      <div {...getRootProps()} className="w-full h-full flex items-center">
        <div className={`${isDragActive ? "flex bg-[#00000080]" : "hidden"} absolute top-0 left-0 w-full h-full items-center justify-center`}><FaPlus size={100}/></div>
        <div className="flex flex-wrap justify-center items-center">
          <input {...getInputProps()} />
          <h3 className='text-center text-tertiary text-[40px]'><RxUpload /></h3>
          <h3 className='text-tertiary text-[25px] font-[500] w-full text-center'>Drag and Drop File</h3>
          <h3 className='text-tertiary text-[25px] font-[500] w-full text-center'>or</h3>
          <button type="button" className="border border-tertiary bg-tertiary rounded-[20px] text-white text-[16px] font-[500] shadow-mainShadow w-[200px] h-[42px] mb-2.5">Browse</button>
          <p className="text-dark text-center w-full">Max size 2MB and pdf format</p>
          {isDragReject && <p className="text-danger">Files do not meet the specified requirements.</p>}
        </div>
      </div>
    </div>
  );
};