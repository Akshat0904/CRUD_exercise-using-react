/* eslint-disable react/prop-types */
import { useState } from "react";
import userData from "../userData";
import Button from "../UI/Button";

const UserForm = ({ addHandler, user }) => {
  const [data, setData] = useState({
    name: user ? user.name : "",
    email: user ? user.email : "",
    number: user ? user.number : "",
  });

  //Validation States
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [numberError, setNumberError] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const isValidEmail = (email) => {
    return emailRegex.test(email);
  };

  const findIndexById = (id, userData) => {
    return userData.findIndex((obj) => obj.id === id);
  };

  console.log(data);
  console.log(user);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validateData = (data) => {
    if (data.name === "") {
      setNameError(true);
      console.log("Please provide a name");
      return false;
    } else {
      setNameError(false);
    }

    if (!isValidEmail(data.email)) {
      setEmailError(true);
      console.log("Please provide a valid email");
      return false;
    } else {
      setEmailError(false);
    }

    if (data.number.length !== 10) {
      setNumberError(true);
      console.log("Please provide a number and it must be 10 character long");
      return false;
    } else {
      setNumberError(false);
    }

    if (user) {
      const index = findIndexById(user.id, userData);
      data.id = index + 1;
      userData[index] = data;
    } else {
      data.id = userData.length + 1;
      userData.push(data);
    }

    console.log(userData);
    addHandler();

    console.log(data);

    console.log("Data is valid");
    return true;
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
          value={data.name}
          name="name"
          onChange={handleChange}
        />
        {nameError && (
          <span className="text-red-500">Please provide a name</span>
        )}
        <label htmlFor="Email" className="font-semibold">
          Email
        </label>
        <input
          type="text"
          id="Email"
          className="border-1 rounded-sm"
          value={data.email}
          name="email"
          onChange={handleChange}
        />
        {emailError && (
          <span className="text-red-500">Please provide a valid email</span>
        )}
        <label htmlFor="contactNum" className="font-semibold">
          Number (10 characters)
        </label>
        <input
          type="number"
          id="contactNum"
          className="border-1 rounded-sm"
          value={data.number}
          name="number"
          onChange={handleChange}
        />
        {numberError && (
          <span className="text-red-500">
            Please provide a number and it must be 10 character long
          </span>
        )}
        <div className="mx-auto">
          <Button bgColor="bg-blue-700" clickHandler={() => validateData(data)}>
            Save
          </Button>
          <Button bgColor="bg-red-500" clickHandler={addHandler}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
