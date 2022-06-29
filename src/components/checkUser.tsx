import React from 'react';
import { ReactComponent as CameraIcon } from "../assets/image/camera.svg";
import {UserDataType} from "../types/app";
import VerifyButton from "./verifyButton";

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
        key !== 'pin' &&
          <div className='d-flex mb-4 justify-content-between'>
            <p className="font-12  mb-0 d-flex align-items-center w-25">{key}:</p>
            { key === 'profilePic' ?
              <div className="d-flex uploader-item file-uploader-box rounded w-75 align-items-end">
                < div className='profileImg  rounded cur-pointer bg-white d-flex justify-content-center align-items-center border mr-1'>
                  {
                    userCheck?.profilePic.value ?
                      <img src={userCheck?.profilePic.value} className='w-100 h-100'/>
                      :
                      <CameraIcon />

                  }
                </div>
                <VerifyButton
                  userCopy={userCopy}
                  item={key}
                  setUserCheck={setUserCheck}
                  userCheck={userCheck}
                />
              </div>
              :
              <>
              <p className="font-12  mb-0 d-flex align-items-center w-75">{userCheck[key].value}</p>
                <VerifyButton
                  userCopy={userCopy}
                  item={key}
                  setUserCheck={setUserCheck}
                  userCheck={userCheck}
                />
              </>
            }
          </div>
      )}

      <div className='d-flex rtl'>
        <button className='btn btn-primary' onClick={()=>handleSaveCheckUser(userCheck?.idNo.value)}>save</button>
        <button className='btn btn-secondary mx-2' onClick={()=>setShow(false)}>back</button>
      </div>

    </div>

  );
};

export default CheckUser;
