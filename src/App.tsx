import React, { useState } from "react";
import "./assets/scss/style.scss";
import SearchBox from "./components/searchBox";
import { userData } from "./data";
import UserItem from "./components/userItem";
import FormUser from "./components/formUser";
import Modal from './components/modal';
import CheckUser from "./components/checkUser";
import {UserDataType} from "./types/app";

const initialNewUser = {
  name:{value: '', isVerify: false},
  familyName:{value: '', isVerify: false},
  birthDate:{value: '', isVerify: false},
  idNo:{value: '', isVerify: false},
  mobile:{value: '', isVerify: false},
  address:{value: '', isVerify: false},
  profilePic:{value: '',isVerify: false},
  pin:{value:false,isVerify: true}
}
function App() {
  const usersStorage = JSON.parse(localStorage.getItem('USERS')!) || userData
  const [fieldSearch,setFieldSearch] = useState<string>('');
  const [users,setUsers]=useState<UserDataType[]>(usersStorage);
  const [userCheck,setUserCheck]=useState<UserDataType | null>(null);
  const [userEdit,setUserEdit]=useState<UserDataType | null>(null);
  const [newUser,setNewUser]=useState<UserDataType>( initialNewUser);
  const [showFormUserModal,setShowFormUserModal]=useState<boolean>(false);
  const [showCheckUserModal,setShowCheckUserModal]=useState<boolean>(false);
  const [errorForm,setErrorForm]=useState<boolean>(false);

  const handleChangeSearch = (e:any) => {
    setFieldSearch(e.target.value)
    if (e.target.value.length === 0) return setUsers(usersStorage)
    const filterName = users.filter(item => item.name.value.toLowerCase().includes(e.target.value.toLowerCase()));
    const filterPin= users.filter(item => item.pin.value);
    const filterData = new Set([...filterPin,...filterName]);
      setUsers([...filterData]);
  };

  const handleAddUser =() => {
    const filledForm =Object.keys(newUser).map(key =>  newUser[key].value)
    filledForm.pop();
    const isFilled = filledForm.every(item => item);
    if (isFilled) {
      setShowFormUserModal(false);
      setUsers([...users,newUser]);
      setNewUser(initialNewUser);
      setErrorForm(false);
      localStorage.setItem('USERS',JSON.stringify([...users,newUser]))
    }
    else setErrorForm(true)
  }

  const handleEditUser = (id:string) => {
    const usersCopy = [...users]
    let findIndex = usersCopy.findIndex(item => item.idNo.value === id);
    if (userEdit) {
      usersCopy[findIndex] = userEdit;
    }
    setUsers(usersCopy)
    setUserEdit(null)
    setShowFormUserModal(false)
    localStorage.setItem('USERS',JSON.stringify(usersCopy))
  }
  const handleCheckUserModal = (id:string) =>{
    setShowCheckUserModal(true)
    const findItem = users.find(item => item.idNo.value === id)!
    setUserCheck(findItem)
  }
  const handleSaveCheckUser = (id:string)=>{
    const usersCopy = [...users]
    let findIndex = usersCopy.findIndex(item => item.idNo.value === id);
    if (userCheck) {
      usersCopy[findIndex] = userCheck;
    }
    setUsers(usersCopy)
    setShowCheckUserModal(false)
    localStorage.setItem('USERS',JSON.stringify(usersCopy))

  }
  const selectUserForPin =(check:boolean,id:string)=>{
    const usersCopy = [...users]
    let findIndex = usersCopy.findIndex(item => item.idNo.value === id);
    usersCopy[findIndex] = {...usersCopy[findIndex],pin:{value:check,isVerify:true}};
    setUsers(usersCopy);
    localStorage.setItem('USERS',JSON.stringify(usersCopy))
  }

  const handleShowFormUserModal =(id:string) => {
    setShowFormUserModal(true)
    const findItem = users.find(item => item.idNo.value === id)!
    setUserEdit(findItem)
  }

  const handleCloseFormUserModal = () =>{
    if (userEdit) setUserEdit(null)
    else {
      setNewUser(initialNewUser)
      setErrorForm(false)
    };
    setShowFormUserModal(false)
  }

  ///////////// sort by pin
  const pinAll = Object.keys(users).every((key) => users[key].pin.value);
  const NoPinAll = Object.keys(users).every((key) => !users[key].pin.value);
  if (pinAll || NoPinAll) users.sort((a,b) => (a.name.value > b.name.value) ? 1 : ((b.name.value > a.name.value ? -1 : 0)))
  else  users.sort((x,y)=>{ return x.pin.value ? -1 : y.pin.value ? 1 : 0; });

  const _users =
    users.map(user => {
    return(
      <UserItem
        key={user.idNo.value}
        user={user}
        selectUserForPin={(check:boolean) => selectUserForPin(check, user.idNo.value)}
        handleCheckUser={() => handleCheckUserModal(user.idNo.value)}
        showFormUserModal={()=>handleShowFormUserModal(user.idNo.value)}
      />
    )
    }
  )
  return (
    <>
      <SearchBox
        onChange={(e:any)=>handleChangeSearch(e)}
        value={fieldSearch}
      />
      {_users}
      <div
        className='addUser d-flex align-items-center justify-content-center'
        onClick={()=>setShowFormUserModal(true)}>add
      </div>

      {
        showFormUserModal &&
        (userEdit || newUser) &&
        <Modal
          showState={showFormUserModal}
          setShow={setShowFormUserModal}
          className="my-modal"
          bodyClassName="py-lg-4 py-2 px-3 px-lg-4">
          <FormUser
            newUser={userEdit || newUser}
            errorForm={errorForm}
            setNewUser={userEdit ? setUserEdit : setNewUser}
            handleCloseFormUserModal={()=>handleCloseFormUserModal()}
            handleSaveUser={(id:string)=>userEdit ? handleEditUser(id) : handleAddUser()}
          />
        </Modal>
      }
      {
        showCheckUserModal &&
        userCheck &&
        <Modal
          showState={showCheckUserModal}
          setShow={setShowCheckUserModal}
          className="my-modal"
          bodyClassName="py-lg-4 py-2 px-3 px-lg-4">
          <CheckUser
            userCheck={userCheck}
            setUserCheck={setUserCheck}
            setShow={setShowCheckUserModal}
            handleSaveCheckUser={handleSaveCheckUser}/>
        </Modal>
      }
    </>
  );
}

export default App;
