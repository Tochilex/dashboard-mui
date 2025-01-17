"use client";

import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { parseExcel } from "../utils/parseExcel"; // Import your Excel parsing function

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [parsedData, setParsedData] = useState(null);
  //const isSubmitting = useRef(false); // Use a ref to track submission state

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { isLoading, error, data } = useQuery({
    queryKey: ["excelData"],
    queryFn: () => parseExcel(file),
  });

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    //const file = event.target.files[0];
    // ... handle file upload logic
    // Update a state variable to hold the file
    //setFile(file);
  };

  const handleSubmitForm = async (data) => {
    // Handle form submission and data processing
    //isSubmitting.current = true; // Set submitting flag to true
    try {
      const parsedData = await parseExcel(file);
      setParsedData(parsedData);
      // Handle the parsed data, e.g., send it to the backend or display it
    } catch (error) {
      console.error("Error parsing file:", error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <input
          type="file"
          {...register("file", { required: true })}
          onChange={handleFileChange}
        />
        {errors.file && <span>File is required</span>}
        <button type="submit">Upload</button>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && <div>Data from Excel: {JSON.stringify(data)}</div>}
      </form>
    </div>
  );
};

export default function Wraped() {
  return (
    <QueryClientProvider client={queryClient}>
      <FileUpload />
    </QueryClientProvider>
  );
}
