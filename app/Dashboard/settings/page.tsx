import FileUpload from "@/components/FileUpload";
import React from "react";

const page = () => {
  return (
    <div className="ml-[5rem]">
      <FileUpload />
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Age
              </th>
              <th scope="col" className="px-6 py-3">
                City
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="row">name</th>
              <td className="px-6 py-4">age</td>
              <td className="px-6 py-4">city</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
