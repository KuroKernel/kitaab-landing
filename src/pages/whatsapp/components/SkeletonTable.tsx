import React from 'react';

interface SkeletonTableProps {
  rows?: number;
  columns?: number;
}

const SkeletonTable: React.FC<SkeletonTableProps> = ({ rows = 5, columns = 6 }) => {
  return (
    <div className="overflow-x-auto animate-pulse">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            {Array.from({ length: columns }).map((_, i) => (
              <th key={i} className="text-left py-3 px-4">
                <div className="h-4 bg-gray-200 rounded w-24"></div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={rowIndex} className="border-b border-gray-100">
              {Array.from({ length: columns }).map((_, colIndex) => (
                <td key={colIndex} className="py-3 px-4">
                  <div className={`h-4 bg-gray-200 rounded ${
                    colIndex === 0 ? 'w-32' : 'w-16'
                  }`}></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SkeletonTable;
