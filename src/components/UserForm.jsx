/* eslint-disable react/prop-types */
import { useState } from "react";
import userData from "../userData";
import Button from "../UI/Button";

const UserForm = ({ cancelEdit }) => {
  const [data, setData] = useState({ name: "", email: "", number: "" });

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const isValidEmail = (email) => {
    // console.log(emailRegex.test(email));
    return emailRegex.test(email);
  };

  console.log(data);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    validateData(data);
  };

  const validateData = (data) => {
    if (data.name === "") {
      console.log("Please provide a name");
      return false;
    }

    if (!isValidEmail(data.email)) {
      console.log("Please provide a valid email");
      return false;
    }

    if (data.number.length !== 10) {
      console.log("Please provide a number and it must be 10 character long");
      return false;
    }

    console.log("Data is valid");
    return true;
  };

  return (
    <div className="bg-gray-300 w-[600px] rounded-lg mx-auto flex justify-center items-center font-Poppins font-medium">
      <form action="" className="flex flex-col gap-2 text-left p-4 ">
        <label htmlFor="Name">Name</label>
        <input
          type="text"
          id="Name"
          className="border-1 rounded-md"
          value={data.name}
          name="name"
          onChange={handleChange}
        />
        <label htmlFor="Email">Email</label>
        <input
          type="text"
          id="Email"
          className="border-1 rounded-md"
          value={data.email}
          name="email"
          onChange={handleChange}
        />
        <label htmlFor="contactNum">Number</label>
        <input
          type="number"
          id="contactNum"
          className="border-1 rounded-md"
          value={data.number}
          name="number"
          onChange={handleChange}
        />
        <div className="mx-auto">
          {validateData(data) && <Button bgColor="bg-blue-700">Save</Button>}

          <Button bgColor="bg-red-500" clickHandler={cancelEdit}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
