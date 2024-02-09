import { useState } from "react";
import Button from "../UI/Button.jsx";

const Table = () => {
  const [editClicked, setEditClicked] = useState(false);

  const handleClick = () => {
    setEditClicked(true);
  };

  return (
    <div className="relative shadow-md rounded-lg">
      <table className="w-full text-left">
        <thead className="text-base text-gray-700 uppercase bg-gray-100">
          <tr>
            <th className="px-6 py-3">Sr No.</th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Age</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Number</th>
            <th className="px-6 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">Akshat</td>
            <td className="px-6 py-4">22</td>
            <td className="px-6 py-4">ask123@gmail.com</td>
            <td className="px-6 py-4">1234567890</td>
            <td className="px-6 py-4 flex items-center justify-center">
              <Button bgColor="bg-blue-700" clickHandler={handleClick}>
                Edit
              </Button>
              <Button bgColor="bg-red-500">Delete</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
