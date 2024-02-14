/* eslint-disable react/prop-types */
import Button from "../UI/Button";
import userData from "../userData";

const DeleteForm = ({ user, buttonHandler }) => {
  console.log(user);
  const deleteUser = (user) => {
    const index = userData.findIndex((obj) => obj.id === user.id);
    userData.splice(index, 1);
    const length = userData.length;

    for (let i = 0; i < length; i++) {
      userData[i].id = i + 1;
    }

    buttonHandler();
    console.log(userData);
  };

  return (
    <div className="bg-gray-300 w-[600px] rounded-lg mx-auto flex flex-col justify-center items-center font-Poppins font-medium">
      <p>Are You sure, You want to delete the user {user.name}?</p>
      <div className="flex flex-row gap-5">
        <Button bgColor="bg-red-500" clickHandler={() => deleteUser(user)}>
          Confirm
        </Button>
        <Button bgColor="bg-blue-700" clickHandler={buttonHandler}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default DeleteForm;
