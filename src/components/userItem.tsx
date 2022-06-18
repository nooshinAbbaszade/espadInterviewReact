import React, { useState } from 'react';
import { ReactComponent as EditIcon } from "../assets/image/editIcon.svg";
import { ReactComponent as Verify } from "../assets/image/verify.svg";
import { ReactComponent as NotVerify } from "../assets/image/notVerify.svg";
import { ReactComponent as CameraIcon } from "../assets/image/camera.svg";
import {UserDataType} from "../types/app";

const UserItem = ({
  user,
  handleCheckUser,
  selectUserForPin,
  showFormUserModal
}: {
  user:UserDataType;
  handleCheckUser:Function;
  selectUserForPin:Function;
  showFormUserModal:Function
}) => {
  const isVerify = Object.keys(user).every(function(key, index) {
    return user && user[key].isVerify;
  });
  const handleChecked = () => {
    selectUserForPin(!user?.pin.pin)
  }
  return (
    <div className='userItem py-2 mt-2 d-flex'>
      <div className="width-150 rounded mr-2 d-flex align-items-center justify-content-center">
      {user?.profilePic.profilePic ?
        <img src={user?.profilePic.profilePic} className='w-100 h-100 object-fit-cover'/> :
          <CameraIcon />
      }
      </div>
      <div className='w-100 flex-column d-flex justify-content-center'>
        <div className='d-flex'>
          <div className='d-flex flex-column  justify-content-center w-100'>
            <p>Name : {user?.name.name}</p>
            <p>Family Name : {user?.familyName.familyName}</p>
            <p>Birth Date : {user?.birthDate.birthDate}</p>
          </div>
          <div className='d-flex'>
            <EditIcon className='cur-pointer' onClick={()=>showFormUserModal()}/>
            <input type="checkbox" checked={user?.pin.pin} onChange={()=>handleChecked()} className='cur-pointer ml-2'/>
          </div>

        </div>
        <div className='d-flex justify-content-between align-items-center'>
          {
            isVerify ?
              <Verify className='bg-green'/> :
              <>
                <NotVerify className='bg-red'/>
                <button className='btn btn-primary cur-pointer' onClick={()=>handleCheckUser()}>check</button>
              </>
          }
        </div>
      </div>
    </div>
  );
};

export default UserItem;
