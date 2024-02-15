import { useState } from "react";
import Button from "../UI/Button.jsx";
import UserForm from "./UserForm.jsx";
import DeleteUser from "./DeleteUser.jsx";
import UserTable from "./UserTable.jsx";
import userData from "../userData.js";

const UserList = () => {
  //Functionality states
  const [userDetail, setUserDetail] = useState(userData);
  const [deleteClicked, setDeleteClicked] = useState(false);
  const [addUserClicked, setAddUserClicked] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);

  //Handlers
  const changeUserDetail = (userList) => {
    setUserDetail(userList);
  };

  const addUser = () => {
    setAddUserClicked(!addUserClicked);
    setEditUser(null);
    setDeleteUser(null);
  };

  const editUserHandler = (user) => {
    setAddUserClicked(!addUserClicked);
    setEditUser(user);
  };

  const deleteUserHandler = (user) => {
    setDeleteUser(user);
    setDeleteClicked(!deleteClicked);
  };

  const changeDeleteState = () => {
    setDeleteUser(null);
    setDeleteClicked(!deleteClicked);
  };

  return (
    <div>
      {!deleteUser && !addUserClicked && (
        <Button bgColor="bg-blue-700" clickHandler={addUser}>
          Add User
        </Button>
      )}

      {(addUserClicked && (
        <UserForm
          addUser={addUser}
          editUser={editUser}
          userList={userDetail}
          changeUserList={changeUserDetail}
        />
      )) ||
        (deleteUser && (
          <DeleteUser
            deleteUser={deleteUser}
            userDelete={changeDeleteState}
            userList={userDetail}
            changeUserList={changeUserDetail}
          />
        )) || (
          <UserTable
            editFunction={editUserHandler}
            deleteFunction={deleteUserHandler}
            users={userDetail}
          />
        )}
    </div>
  );
};

export default UserList;
