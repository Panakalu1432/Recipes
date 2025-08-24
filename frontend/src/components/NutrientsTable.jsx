import React from "react";

const NutrientsTable = ({ nutrients }) => {
  if (!nutrients) return null;

  return (
    <table className="table-auto border-collapse border border-gray-300 w-full text-sm mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">Nutrient</th>
          <th className="border p-2">Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(nutrients).map(([key, value]) => (
          <tr key={key}>
            <td className="border p-2">{key}</td>
            <td className="border p-2">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default NutrientsTable;
