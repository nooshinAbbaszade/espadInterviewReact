import React, {useEffect} from 'react';
import { fileToBase64 } from "../utils/fileToBase64";
import {ReactComponent as CameraIcon } from '../assets/image/camera.svg';
import {UserDataType} from "../types/app";

const FormUser = ({
  newUser,
  setNewUser,
  handleCloseFormUserModal,
  handleSaveUser,
  errorForm
} : {
  newUser:UserDataType;
  setNewUser:Function;
  handleCloseFormUserModal:Function;
  handleSaveUser:Function;
  errorForm:boolean;
}) => {
  const changeAvatar = async (e:any) => {
    const files = e.target.files;
    for(let item of files){
      await fileToBase64(item, 'image')
        .then((res) => {
          setNewUser({
            ...newUser,
            profilePic:{
              ...newUser.profilePic,
              value: res
            }
          });
        })
    }
  }
  const userCopy = {...newUser};
  return (
    <div className='mt-4'>
      {Object.keys(userCopy).map((key,index)=>
        key !== 'profilePic' &&
        key !== 'pin' &&
        <div className='d-flex mb-4 justify-content-between'>
        <p className="font-12 mr-2 mb-0 d-flex align-items-center">{key}:</p>
        <input
        className='form-control w-75'
        type="text"
        value={newUser[key].value}
        onChange={(e) => {
          userCopy[key].value = e.target.value;
          setNewUser(userCopy)
        }}
        />
        </div>
      )}
      <div className='d-flex mb-4 justify-content-between'>
        <p className="font-12 mr-2 mb-0 d-flex align-items-center">Profile Pic:</p>
        <div className="uploader-item file-uploader-box rounded w-75">
          <input onChange={changeAvatar} className="file-uploader" type="file"/>
          < div className='profileImg rounded cur-pointer bg-white d-flex justify-content-center align-items-center border'>
            {
              newUser?.profilePic.value ?
                <img src={newUser?.profilePic.value} className='w-100 h-100'/>
                :
                <CameraIcon />

            }
          </div>


        </div>
      </div>


      {errorForm && <p className='font-14 bg-red'>اطلاعات را تکمیل کنید</p>}
      <div className='d-flex rtl'>
        <button className='btn btn-primary' onClick={()=>handleSaveUser(newUser?.idNo.value)}>save</button>
        <button className='btn btn-secondary mx-2' onClick={()=>handleCloseFormUserModal()}>back</button>
      </div>

    </div>
  );
};

export default FormUser;
