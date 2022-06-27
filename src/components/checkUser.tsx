import React from 'react';
import { ReactComponent as CloseBtn } from "../assets/image/closeBtn.svg";
import { ReactComponent as CheckBtn } from "../assets/image/checkBtn.svg";
import { ReactComponent as CameraIcon } from "../assets/image/camera.svg";
import {UserDataType} from "../types/app";

const CheckUser = ({
  userCheck,
  setUserCheck,
  setShow,
  handleSaveCheckUser
}:{
  userCheck:UserDataType;
  setUserCheck:Function;
  setShow:Function;
  handleSaveCheckUser:Function;
}) => {
  const userCopy = {...userCheck};
  return (
    <div className='mt-4'>
      {Object.keys(userCopy).map((key,index)=>
        key !== 'profilePic' &&
        key !== 'pin' &&
          <div className='d-flex mb-4 justify-content-between'>
            <p className="font-12  mb-0 d-flex align-items-center w-25">{key}:</p>
            <p className="font-12  mb-0 d-flex align-items-center w-75">{userCheck[key].value}</p>
            <div className='d-flex'>
              <div onClick={()=> {
                userCopy[key].isVerify = false;
                setUserCheck(userCopy);
              }}>
                <CloseBtn className={`cur-pointer ${!userCheck[key].isVerify && 'bg-red' }`}/>
              </div>
              <div onClick={()=> {
                userCopy[key].isVerify = true;
                setUserCheck(userCopy);
              }}>
                <CheckBtn className={`ml-2 cur-pointer ${userCheck[key].isVerify && 'bg-green' }`}/>
              </div>
            </div>
          </div>
      )}
      <div className='d-flex mb-4 justify-content-between'>
        <p className="font-12 mb-0 d-flex align-items-center w-25">Profile Pic:</p>
        <div className="d-flex uploader-item file-uploader-box rounded w-75">
          < div className='profileImg  rounded cur-pointer bg-white d-flex justify-content-center align-items-center border'>
            {
              userCheck?.profilePic.value ?
                <img src={userCheck?.profilePic.value} className='w-100 h-100'/>
                :
                <CameraIcon />

            }
          </div>
          <div className='d-flex'>
            <div className='d-flex align-items-end ml-1' onClick={()=>setUserCheck({...userCheck,profilePic:{...userCheck.profilePic,isVerify:false}})}>
              <CloseBtn className={`cur-pointer ${!userCheck?.profilePic.isVerify && 'bg-red' }`}/>
            </div>
            <div className='d-flex align-items-end' onClick={()=>setUserCheck({...userCheck,profilePic:{...userCheck.profilePic,isVerify:true}})}>
              <CheckBtn className={`ml-2 cur-pointer ${userCheck?.profilePic.isVerify && 'bg-green' }`}/>
            </div>
          </div>

        </div>
      </div>


      <div className='d-flex rtl'>
        <button className='btn btn-primary' onClick={()=>handleSaveCheckUser(userCheck?.idNo.value)}>save</button>
        <button className='btn btn-secondary mx-2' onClick={()=>setShow(false)}>back</button>
      </div>

    </div>

  );
};

export default CheckUser;
