/* eslint-disable react/prop-types */
import userData from "../userData";
import Button from "../UI/Button";

const UserTable = ({ editFunction, deleteFunction }) => {
  return (
    <div className="relative shadow-md rounded-lg font-Poppins">
      <table className="w-full text-left">
        <thead className="text-base text-gray-700 uppercase bg-gray-100">
          <tr>
            <th className="px-6 py-3">Sr No.</th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Number</th>
            <th className="px-6 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((Element) => {
            return (
              <tr key={Element.id} className="bg-white border-b">
                <td className="px-6 py-4">{Element.id}</td>
                <td className="px-6 py-4">{Element.name}</td>
                <td className="px-6 py-4">{Element.email}</td>
                <td className="px-6 py-4">{Element.number}</td>
                <td className="px-6 py-4 flex items-center justify-center">
                  <Button
                    bgColor="bg-blue-700"
                    clickHandler={() => editFunction(Element)}
                  >
                    Edit
                  </Button>
                  <Button
                    bgColor="bg-red-500"
                    clickHandler={() => deleteFunction(Element)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
