import { useState } from "react";
import Button from "../UI/Button.jsx";
import userData from "./../userData.js";
import UserForm from "./UserForm.jsx";

const UserTable = () => {
  // const [editClicked, setEditClicked] = useState(false);
  const [addUserClicked, setAddUserClicked] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const addUserClickHandler = () => {
    setAddUserClicked(!addUserClicked);
    setEditUser(null);
    // console.log(addUserClicked);
  };

  const editUserClickHandler = (user) => {
    setAddUserClicked(!addUserClicked);
    setEditUser(user);
  };

  return (
    <div>
      {!addUserClicked && (
        <Button bgColor="bg-blue-700" clickHandler={addUserClickHandler}>
          Add User
        </Button>
      )}
      {addUserClicked ? (
        <UserForm addHandler={addUserClickHandler} user={editUser} />
      ) : (
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
                        clickHandler={() => editUserClickHandler(Element)}
                      >
                        Edit
                      </Button>
                      <Button bgColor="bg-red-500">Delete</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserTable;
