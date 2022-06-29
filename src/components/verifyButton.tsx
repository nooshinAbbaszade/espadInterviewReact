import React from 'react';
import {ReactComponent as CloseBtn} from "../assets/image/closeBtn.svg";
import {ReactComponent as CheckBtn} from "../assets/image/checkBtn.svg";
import {UserDataType} from "../types/app";

const VerifyButton = ({
  userCopy,
  setUserCheck,
  item,
  userCheck
}:{
  userCopy:UserDataType,
  setUserCheck:Function
  item:string
  userCheck:UserDataType
}) => {
  return (
    <div className='d-flex'>
      <div onClick={()=> {
        userCopy[item].isVerify = false;
        setUserCheck(userCopy);
      }}>
        <CloseBtn className={`cur-pointer ${!userCheck[item].isVerify && 'bg-red' }`}/>
      </div>
      <div onClick={()=> {
        userCopy[item].isVerify = true;
        setUserCheck(userCopy);
      }}>
        <CheckBtn className={`ml-2 cur-pointer ${userCheck[item].isVerify && 'bg-green' }`}/>
      </div>
    </div>

  );
};

export default VerifyButton;
