import React, { useState } from "react";
import "./assets/scss/style.scss";
import SearchBox from "./components/searchBox";
import { userData } from "./data";
import UserItem from "./components/userItem";
import FormUser from "./components/formUser";
import Modal from './components/modal';
import CheckUser from "./components/checkUser";

const initialNewUser = {
  name:{name: '', isVerify: false},
  familyName:{familyName: '', isVerify: false},
  birthDate:{birthDate: '', isVerify: false},
  idNo:{idNo: '', isVerify: false},
  mobile:{mobile: '', isVerify: false},
  address:{address: '', isVerify: false},
  profilePic:{profilePic: '',isVerify: false},
  pin:{pin:false,isVerify: true}
}
function App() {
  const usersStorage = JSON.parse(localStorage.getItem('USERS')) || userData
  const [fieldSearch,setFieldSearch] = useState('');
  const [users,setUsers]=useState(usersStorage);
  const [userCheck,setUserCheck]=useState({});
  const [userEdit,setUserEdit]=useState(null);
  const [showFormUserModal,setShowFormUserModal]=useState(false);
  const [showCheckUserModal,setShowCheckUserModal]=useState(false);
  const [errorForm,setErrorForm]=useState(false);
  const [newUser,setNewUser]=useState( initialNewUser);

  const handleChangeSearch = (e) => {
    setFieldSearch(e.target.value)
    if (e.target.value.length === 0) return setUsers(usersStorage)
    const filterName = users.filter(item => item.name.name.toLowerCase().includes(e.target.value.toLowerCase()));
    const filterPin= users.filter(item => item.pin.pin);
    const filterData = new Set([...filterPin,...filterName]);
      setUsers([...filterData]);
  };

  const handleAddUser =() => {
    const filledForm =Object.keys(newUser).map((key,index) => {
     return  newUser[key][key];
    })
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

  const handleEditUser = (id) => {
    const usersCopy = [...users]
    let findIndex = usersCopy.findIndex(item => item.idNo.idNo === id);
    usersCopy[findIndex] = userEdit;
    setUsers(usersCopy)
    setUserEdit(null)
    setShowFormUserModal(false)
    localStorage.setItem('USERS',JSON.stringify(usersCopy))
  }
  const handleCheckUserModal = (id) =>{
    setShowCheckUserModal(true)
    const findItem = users.find(item => item.idNo.idNo === id)
    setUserCheck(findItem)
  }
  const handleSaveCheckUser = (id)=>{
    const usersCopy = [...users]
    let findIndex = usersCopy.findIndex(item => item.idNo.idNo === id);
    usersCopy[findIndex] = userCheck;
    setUsers(usersCopy)
    setShowCheckUserModal(false)
    localStorage.setItem('USERS',JSON.stringify(usersCopy))

  }
  const selectUserForPin =(check,id)=>{
    const usersCopy = [...users]
    let findIndex = usersCopy.findIndex(item => item.idNo.idNo === id);
    usersCopy[findIndex] = {...usersCopy[findIndex],pin:{pin:check,isVerify:true}};
    setUsers(usersCopy);
    localStorage.setItem('USERS',JSON.stringify(usersCopy))
  }

  const handleShowFormUserModal =(id) => {
    setShowFormUserModal(true)
    const findItem = users.find(item => item.idNo.idNo === id)
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
  const PinAll = Object.keys(users).every((key) => users[key].pin.pin);
  const NoPinAll = Object.keys(users).every((key) => !users[key].pin.pin);
  if (PinAll || NoPinAll) users.sort((a,b) => (a.name.name > b.name.name) ? 1 : ((b.name.name > a.name.name ? -1 : 0)))
  else  users.sort((x,y)=>{ return x.pin.pin === true ? -1 : y.code === true ? 1 : 0; });

  const _users =
    users.map(user => {
    return(
      <UserItem
        key={user.idNo.idNo}
        user={user}
        selectUserForPin={(check) => selectUserForPin(check, user.idNo.idNo)}
        handleCheckUser={() => handleCheckUserModal(user.idNo.idNo)}
        showFormUserModal={()=>handleShowFormUserModal(user.idNo.idNo)}
      />
    )
    }
  )
  return (
    <>
      <SearchBox
        onChange={handleChangeSearch}
        value={fieldSearch}
      />
      {_users}
      <div className='addUser d-flex align-items-center justify-content-center' onClick={()=>setShowFormUserModal(true)}>
        add
      </div>

      {
        showFormUserModal &&
        <Modal
          showState={showFormUserModal}
          setShow={setShowFormUserModal}
          bsPrefix="modal"
          className="my-modal"
          bodyClassName="py-lg-4 py-2 px-3 px-lg-4">
          <FormUser
            newUser={userEdit || newUser}
            errorForm={errorForm}
            setNewUser={userEdit ? setUserEdit : setNewUser}
            handleCloseFormUserModal={handleCloseFormUserModal}
            handleSaveUser={(id)=>userEdit ? handleEditUser(id) : handleAddUser()}
          />
        </Modal>
      }
      {
        showCheckUserModal &&
        <Modal
          showState={showCheckUserModal}
          setShow={setShowCheckUserModal}
          bsPrefix="modal"
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
