/* eslint-disable react/prop-types */
import Button from "../UI/Button";

const DeleteUser = ({ deleteUser, userDelete, userList, changeUserList }) => {
  const removeUser = (deleteUser) => {
    const index = userList.findIndex((obj) => obj.id === deleteUser.id);
    userList.splice(index, 1);
    const length = userList.length;
    for (let i = 0; i < length; i++) {
      userList[i].id = i + 1;
    }
    changeUserList(userList);
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
