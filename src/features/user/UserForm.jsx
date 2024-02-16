/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../../shared/UI/Button";

const UserForm = ({ addUser, editUser, userList, changeUserList }) => {
  const [user, setUser] = useState({
    name: editUser ? editUser.name : "",
    age: editUser ? editUser.age : "",
    email: editUser ? editUser.email : "",
    number: editUser ? editUser.number : "",
  });

  //Validation States
  const [nameValidation, setNameValidation] = useState(false);
  const [ageValidation, setAgeValidation] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);
  const [numberValidation, setNumberValidation] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const isValidEmail = (email) => {
    return emailRegex.test(email);
  };

  const findIndexById = (id, userData) => {
    return userData.findIndex((obj) => obj.id === id);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const validateUser = (user) => {
    if (user.name.trim() === "") {
      setNameValidation(true);
      return;
    } else {
      setNameValidation(false);
    }

    if (user.age >= 18 && user.age <= 100) {
      setAgeValidation(false);
    } else {
      setAgeValidation(true);
      return;
    }

    if (!isValidEmail(user.email)) {
      setEmailValidation(true);
      return;
    } else {
      setEmailValidation(false);
    }

    if (user.number.length !== 10) {
      setNumberValidation(true);
      return;
    } else {
      setNumberValidation(false);
    }

    if (editUser) {
      const index = findIndexById(editUser.id, userList);
      user.id = index + 1;
      userList[index] = user;
    } else {
      user.id = userList.length + 1;
      // console.log(userList);
      userList.push(user);
    }
    changeUserList(userList);
    addUser();
  };

  return (
    <div className="bg-gray-300 w-[600px] rounded-lg mx-auto flex flex-col justify-center items-center font-Poppins font-medium">
      <h2 className="font-bold">User Form</h2>
      <form action="" className="flex flex-col gap-4 text-left p-4 ">
        <label htmlFor="Name" className="font-semibold">
          Name
        </label>
        <input
          type="text"
          id="Name"
          className="border-1 rounded-sm"
          value={user.name}
          name="name"
          onChange={handleChange}
        />
        {nameValidation && (
          <span className="text-red-500">Please provide a name</span>
        )}
        <label htmlFor="age" className="font-semibold">
          Age
        </label>
        <input
          type="number"
          id="age"
          className="border-1 rounded-sm"
          value={user.age}
          name="age"
          onChange={handleChange}
        />
        {ageValidation && (
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
          className="border-1 rounded-sm"
          value={user.email}
          name="email"
          onChange={handleChange}
        />
        {emailValidation && (
          <span className="text-red-500">Please provide a valid email</span>
        )}
        <label htmlFor="contactNum" className="font-semibold">
          Number (10 characters)
        </label>
        <input
          type="number"
          id="contactNum"
          className="border-1 rounded-sm"
          value={user.number}
          name="number"
          onChange={handleChange}
        />
        {numberValidation && (
          <span className="text-red-500">
            Please provide a number and it must be 10 character long
          </span>
        )}
        <div className="mx-auto">
          <Button bgColor="bg-blue-700" clickHandler={() => validateUser(user)}>
            Save
          </Button>
          <Button bgColor="bg-red-500" clickHandler={() => addUser()}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
