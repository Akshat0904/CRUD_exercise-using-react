/* eslint-disable react/prop-types */
// import { useState } from "react";
import Button from "../UI/Button";

const UserForm = ({ cancelEdit }) => {
  return (
    <div className="bg-gray-300 w-[600px] rounded-lg mx-auto flex justify-center items-center font-Poppins font-medium">
      <form action="" className="flex flex-col gap-2 text-left p-4 ">
        <label htmlFor="Name">Name</label>
        <input type="text" id="Name" className="border-1 rounded-md" />
        <label htmlFor="Email">Email</label>
        <input type="text" id="Email" className="border-1 rounded-md" />
        <label htmlFor="contactNum">Number</label>
        <input type="number" id="contactNum" className="border-1 rounded-md" />
        <div className="mx-auto">
          <Button bgColor="bg-blue-700">Save</Button>
          <Button bgColor="bg-red-500" clickHandler={cancelEdit}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
