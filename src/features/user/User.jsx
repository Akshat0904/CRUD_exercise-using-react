import { useState } from "react";
import UserForm from "./UserForm";
import UserDelete from "./UserDelete";
import UserTable from "./UserTable";
import userData from "../../userData";

const User = () => {
  //Functionality states
  const [users, setUsers] = useState(userData);
  const [showUserForm, setShowUserForm] = useState(false);
  const [selEditUser, setSelEditUser] = useState(null);
  const [selDeleteUser, setSelDeleteUser] = useState(null);

  const onAddEditUser = (user) => {
    setShowUserForm(!showUserForm);
    setSelEditUser(user);
  };

  const onCancelUserForm = () => {
    setShowUserForm(!showUserForm);
  };

  const onDeleteUser = (user) => {
    setSelDeleteUser(user);
  };

  const onCancelUserDelete = () => {
    setSelDeleteUser(null);
  };

  const deleteSelectedUser = (user) => {
    const updatedUserList = users.filter((obj) => obj.id !== user.id);
    setUsers(updatedUserList);
    setSelDeleteUser(null);
  };

  const saveUser = (user) => {
    const usersArray = [...users];
    console.log(usersArray);

    if (selEditUser) {
      const index = usersArray.findIndex((obj) => obj.id === user.id);
      let updatedUser = {
        ...selEditUser,
        name: user.name,
        email: user.email,
        number: user.number,
        age: user.age,
      };
      usersArray[index] = updatedUser;
    } else {
      user.id = Math.max(...users.map((obj) => obj.id)) + 1;
      console.log(user.id);
      console.log(usersArray);
      usersArray.push(user);
    }
    setUsers(usersArray);
    onAddEditUser();
  };

  const isEmailExist = (user) => {
    if (users.some((e) => e.email === user.email)) {
      return true;
    }
    return;
  };

  const isNumberExist = (user) => {
    if (users.some((e) => e.number === user.number)) {
      return true;
    }
    return;
  };

  return (
    <>
      <UserTable
        onAddEditUser={onAddEditUser}
        onDeleteUser={onDeleteUser}
        users={users}
      />
      {showUserForm && (
        <UserForm
          onCancel={onCancelUserForm}
          selectedUser={selEditUser}
          saveUser={saveUser}
          isEmailExist={isEmailExist}
          isNumberExist={isNumberExist}
        />
      )}

      {selDeleteUser && (
        <UserDelete
          user={selDeleteUser}
          deleteUser={deleteSelectedUser}
          onCancel={onCancelUserDelete}
        />
      )}
    </>
  );
};

export default User;
