/* eslint-disable react/prop-types */
import Button from "../../shared/UI/Button";

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
    <div>
      <div className="fixed top-0 left-0 w-full h-full bg-gray-700 opacity-80"></div>
      <div className="relative bg-gray-300 w-[600px] gap-6 rounded-lg mx-auto flex flex-col justify-center items-center font-Poppins z-50">
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
    </div>
  );
};

export default DeleteUser;
