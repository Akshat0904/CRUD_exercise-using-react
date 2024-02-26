/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../../shared/UI/Button";

const UserForm = ({
  addUser,
  editUser,
  validateData,
  isNameValid,
  isAgeValid,
  isEmailValid,
  isNumberValid,
}) => {
  const [user, setUser] = useState({
    name: editUser ? editUser.name : "",
    age: editUser ? editUser.age : "",
    email: editUser ? editUser.email : "",
    number: editUser ? editUser.number : "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full bg-gray-700 opacity-80"></div>
      <div className="relative bg-white bg-opacity-100 w-[600px] rounded-lg mx-auto flex flex-col justify-center items-center font-Poppins font-medium z-50">
        <h2 className="font-bold">User Form</h2>
        <form action="" className="flex flex-col gap-4 text-left p-4">
          <label htmlFor="Name" className="font-semibold">
            Name
          </label>
          <input
            type="text"
            id="Name"
            className="border-gray-300 border-2 rounded-sm"
            value={user.name}
            name="name"
            onChange={handleChange}
          />
          {isNameValid && (
            <span className="text-red-500">Please provide a name</span>
          )}
          <label htmlFor="age" className="font-semibold">
            Age
          </label>
          <input
            type="number"
            id="age"
            className="border-gray-300 border-2 rounded-sm"
            value={user.age}
            name="age"
            onChange={handleChange}
          />
          {isAgeValid && (
            <span className="text-red-500">
              Age must be greater than or equal to 18
            </span>
          )}
          <label htmlFor="Email" className="font-semibold">
            Email
          </label>
          <input
            type="text"
            id="Email"
            className="border-gray-300 border-2 rounded-sm"
            value={user.email}
            name="email"
            onChange={handleChange}
          />
          {isEmailValid && (
            <span className="text-red-500">Please provide a valid email</span>
          )}
          <label htmlFor="contactNum" className="font-semibold">
            Number (10 characters)
          </label>
          <input
            type="number"
            id="contactNum"
            className="border-gray-300 border-2 rounded-sm"
            value={user.number}
            name="number"
            onChange={handleChange}
          />
          {isNumberValid && (
            <span className="text-red-500">
              Please provide a number and it must be 10 character long
            </span>
          )}
          <div className="mx-auto">
            <Button
              bgColor="bg-blue-700"
              clickHandler={() => validateData(user)}
            >
              Save
            </Button>
            <Button bgColor="bg-red-500" clickHandler={() => addUser()}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
