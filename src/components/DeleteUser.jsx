/* eslint-disable react/prop-types */
import Button from "../UI/Button";

const DeleteUser = ({ deleteUser, userDelete, userList, changeUserList }) => {
  // Delete user function
  const removeUser = (deleteUser) => {
    const updatedList = userList.filter((obj) => obj.id !== deleteUser.id);
    console.log(updatedList);
    const length = updatedList.length;
    let count = length - 1;
    updatedList.forEach((user) => {
      user.id = length - count;
      count--;
    });
    changeUserList(updatedList);
    userDelete();
  };

  return (
    <div className="bg-gray-300 w-[600px] gap-6 rounded-lg mx-auto flex flex-col justify-center items-center font-Poppins">
      <h2 className="  font-bold">Delete User</h2>
      <p className="font-bold text-lg">
        Are You sure, You want to delete the user {deleteUser.name}?
      </p>
      <div className="flex flex-row gap-5">
        <Button
          bgColor="bg-red-500"
          clickHandler={() => removeUser(deleteUser)}
        >
          Confirm
        </Button>
        <Button bgColor="bg-blue-700" clickHandler={userDelete}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default DeleteUser;
