import { useState } from "react";
import Button from "../UI/Button.jsx";
import UserForm from "./UserForm.jsx";
import DeleteForm from "./DeleteForm.jsx";
import UserTable from "./UserTable.jsx";

const HomePage = () => {
  const [deleteClicked, setDeleteClicked] = useState(false);
  const [addUserClicked, setAddUserClicked] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);

  const addUserClickHandler = () => {
    setAddUserClicked(!addUserClicked);
    setEditUser(null);
    setDeleteUser(null);
  };

  const editUserClickHandler = (user) => {
    setAddUserClicked(!addUserClicked);
    setEditUser(user);
  };

  const deleteUserClickHandler = (user) => {
    setDeleteUser(user);
    setDeleteClicked(!deleteClicked);
  };

  const changeDeleteState = () => {
    setDeleteUser(null);
    setDeleteClicked(!deleteClicked);
  };

  return (
    <div>
      {!deleteUser && !addUserClicked ? (
        <Button bgColor="bg-blue-700" clickHandler={addUserClickHandler}>
          Add User
        </Button>
      ) : (
        <Button bgColor="bg-blue-700 hidden" clickHandler={addUserClickHandler}>
          Add User
        </Button>
      )}

      {addUserClicked ? (
        <UserForm addHandler={addUserClickHandler} user={editUser} />
      ) : deleteUser ? (
        <DeleteForm user={deleteUser} buttonHandler={changeDeleteState} />
      ) : (
        <UserTable
          editFunction={editUserClickHandler}
          deleteFunction={deleteUserClickHandler}
        />
      )}
    </div>
  );
};

export default HomePage;
