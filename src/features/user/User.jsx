import { useState } from "react";
import Button from "../../shared/UI/Button";
import UserForm from "./UserForm";
import UserDelete from "./UserDelete";
import UserTable from "./UserTable";
import userData from "../../userData";

const User = () => {
  //Functionality states
  const [userDetail, setUserDetail] = useState(userData);
  const [isDeleteBtnClicked, setIsDeleteBtnClicked] = useState(false);
  const [isAddUserBtnClicked, setIsAddUserBtnClicked] = useState(false);
  const [editedUser, setEditedUser] = useState(null);
  const [deletedUser, setDeletedUser] = useState(null);

  //Validation States
  const [isNameValid, setIsNameValid] = useState(true);
  const [isAgeValid, setIsAgeValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState({
    validEmail: true,
    isEmailExist: true,
  });
  const [isNumberValid, setIsNumberValid] = useState({
    validNumber: true,
    isNumberExist: true,
  });

  //Handlers
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const changeUserDetail = (userList) => {
    setUserDetail(userList);
  };

  const onShowUserFormToggle = () => {
    setIsAddUserBtnClicked(!isAddUserBtnClicked);
    clearValidation();
  };

  const editUser = (user) => {
    setIsAddUserBtnClicked(!isAddUserBtnClicked);
    setEditedUser(user);
  };

  const deleteUser = (user) => {
    setDeletedUser(user);
    setIsDeleteBtnClicked(!isDeleteBtnClicked);
  };

  const onShowUserDeleteToggle = () => {
    setDeletedUser(null);
    setIsDeleteBtnClicked(!isDeleteBtnClicked);
  };

  const deleteSelectedUser = (user) => {
    const updatedUserList = userDetail.filter((obj) => obj.id !== user.id);
    const updatedListLength = updatedUserList.length;
    let count = updatedListLength - 1;
    updatedUserList.forEach((user) => {
      user.id = updatedListLength - count;
      count--;
    });
    changeUserDetail(updatedUserList);
    onShowUserDeleteToggle();
  };

  const isValidEmail = (email) => {
    return emailRegex.test(email);
  };

  const findIndexById = (id, userData) => {
    return userData.findIndex((obj) => obj.id === id);
  };

  const validateUser = (user) => {
    if (user.name.trim() === "") {
      setIsNameValid(false);
      return;
    } else {
      setIsNameValid(true);
    }

    if (user.age >= 18 && user.age <= 100) {
      setIsAgeValid(true);
    } else {
      setIsAgeValid(false);
      return;
    }

    if (!editedUser || user.email !== editedUser.email) {
      if (!isValidEmail(user.email)) {
        setIsEmailValid({
          ...isEmailValid,
          validEmail: false,
          isEmailExist: true,
        });
        return;
      } else if (isEmailExist(user)) {
        setIsEmailValid({
          ...isEmailValid,
          isEmailExist: false,
          validEmail: true,
        });
        return;
      } else {
        setIsEmailValid({
          ...isEmailValid,
          isEmailExist: true,
          validEmail: true,
        });
      }
    }

    if (!editedUser || user.number !== editedUser.number) {
      if (user.number.length !== 10) {
        setIsNumberValid({
          ...isNumberValid,
          validNumber: false,
          isNumberExist: true,
        });
        return;
      } else if (isNumberExist(user)) {
        setIsNumberValid({
          ...isNumberValid,
          isNumberExist: false,
          validNumber: true,
        });
        return;
      } else {
        setIsNumberValid({
          ...isNumberValid,
          validNumber: true,
          isNumberExist: true,
        });
      }
    }

    const changeArray = [...userDetail];
    console.log(changeArray);

    if (editedUser) {
      const index = findIndexById(editedUser.id, changeArray);
      user.id = index + 1;
      changeArray[index] = user;
    } else {
      user.id = changeArray.length + 1;
      console.log(changeArray);
      // console.log(userList);
      changeArray.push(user);
    }
    setUserDetail(changeArray);
    onShowUserFormToggle();
  };

  const isEmailExist = (user) => {
    if (userDetail.some((e) => e.email === user.email)) {
      return true;
    }
    return;
  };

  const isNumberExist = (user) => {
    if (userDetail.some((e) => e.number === user.number)) {
      return true;
    }
    return;
  };

  const clearValidation = () => {
    setEditedUser(null);
    setDeletedUser(null);
    setIsNameValid(true);
    setIsAgeValid(true);
    setIsEmailValid({
      validEmail: true,
      isEmailExist: true,
    });
    setIsNumberValid({
      validNumber: true,
      isNumberExist: true,
    });
  };

  return (
    <>
      <Button bgColor="bg-blue-700" clickHandler={onShowUserFormToggle}>
        Add User
      </Button>
      <UserTable
        editFunction={editUser}
        deleteFunction={deleteUser}
        userList={userDetail}
      />
      {isAddUserBtnClicked && (
        <UserForm
          onCancel={onShowUserFormToggle}
          editedUser={editedUser}
          validateAndSaveData={validateUser}
          isNameValid={isNameValid}
          isAgeValid={isAgeValid}
          isEmailValid={isEmailValid}
          isNumberValid={isNumberValid}
        />
      )}
      {isDeleteBtnClicked && (
        <UserDelete
          user={deletedUser}
          deleteUser={deleteSelectedUser}
          onCancel={onShowUserDeleteToggle}
        />
      )}
    </>
  );
};

export default User;
