/* eslint-disable react/prop-types */
import Button from "../UI/Button";

const UserTable = ({ editFunction, deleteFunction, userList }) => {
  return (
    <div className="relative shadow-md rounded-lg font-Poppins">
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
          {userList.map((user) => {
            return (
              <tr key={user.id} className="bg-white border-b">
                <td className="px-6 py-4">{user.id}</td>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.age}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.number}</td>
                <td className="px-6 py-4 flex items-center justify-center">
                  <Button
                    bgColor="bg-blue-700"
                    clickHandler={() => editFunction(user)}
                  >
                    Edit
                  </Button>
                  <Button
                    bgColor="bg-red-500"
                    clickHandler={() => deleteFunction(user)}
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
