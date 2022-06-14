import React from 'react';
import { ReactComponent as CloseBtn } from "../assets/image/closeBtn.svg";
import { ReactComponent as CheckBtn } from "../assets/image/checkBtn.svg";
import { ReactComponent as CameraIcon } from "../assets/image/camera.svg";

const CheckUser = ({userCheck,setUserCheck,setShow,handleSaveCheckUser}) => {
  return (
    <div className='mt-4'>
      <div className='d-flex mb-4 justify-content-between'>
        <p className="font-12  mb-0 d-flex align-items-center w-25">Name:</p>
        <p className="font-12  mb-0 d-flex align-items-center w-75">{userCheck.name.name}</p>
        <div className='d-flex'>
          <div onClick={()=>setUserCheck({...userCheck,name:{name:userCheck.name.name,isVerify:false}})}>
            <CloseBtn className={`cur-pointer ${!userCheck.name.isVerify && 'bg-red' }`}/>
          </div>
          <div onClick={()=>setUserCheck({...userCheck,name:{name:userCheck.name.name,isVerify:true}})}>
            <CheckBtn className={`ml-2 cur-pointer ${userCheck.name.isVerify && 'bg-green' }`}/>
          </div>
        </div>
      </div>
      <div className='d-flex mb-4 justify-content-between'>
        <p className="font-12  mb-0 d-flex align-items-center w-25">Family Name:</p>
        <p className="font-12  mb-0 d-flex align-items-center w-75">{userCheck.familyName.familyName}</p>
        <div className='d-flex'>
          <div onClick={()=>setUserCheck({...userCheck,familyName:{familyName:userCheck.familyName.familyName,isVerify:false}})}>
            <CloseBtn className={`cur-pointer ${!userCheck.familyName.isVerify && 'bg-red' }`}/>
          </div>
          <div onClick={()=>setUserCheck({...userCheck,familyName:{familyName:userCheck.familyName.familyName,isVerify:true}})}>
            <CheckBtn className={`ml-2 cur-pointer ${userCheck.familyName.isVerify && 'bg-green' }`}/>
          </div>
        </div>
      </div>
      <div className='d-flex mb-4 justify-content-between'>
        <p className="font-12  mb-0 d-flex align-items-center w-25">Mobile:</p>
        <p className="font-12  mb-0 d-flex align-items-center w-75">{userCheck.mobile.mobile}</p>
        <div className='d-flex'>
          <div onClick={()=>setUserCheck({...userCheck,mobile:{mobile:userCheck.mobile.mobile,isVerify:false}})}>
            <CloseBtn className={`cur-pointer ${!userCheck.mobile.isVerify && 'bg-red' }`}/>
          </div>
          <div onClick={()=>setUserCheck({...userCheck,mobile:{mobile:userCheck.mobile.mobile,isVerify:true}})}>
            <CheckBtn className={`ml-2 cur-pointer ${userCheck.mobile.isVerify && 'bg-green' }`}/>
          </div>
        </div>
      </div>
      <div className='d-flex mb-4 justify-content-between'>
        <p className="font-12  mb-0 d-flex align-items-center w-25">ID NO:</p>
        <p className="font-12  mb-0 d-flex align-items-center w-75">{userCheck.idNo.idNo}</p>
        <div className='d-flex'>
          <div onClick={()=>setUserCheck({...userCheck,idNo:{idNo:userCheck.idNo.idNo,isVerify:false}})}>
            <CloseBtn className={`cur-pointer ${!userCheck.idNo.isVerify && 'bg-red' }`}/>
          </div>
          <div onClick={()=>setUserCheck({...userCheck,idNo:{idNo:userCheck.idNo.idNo,isVerify:true}})}>
            <CheckBtn className={`ml-2 cur-pointer ${userCheck.idNo.isVerify && 'bg-green' }`}/>
          </div>
        </div>
      </div>
      <div className='d-flex mb-4 justify-content-between'>
        <p className="font-12  mb-0 d-flex align-items-center w-25">Birth Date:</p>
        <p className="font-12  mb-0 d-flex align-items-center w-75">{userCheck.birthDate.birthDate}</p>
        <div className='d-flex'>
          <div onClick={()=>setUserCheck({...userCheck,birthDate:{birthDate:userCheck.birthDate.birthDate,isVerify:false}})}>
            <CloseBtn className={`cur-pointer ${!userCheck.birthDate.isVerify && 'bg-red' }`}/>
          </div>
          <div onClick={()=>setUserCheck({...userCheck,birthDate:{birthDate:userCheck.birthDate.birthDate,isVerify:true}})}>
            <CheckBtn className={`ml-2 cur-pointer ${userCheck.birthDate.isVerify && 'bg-green' }`}/>
          </div>
        </div>
      </div>
      <div className='d-flex mb-4 justify-content-between'>
        <p className="font-12  mb-0 d-flex align-items-center w-25">Address:</p>
        <p className="font-12  mb-0 d-flex align-items-center w-75">{userCheck.address.address}</p>
        <div className='d-flex'>
          <div onClick={()=>setUserCheck({...userCheck,address:{address:userCheck.address.address,isVerify:false}})}>
            <CloseBtn className={`cur-pointer ${!userCheck.address.isVerify && 'bg-red' }`}/>
          </div>
          <div onClick={()=>setUserCheck({...userCheck,address:{address:userCheck.address.address,isVerify:true}})}>
            <CheckBtn className={`ml-2 cur-pointer ${userCheck.address.isVerify && 'bg-green' }`}/>
          </div>
        </div>
      </div>
      <div className='d-flex mb-4 justify-content-between'>
        <p className="font-12 mb-0 d-flex align-items-center w-25">Profile Pic:</p>
        <div className="d-flex uploader-item file-uploader-box rounded w-75">
          < div className='profileImg  rounded cur-pointer bg-white d-flex justify-content-center align-items-center border'>
            {
              userCheck.profilePic.profilePic ?
                <img src={userCheck.profilePic.profilePic} className='w-100 h-100'/>
                :
                <CameraIcon />

            }
          </div>
          <div className='d-flex'>
            <div className='d-flex align-items-end ml-1' onClick={()=>setUserCheck({...userCheck,profilePic:{profilePic:userCheck.profilePic.profilePic,isVerify:false}})}>
              <CloseBtn className={`cur-pointer ${!userCheck.profilePic.isVerify && 'bg-red' }`}/>
            </div>
            <div className='d-flex align-items-end' onClick={()=>setUserCheck({...userCheck,profilePic:{profilePic:userCheck.profilePic.profilePic,isVerify:true}})}>
              <CheckBtn className={`ml-2 cur-pointer ${userCheck.profilePic.isVerify && 'bg-green' }`}/>
            </div>
          </div>

        </div>
      </div>


      <div className='d-flex rtl'>
        <button className='btn btn-primary' onClick={()=>handleSaveCheckUser(userCheck.idNo.idNo)}>save</button>
        <button className='btn btn-secondary mx-2' onClick={()=>setShow(false)}>back</button>
      </div>

    </div>

  );
};

export default CheckUser;
