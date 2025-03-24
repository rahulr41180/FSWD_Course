import React from "react";

const Layout = () => {
  return (
    <div className="overflow-x-auto max-w-full">
      <table className="min-w-full table-auto border-collapse bg-white rounded-lg shadow-lg">
        <thead className="bg-gray-200">
          <tr>
            {[...Array(7)].map((_, index) => (
              <th className="py-2 px-4 text-left text-sm font-semibold text-gray-700">
                <div className="bg-gray-300 h-4 w-20 rounded-md animate-pulse"></div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(10)].map((_, index) => (
            <tr key={index} className="border-t">
              {[...Array(7)].map((_, index) => (
                <td className="py-2 px-4">
                  <div className="bg-gray-300 h-4 w-20 rounded-md animate-pulse"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Layout;