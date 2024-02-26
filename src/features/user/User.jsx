import { useState } from "react";
import Button from "../../shared/UI/Button";
import UserForm from "./UserForm";
import DeleteUser from "./DeleteUser";
import UserTable from "./UserTable";
import userData from "../../userData";

const User = () => {
  //Functionality states
  const [userDetail, setUserDetail] = useState(userData);
  const [isDeleteBtnClicked, setIsDeleteBtnClicked] = useState(false);
  const [isAddUserBtnClicked, setIsAddUserBtnClicked] = useState(false);
  const [editedUser, setEditedUser] = useState(null);
  const [deletedUser, setDeletedUser] = useState(null);

  //Handlers
  const changeUserDetail = (userList) => {
    setUserDetail(userList);
  };

  const addUser = () => {
    setIsAddUserBtnClicked(!isAddUserBtnClicked);
    setEditedUser(null);
    setDeletedUser(null);
  };

  const editUser = (user) => {
    setIsAddUserBtnClicked(!isAddUserBtnClicked);
    setEditedUser(user);
  };

  const deleteUser = (user) => {
    setDeletedUser(user);
    setIsDeleteBtnClicked(!isDeleteBtnClicked);
  };

  const changeDeleteState = () => {
    setDeletedUser(null);
    setIsDeleteBtnClicked(!isDeleteBtnClicked);
  };

  //Validation States
  const [isNameValid, setIsNameValid] = useState(false);
  const [isAgeValid, setIsAgeValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isNumberValid, setIsNumberValid] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const isValidEmail = (email) => {
    return emailRegex.test(email);
  };

  const findIndexById = (id, userData) => {
    return userData.findIndex((obj) => obj.id === id);
  };

  const validateUser = (user) => {
    if (user.name.trim() === "") {
      setIsNameValid(true);
      return;
    } else {
      setIsNameValid(false);
    }

    if (user.age >= 18 && user.age <= 100) {
      setIsAgeValid(false);
    } else {
      setIsAgeValid(true);
      return;
    }
    console.log(isEmailExist(user));
    if (!isValidEmail(user.email)) {
      setIsEmailValid(true);
      return;
    } else {
      setIsEmailValid(false);
    }

    console.log(isNumberExist(user));

    if (user.number.length !== 10) {
      setIsNumberValid(true);
      return;
    } else {
      setIsNumberValid(false);
    }

    const changeArray = [...userDetail];
    console.log(changeArray);
    // user.id = changeArray.length + 1;
    // changeArray.push(user);

    if (editedUser) {
      const index = findIndexById(editedUser.id, changeArray);
      user.id = index + 1;
      changeArray[index] = user;
    } else {
      user.id = changeArray.length + 1;
      console.log(changeArray);
      // console.log(userList);ho
      changeArray.push(user);
    }
    setUserDetail(changeArray);
    addUser(user);
  };

  const isEmailExist = (user) => {
    return userDetail.includes(user.email);
  };

  const isNumberExist = (user) => {
    return userDetail.includes(user.number);
  };

  return (
    <>
      <Button bgColor="bg-blue-700" clickHandler={addUser}>
        Add User
      </Button>
      <UserTable
        editFunction={editUser}
        deleteFunction={deleteUser}
        userList={userDetail}
      />
      {isAddUserBtnClicked && (
        <UserForm
          addUser={addUser}
          editUser={editedUser}
          validateData={validateUser}
          isNameValid={isNameValid}
          isAgeValid={isAgeValid}
          isEmailValid={isEmailValid}
          isNumberValid={isNumberValid}
        />
      )}
      {isDeleteBtnClicked && (
        <DeleteUser
          deleteUser={deletedUser}
          userDelete={changeDeleteState}
          userList={userDetail}
          changeUserList={changeUserDetail}
        />
      )}
    </>
  );
};

export default User;
