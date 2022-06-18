import React  from 'react';
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
        .then((value) => {
          setNewUser({
            ...newUser,
            profilePic:{
              profilePic: value,
              isVerify:false
            }
          });
        })
    }
  }
  return (
    <div className='mt-4'>
        <div className='d-flex mb-4 justify-content-between'>
          <p className="font-12 mr-2 mb-0 d-flex align-items-center">Name:</p>
          <input
            className='form-control w-75'
            type="text"
            value={newUser?.name.name}
            onChange={(e) => setNewUser({...newUser ,name:{name:e.target.value,isVerify: false}})}
          />
        </div>
      <div className='d-flex mb-4 justify-content-between'>
        <p className="font-12 mr-2 mb-0 d-flex align-items-center">Family Name:</p>
        <input
          className='form-control w-75'
          type="text"
          value={newUser?.familyName.familyName}
          onChange={(e) => setNewUser({...newUser ,familyName:{familyName:e.target.value,isVerify: false}})}
        />
      </div>
      <div className='d-flex mb-4 justify-content-between'>
        <p className="font-12 mr-2 mb-0 d-flex align-items-center">Mobile:</p>
        <input
          className='form-control w-75'
          type="text"
          value={newUser?.mobile.mobile}
          onChange={(e) => setNewUser({...newUser ,mobile:{mobile:e.target.value,isVerify: false}})}
        />
      </div>
      <div className='d-flex mb-4 justify-content-between'>
        <p className="font-12 mr-2 mb-0 d-flex align-items-center">ID NO:</p>
        <input
          className='form-control w-75'
          type="text"
          value={newUser?.idNo.idNo}
          onChange={(e) => setNewUser({...newUser ,idNo:{idNo:e.target.value,isVerify: false}})}
        />
      </div>
      <div className='d-flex mb-4 justify-content-between'>
        <p className="font-12 mr-2 mb-0 d-flex align-items-center">Birth Date:</p>
        <input
          className='form-control w-75'
          type="text"
          value={newUser?.birthDate.birthDate}
          onChange={(e) => setNewUser({...newUser ,birthDate:{birthDate:e.target.value,isVerify: false}})}
        />
      </div>
      <div className='d-flex mb-4 justify-content-between'>
        <p className="font-12 mr-2 mb-0 d-flex align-items-center">Address:</p>
        <input
          className='form-control w-75'
          type="text"
          value={newUser?.address.address}
          onChange={(e) => setNewUser({...newUser ,address:{address:e.target.value,isVerify: false}})}
        />
      </div>

      <div className='d-flex mb-4 justify-content-between'>
        <p className="font-12 mr-2 mb-0 d-flex align-items-center">Profile Pic:</p>
        <div className="uploader-item file-uploader-box rounded w-75">
          <input onChange={changeAvatar} className="file-uploader" type="file"/>
          < div className='profileImg rounded cur-pointer bg-white d-flex justify-content-center align-items-center border'>
            {
              newUser?.profilePic.profilePic ?
                <img src={newUser?.profilePic.profilePic} className='w-100 h-100'/>
                :
                <CameraIcon />

            }
          </div>


        </div>
      </div>


      {errorForm && <p className='font-14 bg-red'>اطلاعات را تکمیل کنید</p>}
      <div className='d-flex rtl'>
        <button className='btn btn-primary' onClick={()=>handleSaveUser(newUser?.idNo.idNo)}>save</button>
        <button className='btn btn-secondary mx-2' onClick={()=>handleCloseFormUserModal()}>back</button>
      </div>

    </div>
  );
};

export default FormUser;
